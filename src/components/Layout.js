import React from 'react'
import Header from './header'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/normalize.css'
import '../assets/styles/main.css'

function Layout(props) {
  return (
    <>
        <Header />
  
            {props.children}
        <Footer />
    </>
  )
}

export default Layout
