import React from 'react'
import { Link } from "gatsby"

function Navbar() {
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

export default Navbar