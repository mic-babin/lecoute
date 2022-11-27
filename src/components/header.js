import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql} from "gatsby"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Icon from './styled-components/icon'
import { motion } from 'framer-motion'


const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulHeader {
        logo {
          url
        }
        links {
          id
          links {
            id
            href
            text
          }
        }
        socialLinks {
          icon {
            url
          }
          id
          address
        }
      } 
    }
  `)

  const {logo, links, socialLinks} = data.contentfulHeader

  return (
    <HeaderWrapper collapseOnSelect expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="../#home">
          {logo && (
            <Logo 
              src={logo.url} 
              alt="logo"
              whileInView={{y:0, opacity: 1}} 
              initial={{y: 30, opacity: 0}}
              transition={{
                duration: 0.4,
                delay: 0.1,
                type: 'spring'
              }}
              viewport={{ once: true }}
            />
            )}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <div className="d-lg-flex align-items-center text-center pb-3 pb-lg-0"> 
              {links && links.map((content) =>( 
                    <React.Fragment key={content.id}>
                      {content.links.map((link, index) => (
                        <motion.div
                          whileInView={{y:0, opacity: 1}} 
                          initial={{y: 30, opacity: 0}}
                          transition={{
                            duration: 0.4,
                            delay: index/10 + 0.2,
                            type: 'spring'
                          }}
                          viewport={{ once: true }}
                        >
                          <NavLink key={link.id} href={'../'+link.href}>{link.text}</NavLink>
                        </motion.div>
                      ))}
                    </React.Fragment>
              ))}
            </div>
            {socialLinks && socialLinks.map((contact) => (
                <motion.div
                  whileInView={{x:0, opacity: 1}} 
                  initial={{x:100, opacity: 0}}
                  transition={{
                    duration: 0.4,
                      delay: 0.5,
                      type: 'spring'
                    }}
                  viewport={{ once: true }}
                >
                  <Phone key={contact.id} className="d-none d-lg-flex justify-content-center align-items-center ms-4" href={'tel:' + contact.address}>
                    <div className="d-flex align-items-center">
                      <Icon>  
                        <img src={contact.icon.url} alt='phone' />
                      </Icon>
                      <span className="ms-3">{contact.address}</span> 
                    </div>
                  </Phone>
                </motion.div>
                ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </HeaderWrapper>
  )
}
const HeaderWrapper = styled(Navbar)`
  padding: 15px 0 !important;
  background-color: #ffffff;
  color: #ffffff;
  box-shadow: 0 0 5px rgba(0,0,0,0.3);
`

const NavLink = styled(Nav.Link)`
  color: #293039 !important;
  text-decoration: none;
  font-weight: bold !important;

  &:hover{
    color: #577A93 !important;
    font-weight: 900
  }
`

const Phone = styled(NavLink)`
  color: #577A93 !important;
`

const Logo = styled(motion.img)`
  max-width: 68vw;
  max-height: 80px;
`
export default Header