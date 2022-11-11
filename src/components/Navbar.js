import React from 'react'
import { Link } from 'gatsby'

export default function Navbar (){
  return (
    <nav>
        <ul>
            <li>
                <Link to="/">Logo</Link>
            </li>
        </ul>
    </nav>
  )
}
