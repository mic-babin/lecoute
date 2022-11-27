import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import styled from 'styled-components'
import Button from './styled-components/Button'
import Image from './styled-components/image'
import { motion } from 'framer-motion'

const Hero = () => {
    const data = useStaticQuery(graphql`
        {
            contentfulHero {
                title
                kicker {
                kicker
                }
                cta {
                id
                text
                href
                }
                featured {
                    gatsbyImageData(quality: 100, placeholder: BLURRED)
                }
            }
        }
    `)
    const {title, kicker, cta, featured } = data.contentfulHero

  return (
    <>  
        <ScrollTo id="home"></ScrollTo>
        <Section className="container">
            <div className="row">
                <div className="col-lg-6 d-flex flex-column align-items-start justify-content-center pe-lg-5 pb-5 py-lg-0 mb-5 my-lg-0">
                    {title && (
                        <motion.h1 
                            whileInView={{x: 0, opacity: 1}} 
                            initial={{x: -200, opacity: 0}}
                            transition={{
                                duration: 0.4,
                                delay: 0.2,
                                type: 'spring'
                              }}
                            viewport={{ once: true }}
                        >
                            {title}
                        </motion.h1>
                    )}
                    {kicker &&(
                        <motion.p 
                            className="kicker py-4"
                            whileInView={{x: 0, opacity: 1}} 
                            initial={{x: -200, opacity: 0}}
                            transition={{
                                duration: 0.4,
                                delay: 0.3,
                                type: 'spring'
                              }}
                            viewport={{ once: true }}
                        >
                            {kicker.kicker}
                        </motion.p>
                    )}    
                    {cta && cta.map((content) => (
                        <motion.div
                            whileInView={{y: 0, opacity: 1}} 
                            initial={{y: 100, opacity: 0}}
                            transition={{
                                duration: 0.4,
                                delay: 0.4,
                                type: 'spring'
                            }}
                            viewport={{ once: true }}    
                        >
                            <Button 
                            key={content.id} 
                            to={content.href}
                        >   
                            {content.text}
                        </Button>
                        </motion.div>
                        
                    ))}    
                </div>
                <div className="col-lg-6 my-5 my-lg-0 ">
                    {featured && (
                    <motion.div   
                        whileInView={{ opacity: 1}} 
                        initial={{ opacity: 0}}
                        transition={{
                            duration: 0.4,
                            delay: 0.3,
                            type: 'spring'
                        }}
                        viewport={{ once: true }}
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
    </>
  )
}

const FeaturedImage = styled(Image)`
  box-shadow: -50px -50px 0px rgba(57,82,102,0.25), 50px 50px 0px rgba(87,122,147,0.25);
`

const Section = styled.section`
    margin-top: 120px;
`
const ScrollTo = styled.div`
  transform: translateY(-110px);
`
export default Hero

