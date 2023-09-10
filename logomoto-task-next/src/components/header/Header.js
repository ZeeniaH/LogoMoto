import React, { useEffect, useState } from "react"
import Image from "next/future/image"
import logo from "../../../public/images/logo.png"
import hamburderIcon from "../../../public/images/hamburder-icon.png"
import * as styles from "./header.module.scss"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

function Header() {
  const [scroll, setScroll] = useState(0)
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck)
      }
    })
  }, [scroll, setScroll])
  return (
    <header
      // className={`fixed-top ${styles.header} ${scroll ? styles.fixedTop : ""}`}
      className={`fixed-top ${styles.header} ${
        scroll ? styles.fixedTop : ""
      } animate__animated animate__fadeInDown`}
    >
      <div className="container px-0">
        <Navbar collapseOnSelect expand="lg">
          <Container>
            <Navbar.Brand href="#">
              <Image src={logo} alt="Logo" placeholder="none" />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              className="p-0"
            >
              <Image src={hamburderIcon} alt="hamburger"></Image>
            </Navbar.Toggle>
            <Navbar.Collapse
              id="responsive-navbar-nav"
              className="justify-content-end"
            >
              <Nav>
                <div className="nav-item">
                  <Nav.Link href="#howitwork">How It Works</Nav.Link>
                </div>
                <div className="nav-item">
                  <Nav.Link href="#projects">Project Gallery</Nav.Link>
                </div>
                <div className="nav-item">
                  <Nav.Link href="#client">Happy Clients</Nav.Link>
                </div>
                <div className="nav-item">
                  <Nav.Link href="#">Client Login</Nav.Link>
                </div>
                <div className="nav-item">
                  <Nav.Link
                    href="#"
                    className="nav-link btn btn-light text-uppercase"
                  >
                    Order your Logo
                  </Nav.Link>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </header>
  )
}

export default Header
