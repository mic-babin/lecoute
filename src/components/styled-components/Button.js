import styled from 'styled-components'
import { Link } from 'gatsby'

const Button = styled(Link)`
    white-space: nowrap;
    font-size: 18px;
    font-weight: 600;
    color: #ffffff;
    text-decoration: none;
    background-color: #395266;
    padding: 0.75rem 1.5rem;
    border: 1.5px solid #395266;
    border-radius: 27px;
    transition: 0.2s ease-in;
    &:hover{
        color: #395266;
        background-color: #ffffff;
    }
`

export default Button