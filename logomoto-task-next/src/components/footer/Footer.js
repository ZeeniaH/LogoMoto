import Image from "next/future/image"
import logoStack from "../../../public/images/logo-stack.png"
import React from "react"
import { AnimationOnScroll } from "react-animation-on-scroll"
import * as styles from "./footer.module.scss"

function Footer() {
  return (
    <footer className={styles.footer}>
      <AnimationOnScroll animateOnce animateIn="animate__fadeInUp" offset={0}>
        <Image
          src={logoStack}
          alt="footer logo"
          className={styles.footerLogo}
        ></Image>
      </AnimationOnScroll>

      <AnimationOnScroll animateOnce animateIn="animate__fadeInUp" offset={0}>
        <p>
          A Subsidiary of{" "}
          <a href="https://armelin.media/" target="_blank" rel="noreferrer">
            Armelin Media
          </a>
        </p>
      </AnimationOnScroll>
      <AnimationOnScroll animateOnce animateIn="animate__fadeInUp" offset={0}>
        <p className={`mb-0 ${styles.copyRight}`}>
          © {new Date().getFullYear()} Armelin Media Group. All rights reserved.
        </p>
      </AnimationOnScroll>
    </footer>
  )
}

export default Footer
