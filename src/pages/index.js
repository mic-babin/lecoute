import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"
import { SEO } from "../components/seo"



export default function Homepage(props) {
  const  homepage  = props.data.contentfulHomepage
  return (
    <Layout >
        {homepage.blocks.map((block) => {
          const { id, internal: {type}, ...componentProps } = block
          const blocktype = type.replace('Contentful', '')
          const Component = sections[blocktype] || Fallback
          return <Component key={id} {...componentProps} />
        })}
    </Layout>
  )
}

export const Head = () => (
  <SEO />
)

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
        }
        ... on ContentfulAbout {
          id
          internal {
            type
          }
        }
        ... on ContentfulContactForm {
          id
          internal {
            type
          }
        }
        ... on ContentfulContactInfo {
          id
          internal {
            type
          }
        }
      }
    }
  }
`
