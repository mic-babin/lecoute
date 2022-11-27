import React from 'react'
import styled from 'styled-components'
import { getImage } from 'gatsby-plugin-image'
import Button from './styled-components/Button'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Image from './styled-components/image'
import { motion } from 'framer-motion'

const Service = ({data}) => {
    const {title, longDescription, featured } = data.contentfulServiceCard
    return (
        <Section className="container">
            <div className="row">
                <div className="col-lg-6 d-flex flex-column align-items-start justify-content-center pe-lg-5 pb-5 py-lg-0 mb-5 my-lg-0">
                    {title && (
                        <motion.h1
                            whileInView={{x: 0, opacity: 1}} 
                            initial={{x: -200, opacity: 0}}
                            transition={{
                                duration: 0.4,
                                delay: 0.1,
                                type: 'spring'
                            }}
                            viewport={{ once: true }}
                        >
                            {title}
                        </motion.h1>
                    )}
                    {longDescription &&(
                        <motion.p 
                            className="py-4"
                            whileInView={{ opacity: 1}} 
                            initial={{ opacity: 0}}
                            transition={{
                                duration: 0.4,
                                delay: 0.3,
                                type: 'spring'
                              }}
                            viewport={{ once: true }}
                        >
                            {renderRichText(longDescription)}
                        </motion.p>
                    )}
                    <motion.div 
                        className="d-flex justify-content-center w-100 pe-5"
                        whileInView={{y: 0, opacity: 1}} 
                            initial={{y: 100, opacity: 0}}
                            transition={{
                                duration: 0.4,
                                delay: 0.1,
                                type: 'spring'
                            }}
                            viewport={{ once: true }}
                    >
                        <Button  href='../#contact'>Prendre rendez-vous</Button>
                    </motion.div>    
                </div>
                <div className="col-lg-6 my-5 my-lg-0 d-flex align-items-center ">
                    {featured && (
                        <motion.div
                            
                        >
                            <FeaturedImage
                                alt='featured'
                                image={getImage(featured.gatsbyImageData)}
                            />
                        </motion.div>
                    
                    )}
                </div>
            </div>
        </Section>
    )
}

const FeaturedImage = styled(Image)`
  box-shadow: 50px 50px 0px rgba(87,122,147,0.25);
`

const Section = styled.section`
    margin-top: 120px;
`

export default Service
