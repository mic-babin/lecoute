import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Button from './Button'

const Service = ({data}) => {
    const {title, longDescription, featured } = data.contentfulServiceCard
    return (
        <Section className="container">
            <div className="row">
                <div className="col-lg-6 d-flex flex-column align-items-start justify-content-center pe-lg-5 pb-5 py-lg-0 mb-5 my-lg-0">
                    {title && (<h1>{title}</h1>)}
                    {longDescription &&(<p className="kicker py-4">{longDescription.longDescription}</p>)}    
                    <Button  href='../#contact'>Prendre rendez-vous</Button>
                </div>
                <div className="col-lg-6 my-5 my-lg-0 ">
                    {featured && (
                    <FeaturedImage
                        alt='featured'
                        image={getImage(featured.gatsbyImageData)}
                    />
                    )}
                </div>
            </div>
        </Section>
    )
}

const FeaturedImage = styled(GatsbyImage)`
  border-top-left-radius: 25%;
  border-bottom-right-radius: 25%;
  width:calc(100%);
  max-height:700px;
  box-shadow: 50px 50px 0px rgba(87,122,147,0.25);
`

const Section = styled.section`
    margin-top: 120px;
`

export default Service
