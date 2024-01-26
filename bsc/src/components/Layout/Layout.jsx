import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import "../sass/style.scss"
const Layout = ({ children }) => {
    return (
        <>
            <div className="app-container">

                <div className="spline-container2"></div>
                <Navbar />
                {children}
                <Footer />
            </div>

        </>
    )
}

export default Layout