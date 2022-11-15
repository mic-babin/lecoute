import React from 'react'
import Header from './header'
import Footer from './Footer'
import { Head } from './head';

// import Head from "./head"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/normalize.css'
import '../assets/styles/main.css'

function Layout(props) {
  return (
    <>
        {/* For SEO */}
        <Head {...props} />
        <Header />
            {props.children}
        <Footer />
    </>
  )
}

export default Layout
