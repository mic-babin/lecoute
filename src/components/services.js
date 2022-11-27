import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Button from './styled-components/Button'
import { ServiceCard } from "./services-card"
import styled from "styled-components"
import { motion } from 'framer-motion'

const Services = () => {
  const data = useStaticQuery(graphql`
      {
        contentfulServices {
          id
          title
          kicker {
            kicker
          }
          services {
            id
            title
            description {
              description
            }
            icon {
              url
            }
            cta {
              id
              text
              href
              id
            }
          }
          cta {
            id
            text
            href
          }
        }
      }
    `)
    const {title, kicker, services, cta } = data.contentfulServices


  return (
    <>
      <ScrollTo id="services"></ScrollTo>
      <section className="blue-bg my-5">
        <div className="container py-5 py-lg-0">
          <div className="d-flex align-items-center flex-column">
              {title && (
                <motion.h2
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
                </motion.h2>
              )}
              {kicker &&(
                <motion.p 
                  className="kicker py-3"
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
          </div>
          <div className="row mb-5">
              {services && services.map((content, index) => (
                <motion.div 
                  className="col-lg-4" 
                  key={content.id}
                  whileInView={{ opacity: 1}} 
                  initial={{ opacity: 0}}
                  transition={{
                    duration: 0.4,
                    delay: index/5 + 0.2,
                    type: 'spring'
                  }}
                  viewport={{ once: true }}
                >
                  <ServiceCard  index={index} {...content}/>
                </motion.div>
              ))}    
          </div>
          <div className="d-flex justify-content-center">
              {cta && cta.map((content) => (
                <motion.div
                  whileInView={{y: 0, opacity: 1}} 
                  initial={{y: 100, opacity: 0}}
                  transition={{
                    duration: 0.4,
                    delay: 0.2,
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
        </div>
      </section>
    </>
  )
}

const ScrollTo = styled.div`
  transform: translateY(-80px);
`

export default Services