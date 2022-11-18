import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import { Link } from 'gatsby'

function Error() {
  return (
    <Layout>
       <FullScreen className='d-flex flex-column justify-content-center align-items-center'>
            <h1 className='pb-4'>404</h1>
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

export default Error