import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../assets/styles/main.css'
import '../assets/styles/normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Layout({children}) {
  return (
    <>
        <Navbar />
            {children}
        <Footer />
    </>
  )
}

export default Layout