import React from "react"
import Image from "next/future/image"
import Link from "next/link"
import { AnimationOnScroll } from "react-animation-on-scroll"
import * as styles from "./heroSection.module.scss"

import homeHeroRightImage from "../../../public/images/home-hero-right-image.png"
import HomeHeroBgMobile from "../../../public/images/home-hero-bg-mobile.png"
import HomeHeroBg from "../../../public/images/home-hero-bg.png"
import HomeHeroLeftCorner from "../../../public/images/home-hero-left-corner.png"

function HeroSection() {
  return (
    <div className={styles.heroSection}>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <AnimationOnScroll
              animateIn="animate__fadeInUp"
              delay={1000}
              animateOnce
              className={styles.animation}
              offset={0}
            >
              <h3 className="mb-md-2 mb-0">Fast, Affordable Logo Design</h3>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateIn="animate__fadeInUp"
              delay={1500}
              animateOnce
              className={styles.animation}
              offset={0}
            >
              <h4 className="mb-3">For Your Brand or Small Business</h4>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateIn="animate__fadeInUp"
              delay={2000}
              animateOnce
              className={styles.animation}
            >
              <p>
                Expert logo design that drives results without draining your
                budget
              </p>
            </AnimationOnScroll>
            <ul className="my-md-5 my-3">
              <AnimationOnScroll
                animateIn="animate__lightSpeedInLeft"
                delay={2500}
                animateOnce
                className={styles.animation}
              >
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-check-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                  </svg>
                  Work with skilled design professionals, no stock art
                </li>
              </AnimationOnScroll>
              <AnimationOnScroll
                animateIn="animate__lightSpeedInLeft"
                delay={2700}
                animateOnce
                className={styles.animation}
              >
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-check-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                  </svg>
                  Customized design that sets your brand apart
                </li>
              </AnimationOnScroll>
              <AnimationOnScroll
                animateIn="animate__lightSpeedInLeft"
                delay={2900}
                animateOnce
                className={styles.animation}
              >
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-check-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                  </svg>
                  Fast turnaround without sacrificing quality
                </li>
              </AnimationOnScroll>
            </ul>
            <AnimationOnScroll
              animateIn="animate__fadeInUp"
              delay={3100}
              animateOnce
              className={styles.animation}
            >
              <Link href="/">
                <a className="btn btn-primary text-uppercase position-relative">
                  Start Your Logo
                </a>
              </Link>
            </AnimationOnScroll>
          </div>
          <div className="col-md-4">
            <AnimationOnScroll
              className={styles.heroRightImage}
              animateIn="animate__fadeInRight"
              animateOut="animate__fadeOutRight"
              animateOnce
            >
              <Image
                src={homeHeroRightImage}
                // src="../../images/home-hero-right-image.png"
                alt="Hero Image"
              ></Image>
            </AnimationOnScroll>
          </div>
        </div>
        <Image
          src={HomeHeroBgMobile}
          // src="../../images/home-hero-bg-mobile.png"
          alt="home hero bg"
          className={`${styles.homeHeroBg} d-md-none`}
        ></Image>
        <Image
          src={HomeHeroBg}
          // src="../../images/home-hero-bg.png"
          alt="home hero bg"
          className={`${styles.homeHeroBg} d-none d-md-block`}
        ></Image>
        <AnimationOnScroll
          className={styles.homeHeroLeftCorner}
          animateIn="animate__fadeInLeft"
          animateOut="animate__fadeOutLeft"
          animateOnce
        >
          <Image
            src={HomeHeroLeftCorner}
            // src="../../images/home-hero-left-corner.png"
            alt="Hero Left corner image"
          ></Image>
        </AnimationOnScroll>
      </div>
    </div>
  )
}

export default HeroSection
