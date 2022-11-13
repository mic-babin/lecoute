import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link} from "gatsby"


const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulFooter {
        logo {
          url
        }
        links {
          links {
            href
            text
          }
        }
        socials {
          id
          title
          icon {
            url
          }
          address
        }
      }
    }
  `)

  const {logo, links, socials} = data.contentfulFooter

  return (
    <FooterWrapper>
        <section className="container">
          <div className="row pb-5">
              <Link to='#hero' className="col-lg-5 d-flex justify-content-center justify-content-lg-start">
                {logo && <img src={logo.url} alt="logo" />}
              </Link>
              <div className="col-lg-4 d-flex justify-content-around justify-content-lg-between align-items-center py-5">
                {links && links.map((content) =>( 
                  content.links.map((link)=> {
                    console.log(link)
                    return(<NavLink to={link.href}>{link.text}</NavLink>)})
                  ))}
              </div>
              <div className="col-lg-3 d-flex align-items-center justify-content-center justify-content-lg-end">
                {socials && socials.map((contact) => (
                  <Icon key={contact.id} className="d-flex justify-content-center align-items-center ms-4" target={contact.title === 'Téléphone'? "" : "_blank"} href={contact.title === 'Téléphone' ? 'tel:' + contact.address : contact.address }>
                    <img src={contact.icon.url} alt={contact.title} />
                  </Icon>
                ))}
              </div>
          </div>
          <Credits className='d-lg-flex justify-content-between text-center'>
              <div className="pt-3">&copy; {new Date().getFullYear()} L'écoute - Centre de consultation et de relation d'aide</div>
              <div className="pt-3">Réalisé avec ❤️ par <MetaLink target="_blank"href="https://griffincreative.ca">GriffinCreative</MetaLink></div>
          </Credits>
        </section>
    </FooterWrapper>
  )
}
const FooterWrapper = styled.footer`
  background-color: #395266;
  color: #ffffff;
`

const Credits = styled.div`
padding-top: 1rem;
border-top: 2px solid #ffffff;
`

const Icon = styled.a`
  background-color: #577A93;
  height: 50px;
  width: 50px;
  min-width: 50px;
  border-radius: 50%;
`

const NavLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-weight: bold;

  &:hover{
    color: #ffffff;
    font-weight: bolder
  }
`

const MetaLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-weight: bold;

  &:hover{
    color: #ffffff;
    font-weight: bolder
  }
`

export default Footer