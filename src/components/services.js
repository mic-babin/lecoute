import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Button from './Button'
import { ServiceCard } from "./services-card"
import styled from "styled-components"

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
              {title && (<h2>{title}</h2>)}
              {kicker &&(<p className="kicker py-3">{kicker.kicker}</p>)}   
          </div>
          <div className="row mb-5">
              {services && services.map((content, index) => (
                <div className="col-lg-4" key={content.id}>
                  <ServiceCard  index={index} {...content}/>
                </div>
              ))}    
          </div>
          <div className="d-flex justify-content-center">
              {cta && cta.map((content) => (<Button key={content.id} to={content.href}>{content.text}</Button>))}    
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