import React from 'react'
import styled from 'styled-components'
import {useMediaQuery} from '../utils/hooks';


export const ServiceCard = (props) => {
    const {title, description, icon, index} = props
    const isDesktop = useMediaQuery('(min-width: 992px)')
    const style = {marginTop : (index % 2 === 0 && isDesktop) ? "30px" : "0"}

  return (
        <Card className={`mb-3 mb-lg-0`} style={style}>
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
    @media only screen and (max-width: 1400px) and (min-width: 992px) {
      height:428px;
    }
`