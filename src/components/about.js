import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components'

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulAbout {
        name
        title
        description1 {
          description1
        }
        description2 {
          description2
        }
        featured {
          gatsbyImageData(quality: 100, placeholder: BLURRED)
        }
      }
    }
  `)
  const {name, title, description1, description2, featured } = data.contentfulAbout

  return (
    <>
      <ScrollTo id="a-propos"></ScrollTo>    
      <section className="container">
          <div className="row">
          <div className="col-xxl-6 col-lg-4 d-flex align-items-center">
                  {featured && (
                  <FeaturedImage
                      alt='featured'
                      image={getImage(featured.gatsbyImageData)}
                      // className={styles.aboutHeroImage}
                  />
                  )}
              </div>
              <div className="col-xxl-6 col-lg-8 d-flex flex-column align-items-start justify-content-center ps-lg-5 pb-0 pb-lg-5 pt-5 mt-5 ">
                  {(title || name) && (<H2 className="ps-lg-5">{name} <DarkText>{title}</DarkText></H2>)}
                  {description1 &&(<p className="kicker py-4 ps-lg-5">{description1.description1}</p>)}    
                  {description2 &&(<p className="kicker py-4 ps-lg-5">{description2.description2}</p>)}    
              </div>
          </div>
      </section>
    </>   
  )
}

const FeaturedImage = styled(GatsbyImage)`
  border-top-left-radius: 25%;
  border-bottom-right-radius: 25%;
  width:calc(100%);
  max-height:700px;
  box-shadow: 50px 50px 0px rgba(57,82,102,0.25);
`

const DarkText = styled.span`
  color: #293039;
`
const H2 = styled.h2`
font-size: 36px !important;
 @media only screen and (max-width: 400px) {
      font-size: 36px !important;
    }
`

const ScrollTo = styled.div`
  transform: translateY(-110px)
`

export default About

