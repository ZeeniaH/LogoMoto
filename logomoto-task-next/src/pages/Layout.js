import React from "react"
import "animate.css"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"

function Layout({ children }) {
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  )
}

export default Layout
