import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'

function Error() {
  return (
    <Layout>
       <FullScreen>
          <h1 className='d-flex justify-content-center align-items-center'>404</h1>
       </FullScreen>
    </Layout>
  )
}

const FullScreen = styled.div`
    margin-top: 110px;
    height: calc(100vh -100px);
`

export default Error