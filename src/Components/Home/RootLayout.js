import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
    return (
        <>
            <Navbar />
            <main>
                <Outlet/>
            </main>
            <Footer />
        </>
    )
}

export default RootLayout
