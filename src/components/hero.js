import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {Button} from './button'
import styled from 'styled-components'

export default function Hero() {
    const data = useStaticQuery(graphql`
    query {
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
            id
            gatsbyImageData
        }
      }
    }
  `)
    const { id,title, kicker, cta, featured } = data.contentfulHero

    console.log(cta)
  return (
    <section className="row">
        <div className="col-lg-6 d-flex flex-column align-items-start justify-content-center pe-lg-5 py-5 py-lg-0 my-5 my-lg-0">
        {title && (<h1>{title}</h1>)}
        {kicker &&(<p className="kicker py-4">{kicker.kicker}</p>)}    
        {cta && cta.map((content) => (<Button key={id} to={content.href}>{content.text}</Button>))}    
        </div>
        <div className="col-lg-6">
        {featured && (
          <FeaturedImage
            alt='featured'
            image={getImage(featured.gatsbyImageData)}
            // className={styles.aboutHeroImage}
          />
        )}
        </div>
    </section>
  )
}

const FeaturedImage = styled(GatsbyImage)`
  border-top-left-radius: 25%;
  border-bottom-right-radius: 25%;
  width:calc(100%);
  max-height:700px;
  box-shadow: -50px -50px 0px rgba(57,82,102,0.25), 50px 50px 0px rgba(87,122,147,0.25);
  
`

