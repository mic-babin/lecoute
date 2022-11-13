import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components'

const ContactInfo = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulContactInfo {
        title
        kicker {
          kicker
        }
        contactList {
          id
          title
          address
          icon {
            url
          }
        }
        businessHours {
          title
          businessDaysAndTime {
            id
            day
            time
          }
        }
        googleMaps {
          gatsbyImageData(quality: 100, placeholder: BLURRED)
        }
      }
    }
  `)
  const {title, kicker, contactList, businessHours, googleMaps } = data.contentfulContactInfo
  console.log(data)
  return (
    <section className="container">
      <div className="row">
        <div className="col-lg-6 d-flex flex-column justify-content-center pe-lg-5 mb-5 mb-lg-0">
          {title && (<h2>{title}</h2>)}
          {kicker &&(<p className="kicker py-3">{kicker.kicker}</p>)}
          <div className="row pb-4">
            {contactList && contactList.map((contact, index) => (
              <div className={index === 2 ? 'col-12': 'col-md-6 col-lg-12 col-xxl-6'}>
                <div className="d-flex align-items-center py-3">
                  <Icon className="d-flex justify-content-center align-items-center">
                    <img src={contact.icon.url} alt="" />
                  </Icon>
                  <div className="d-block  ps-3">
                    <Title>
                      {contact.title}
                    </Title>
                    <Address>
                      {contact.address}
                    </Address>
                  </div>
                </div>
              </div>

            ))}
          </div>
          <BusinessHoursWrapper className="blue-bg p-5 me-lg-5">
            {businessHours && businessHours.map((section) => (
              <>
                <h3 className="pb-3">{section.title}</h3>
                {section.businessDaysAndTime.map((content, index) => (
                  <div className="d-flex justify-content-between" key={content.id} style={{borderBottom: index === 0 ? '1px solid #395266' : ''}}>
                    <Day>
                      {content.day}
                    </Day>
                    <Time>
                      {content.time}
                    </Time>
                  </div>
                ))} 
              </>      
            ))}   
          </BusinessHoursWrapper>    
        </div>
        <div className="col-lg-6 mb-5 mb-lg-0">
          {googleMaps && (
            <FeaturedImage
              alt='featured'
              image={getImage(googleMaps.gatsbyImageData)}
            />
          )}
        </div>
      </div>
    </section>
  )
}

const FeaturedImage = styled(GatsbyImage)`
  border-top-left-radius: 25%;
  border-bottom-right-radius: 25%;
  width:calc(100%);
  max-height:700px;
`

const BusinessHoursWrapper = styled.div`
  border-bottom-left-radius: 100px;
  border-top-right-radius: 100px;
`
const Day = styled.div`
  font-size: 18px;
  color:  #51565D;
  padding: 20px 0;
  @media only screen and (max-width: 400px) {
    font-size: 16px !important;
  }
  @media only screen and (max-width: 370px) {
    font-size: 15px !important;
  }
`
const Time = styled(Day)`
  font-weight: bold;
`
const Icon = styled.div`
  background-color: #577A93;
  height: 50px;
  width: 50px;
  min-width: 50px;
  border-radius: 50%;
`
const Title = styled.div`
  font-size: 14px;
  color: #51565D;
`

const Address = styled.div`
  font-size: 18px;
  color: #293039;
  font-weight: bold;
`

export default ContactInfo