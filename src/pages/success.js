import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import styled from 'styled-components'

function Success() {
  return (
    <Layout>
        <FullScreen className='d-flex flex-column justify-content-center align-items-center'>
            <h3 className='pb-4 px-4 text-center'>Merci de communiquer avec moi</h3>
            <p className='px-4 pb-4 text-center'>Votre message a bien été envoyé et sera traité dans les plus bref délais. Merci!</p>
            <FormButton to='/'>Retour</FormButton>
        </FullScreen>
        
    </Layout>
  )
}

const FullScreen = styled.div`
    margin-top: 110px;
    height: calc(100vh - 408px);
`
const FormButton = styled(Link)`
    text-decoration:none;
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

export default Success


