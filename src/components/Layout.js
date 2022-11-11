import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
// import Head from "./head"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/normalize.css'
import '../assets/styles/main.css'

function Layout({children}) {
  return (
    <>
        {/* For SEO */}
        {/* <Head {...props} /> */}
        <Navbar />
            {children}
        <Footer />
    </>
  )
}

export default Layout
