import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'

function Success() {
  return (
    <Layout>
        <FullScreen className='d-flex justify-content-center align-items-center'>
            <h3 className='p-3'>Merci de communiquer avec moi</h3>
            <p className='px-3'>Votre message a bien été envoyé et sera traité dans les plus bref délais. Merci!</p>
        </FullScreen>
    </Layout>
  )
}

const FullScreen = styled.div`
    margin-top: 110px;
    height: calc(100vh -100px);
`

export default Success


