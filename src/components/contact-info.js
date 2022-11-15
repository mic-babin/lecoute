import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components'

const ContactInfo = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulContactInfo {
        title
        kicker {
          kicker
        }
        contactList {
          id
          title
          address
          icon {
            url
          }
        }
        businessHours {
          title
          businessDaysAndTime {
            id
            day
            time
          }
        }
        googleMaps {
          gatsbyImageData(quality: 100, placeholder: BLURRED)
        }
      }
    }
  `)
  const {title, kicker, contactList, businessHours, googleMaps } = data.contentfulContactInfo
  
  const address = (contact) => {
    switch (contact.title) {
      case 'Téléphone': 
        return "tel:" + contact.address
      case 'Courriel': 
        return "mailTo:" + contact.address
      default:
        return '#contact-info'
    }

  }
  return (
    <>
      <section className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center pe-lg-5 my-5 my-lg-0">
            {title && (<h2>{title}</h2>)}
            {kicker &&(<p className="kicker py-3">{kicker.kicker}</p>)}
            <div className="row pb-4">
              {contactList && contactList.map((contact, index) => (
                <div className={index === 2 ? 'col-12': 'col-md-6 col-lg-12 col-xxl-6'}>
                  <div className="d-flex align-items-center py-3">
                    <Icon className="d-flex justify-content-center align-items-center">
                      <img src={contact.icon.url} alt="" />
                    </Icon>
                    <div className="d-block  ps-3">
                      <Title>
                        {contact.title}
                      </Title>
                      <Address href={address(contact)}>
                        {contact.address}
                      </Address>
                    </div>
                  </div>
                </div>

              ))}
            </div>
            <BusinessHoursWrapper className="blue-bg p-5 me-lg-5">
              {businessHours && businessHours.map((section) => (
                <>
                  <h3 className="pb-3">{section.title}</h3>
                  {section.businessDaysAndTime.map((content, index) => (
                    <div className="d-flex justify-content-between" key={content.id} style={{borderBottom: index === 0 ? '1px solid #395266' : ''}}>
                      <Day>
                        {content.day}
                      </Day>
                      <Time>
                        {content.time}
                      </Time>
                    </div>
                  ))} 
                </>      
              ))}   
            </BusinessHoursWrapper>    
          </div>
          <div className="col-lg-6 mb-5 mb-lg-0">
            <ScrollTo  id="contact-info"></ScrollTo>
            <FeaturedMap>
              <IFrame src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18305.17758251697!2d-71.18716718372069!3d46.999383905620796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xad630c9e0c543f23!2zNDfCsDAwJzA5LjAiTiA3McKwMTEnNDAuMiJX!5e0!3m2!1sen!2sca!4v1668507091691!5m2!1sen!2sca" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></IFrame>
            </FeaturedMap>
          </div>
        </div>
      </section>
    </>
  )
}


const FeaturedMap = styled.div`
  width:calc(100%);
  max-height:700px;
  overflow:hidden;
  border-bottom-right-radius: 150px;
  border-top-left-radius: 150px;
`

const IFrame = styled.iframe`
  width:calc(100%);
  height:1000px;
  margin-top: -150px;

`

const BusinessHoursWrapper = styled.div`
  border-bottom-left-radius: 100px;
  border-top-right-radius: 100px;
`
const Day = styled.div`
  font-size: 18px;
  color:  #51565D;
  padding: 20px 0;
  @media only screen and (max-width: 400px) {
    font-size: 16px !important;
  }
  @media only screen and (max-width: 370px) {
    font-size: 15px !important;
  }
`
const Time = styled(Day)`
  font-weight: bold;
`
const Icon = styled.div`
  background-color: #577A93;
  height: 50px;
  width: 50px;
  min-width: 50px;
  border-radius: 50%;
`
const Title = styled.div`
  font-size: 14px;
  color: #51565D;
`

const Address = styled.a`
  font-size: 18px;
  color: #293039;
  font-weight: bold;
  text-decoration:none;
  &:hover{
    color: #293039;
  }
`
const ScrollTo = styled.div`
  transform: translateY(-130px);
`

export default ContactInfo