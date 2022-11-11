import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"


export default function Homepage(props) {
  const  homepage  = props.data.contentfulHomepage
  return (
    <Layout {...homepage}>
      <div className="container">
        {homepage.blocks.map((block) => {
          const { id, internal: {type}, ...componentProps } = block
          const blocktype = type.replace('Contentful', '')
          const Component = sections[blocktype] || Fallback
          return <Component key={id} {...componentProps} />
        })}
      </div> 
    </Layout>
  )
}

export const query = graphql`
  query {
    contentfulHomepage {
      id
      title
      description
      image {
        id
        url
      }
      blocks:content {
        ... on ContentfulHero {
          id
          internal {
            type
          }
        }
        ... on ContentfulServices {
          id
          internal {
            type
          }
          title
          kicker {
            kicker
          }
          servicesCTA: cta {
            href
            text
          }
        }
        ... on ContentfulAbout {
          id
          internal {
            type
          }
          title
          description1 {
            description1
          }
          description2 {
            description2
          }
          featured {
            gatsbyImage(layout: CONSTRAINED, placeholder: BLURRED, width: 600)
          }
        }
        ... on ContentfulContactForm {
          id
          internal {
            type
          }
          title
          inputFields {
            text
            placeholder
            type
          }
          contactFormCTA: cta {
            text
            href
          }
        }
        ... on ContentfulContactInfo {
          id
          internal {
            type
          }
          title
          kicker {
            kicker
          }
          contactList {
            icon {
              gatsbyImage(layout: CONSTRAINED, placeholder: BLURRED, width: 100)
            }
            title
            address
          }
          businessHours {
            title
            businessDaysAndTime {
              day
              time
            }
          }
          googleMaps {
            gatsbyImage(layout: CONSTRAINED, placeholder: BLURRED, width: 600)
          }
        }
      }
    }
  }
`
