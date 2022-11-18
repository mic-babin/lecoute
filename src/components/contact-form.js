import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import styled from 'styled-components'
import SVG from '../assets/images/shape.svg'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import InputMask from 'react-input-mask';
import fetch from 'node-fetch'



const ContactForm = () =>  {
  const data = useStaticQuery(graphql`
    query {
      contentfulContactForm {
        id
        title
        inputFields {
          id
          text
          placeholder
          type
          fieldName
          required
        }
        cta {
          id
          text
        }
      }  
    }
  `)
  const {title, inputFields, cta } = data.contentfulContactForm

  const defaultFormFields = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const [show, setShow] = useState(false);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event)
    

    const data = {
      subscriberName: formFields.firstName,
      subscriberEmail: formFields.email,
    };
    
  

    console.log(data)
      handleShow();
      resetFormFields();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  

  return (
    <>
      <ScrollTo id="contact"></ScrollTo>
      <Section className="container mt-0 mt-lg-5 px-3 px-sm-5 form-bg">
        <Shape className="d-none d-xxl-block"src={SVG} alt="shape" />
        <div className="my-3 my-sm-0 py-5 py-sm-0 d-flex flex-column align-items-center">
          {title && (<H2 className='px-3 text-center'>{title}</H2>)}
          <Form  
            className="d-flex flex-column px-sm-5" 
            name='contact-form' 
            method='post'  
            netlify-honeypot='bot-field'
            data-netlify='true'
            >
            <div className="row py-5">
              <input type="hidden" name='bot-field'/>
              <input type="hidden" name='form-name' value='contact-form'/>
              {inputFields && inputFields.map((content) => (
                <div className='col-lg-6' key={content.id}>
                  <Label>{content.text}</Label>
                  <Input 
                    key={content.id} 
                    type={content.type} 
                    mask={content.fieldName === 'phone' ? '(+1) 999 999-9999' : null }
                    placeholder={content.placeholder} 
                    required={content.required} 
                    onChange={handleChange} 
                    name={content.fieldName}
                    value={formFields[content.fieldName]}
                    />
                </div>
              ))}
            </div> 
            {cta && (<FormButton type="submit" onclick={handleSubmit} className="align-self-center" key={cta.id}>{cta.text}</FormButton>)}   
          </Form> 
        </div>   
      </Section>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body>
          <h3 className='p-3'>Merci de communiquer avec moi</h3>
          <p className='px-3'>Votre message a bien été envoyé et sera traité dans les plus bref délais. Merci!</p>
          <ModalButton className="pe-3" onClick={handleClose}>
            Fermer
          </ModalButton>
        </Modal.Body>
      </Modal>
    </>
  )
}

const Form = styled.form`
  max-width:700px;
  display: block;
`
const Label = styled.label`
  display:block;
  font-size: 14px;
  font-weight: 600;
  color: #51565D;
  margin-bottom: 8px;
  margin-left: calc(1.5rem + 1px);
`

const FormButton = styled.button`
 font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  background-color: #395266;
  padding: 0.75rem 1.5rem;
  border: 1.5px solid #395266;
  border-radius: 27px;
  transition: 0.2s ease-in;
  cursor: pointer;
  width: 280px !important;
  text-align: center;
  &:hover{
        color: #395266;
        background-color: #ffffff;
    }
  @media only screen and (max-width: 576px) {
    width: 260px !important;
  }
`
const Section = styled.section`
  border-top-left-radius: 150px;
  border-bottom-right-radius: 150px;
`

const Input = styled(InputMask)`
  margin-bottom: 15px;
  width: 100%;
  border: 1px solid #C9CED3;
  border-radius: 27px;
  padding: 1rem 1.5rem;

  &:focus{
    border: 1px solid #395266;
    outline: none !important;
  }
`
const H2 = styled.h2`
  @media only screen and (max-width: 576px) {
    font-size: 30px !important;
  }
`
const Shape = styled.img`
  position: absolute;
  bottom:0;
  left:0;
  transform: rotate(180deg);
`

const ModalButton = styled.p`
  cursor: pointer;
  text-align: right;
  font-weight:bold;
  color: #395266;
`
const ScrollTo = styled.div`
  transform: translateY(-130px)
`
export default ContactForm