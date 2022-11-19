import { graphql } from 'gatsby'
import React from 'react'
import ContactCards from '../components/contact-cards'
import Layout from '../components/Layout'
import Service from '../components/service'

const ServiceTemplate = ({data}) => {
    
  return (
        <Layout>
            <div className="container">
                <Service data={data}/>
                <ContactCards/>
            </div>
        </Layout>
        
  )
}




export const query = graphql`
query GetService($title: String) {
    contentfulServiceCard(title: {eq: $title}) {
      title
      id
      longDescription {
        longDescription
      }
      featured {
        gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED, quality: 100)
      }
    }
  }
`

export default ServiceTemplate