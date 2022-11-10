import * as React from "react"
import Layout from "../components/Layout"
import { Button } from "../components/Button"
import { graphql} from "gatsby"

export default function Home({ data }) {

  return (
    <Layout>
      Hello world!
      <Button>Test</Button>
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </Layout>
  )
}

export const query = graphql`
  query {
    imageSharp {
      gatsbyImageData
      id
    }
    allContentfulHomepage {
      nodes {
        content {
          ... on ContentfulHero {
            id
            title
            kicker {
              internal {
                content
              }
            }
            cta {
              text
              href
            }
            featured {
              description
              gatsbyImage(layout: CONSTRAINED, placeholder: BLURRED, width: 600)
            }
          }
        }
      }
    }
  }
`


//  <Link to='/about'>Hello</Link>