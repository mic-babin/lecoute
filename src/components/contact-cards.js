import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Icon from './styled-components/icon'

const ContactCards = () => {
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
                    id
                    title
                    icon {
                        url
                    }
                    businessDaysAndTime {
                        id
                        day
                        time
                    }
                }
            }
        }
    `)
    const {title, kicker, contactList, businessHours } = data.contentfulContactInfo
    const address = (contact) => {
        switch (contact.title) {
        case 'Téléphone': 
            return "tel:" + contact.address
        case 'Courriel': 
            return "mailTo:" + contact.address
        default:
            return '#'
        }
    }


  return (
      <section className="">
        <div className="pb-5 py-lg-0">
          <div className="d-flex align-items-center flex-column">
              {title && (<h2>{title}</h2>)}
              {kicker &&(<p className="kicker py-3 text-center" style={{maxWidth: '600px'}}>{kicker.kicker}</p>)}   
          </div>
          <div className="row pb-4">
              {contactList && contactList.map((contact) => (
                <div key={contact.id} className='col-xl-3 col-lg-6 my-3'>
                    <Card className="p-5">
                        <Icon className="d-flex justify-content-center align-items-center">
                            <img src={contact.icon.url} alt="" />
                        </Icon>
                        <Title className="pt-4 mb-2">
                            {contact.title}
                        </Title>
                        <Address href={address(contact)}>
                            {contact.address}
                        </Address>
                    </Card>
                </div>
              ))}
              <div className="col-xl-3 col-lg-6 my-3">
              <Card className="p-5">
                {businessHours && businessHours.map((content) => (
                        <>
                            <Icon className="d-flex justify-content-center align-items-center">
                                <img src={content.icon.url} style={{height:'24px'}} alt="icon" />
                            </Icon>
                            <Title className="pt-4 mb-2">
                                {content.title}
                            </Title>
                            {content.businessDaysAndTime.map((dayAndTime) => (
                                <div className="d-flex justify-content-between mb-1" key={dayAndTime.id}>
                                    <Day>
                                        {dayAndTime.day}
                                    </Day>
                                    <Time>
                                        {dayAndTime.time}
                                    </Time>
                              </div>
                            ))}
                            
                        </>
                            
                    ))}
                </Card>
              </div>
          </div>
        </div>
      </section>
  )
}


const Title = styled.div`
  font-size: 18px;
  color: #293039; 
  font-weight: bold; 
`

const Address = styled.a`
  font-size: 14px;
  color: #293039;
 
  text-decoration:none;
  &:hover{
    color: #293039;
  }
`
const Card = styled.div`
    background-color: rgba(57,82,102,0.1);
    border-radius: 24px;
    height: 100%;
`
const Day = styled.div`
  font-size: 14px;
  @media only screen and (max-width: 1399px) and (min-width: 1200px) {
    font-size: 12px;
    }
`
const Time = styled(Day)`
  font-weight: bold;
`

export default ContactCards