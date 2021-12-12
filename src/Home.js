import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import Navbar from './Navbar'
import Header from './Header'
import Howitwork from './Howitwork'
import Aboutus from './Aboutus'
import Services from './Services'
import Contacts from './Contacts'
import Footer from './Footer'

const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Howitwork />
            <Aboutus />
            <Services />
            <Contacts />
            <Footer />
        </>
    )
}

export default Home;