// components/Layout/index.jsx

import Head from "next/head"
import Footer from "./ui/Footer"
import Navbar from "./ui/Navbar"
import PromoBanner from "./ui/PromoBanner"

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>MeetingMenu | Mac Menu Bar App for Meetings</title>
        <meta 
          name="description" 
          content="Transform your meeting management with a powerful all-in-one solution. Perfect execution starts in your menu bar." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PromoBanner />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout