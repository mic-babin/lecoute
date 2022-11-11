import React from 'react'
import styled from 'styled-components'

export const ServiceCard = (props) => {
    const {title, description, icon, index} = props

  return (
        <Card className={`mb-3 mb-lg-0`} style={{marginTop : index === 1 ? "" : "30px"}}>
            <img src={icon.url} alt="" />
            <h3 className='py-3'>{title}</h3>
            <p>{description.description}</p>
        </Card>
    
    
  )
}

export const Card = styled.div`
    background-color:#ffffff;
    padding: 4rem 3rem;
    border-radius: 24px;
`