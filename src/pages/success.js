import React from 'react'
import Layout from '../components/Layout'

export const Success = () => {
  return (
    <Layout>
        <div className='d-flex justify-content-center align-items-center'>
            <h3 className='p-3'>Merci de communiquer avec moi</h3>
            <p className='px-3'>Votre message a bien été envoyé et sera traité dans les plus bref délais. Merci!</p>
        </div>
    </Layout>
  )
}


