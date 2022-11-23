import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'


const Image = styled(GatsbyImage)`
  border-top-left-radius: 25%;
  border-bottom-right-radius: 25%;
  max-height:700px;
  box-shadow: 50px 50px 0px rgba(87,122,147,0.25);
`

export default Image