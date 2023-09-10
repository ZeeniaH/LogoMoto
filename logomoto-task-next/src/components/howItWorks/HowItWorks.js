import React, { useEffect, useRef, useState } from "react"
import Image from "next/future/image"
import { AnimationOnScroll } from "react-animation-on-scroll"
import * as styles from "./howItWorks.module.scss"
import ParallexFade from "../../helpers/ParallexFade"

const HowItWorks = ({ howItWorks }) => {
  var [counter, setCounter] = useState(0)
  var [activeNumber, setActiveNumber] = useState(0)
  const [data, setData] = useState([])
  const toScrollRef = useRef([])

  useEffect(() => {
    if (activeNumber === 0) {
      setActiveNumber(1)
    }
    let timer
    if (counter < 5) {
      timer = setTimeout(() => setCounter(counter + 1), 1000)
    }
    if (counter === 5) {
      setCounter(0)
      if (activeNumber < 4) {
        setActiveNumber(activeNumber + 1)
      } else {
        setActiveNumber(1)
      }
      let scrollToElement
      if (activeNumber < 4) {
        scrollToElement = toScrollRef.current[activeNumber]
      } else {
        scrollToElement = toScrollRef.current[0]
      }
      const elementToScroll = scrollToElement.parentElement
      const offset = scrollToElement.offsetLeft
      elementToScroll.scrollTo({ left: offset, behavior: "smooth" })
    }
    return () => {
      clearTimeout(timer)
    }
  }, [counter, activeNumber])

  const stepChange = stepNumber => {
    setCounter(0)
    setActiveNumber(stepNumber)
    const scrollToElement = toScrollRef.current[stepNumber - 1]
    const elementToScroll = scrollToElement.parentElement
    const offset = scrollToElement.offsetLeft
    elementToScroll.scrollTo({ left: offset, behavior: "smooth" })
  }

  // useEffect(() => {
  //   getData()
  //   // fetch("https://logomoto-heroku-22.herokuapp.com/how-it-works")
  //   //   .then(response => {
  //   //     if (response.ok) {
  //   //       return response.json()
  //   //     }
  //   //     throw response
  //   //   })
  //   //   .then(data => {
  //   //     console.log(data)
  //   //     setPosts(data)
  //   //   })
  //   //   .catch(error => {
  //   //     console.error("Error Fetching Data", error)
  //   //   })
  // }, [])

  // async function getData() {
  //   // Call an external API endpoint to get posts.
  //   // You can use any data fetching library
  //   const res = await fetch(
  //     "https://logomoto-heroku-22.herokuapp.com/how-it-works"
  //   )
  //   const data = await res.json()
  //   if (data.length > 0) {
  //     setData(data)
  //   }
  // }

  return (
    <div className={styles.howItWorks} id="howitwork">
      <div className="container-md px-md-5">
        <div className="text-center">
          <ParallexFade>
            <AnimationOnScroll animateOnce animateIn="animate__fadeInUp">
              <h3 className="text-primary text-center mb-md-4">How It Works</h3>
            </AnimationOnScroll>
            <AnimationOnScroll animateOnce animateIn="animate__fadeInUp">
              <p>Your Professionally Designed Logo </p>
            </AnimationOnScroll>
            <AnimationOnScroll animateOnce animateIn="animate__fadeInUp">
              <p className="text-primary fw-bolder">In 4 Easy Steps</p>
            </AnimationOnScroll>
          </ParallexFade>
          <div className={`row ${styles.stepsWrapper}`}>
            <div className="col-md-7 col-xl-8 position-relative">
              {howItWorks.map((step, i) => {
                return (
                  <Image
                    height={step.image.height}
                    width={step.image.width}
                    key={i}
                    src={step.image.url}
                    alt="Process image"
                    className={`${styles.stepImage} ${
                      activeNumber === i + 1 ? styles.active : ""
                    }`}
                  ></Image>
                )
              })}
            </div>
            <div className="col-md-5 col-xl-4">
              <div className={styles.steps}>
                {howItWorks.map((step, i) => {
                  return (
                    <div
                      role="button"
                      tabIndex="0"
                      ref={e => {
                        toScrollRef.current[i] = e
                      }}
                      className={`${styles.step} ${
                        activeNumber === i + 1 ? styles.active : ""
                      }`}
                      onClick={() => {
                        stepChange(i + 1)
                      }}
                      key={i}
                      onKeyDown={() => {}}
                    >
                      <h4 className={`text-uppercase ${styles.stepNumber}`}>
                        {step.step}
                      </h4>
                      <p className={styles.stepTitle}>{step.title}</p>
                      <p className={styles.stepDescription}>
                        {step.description}
                      </p>
                      <span className={styles.checkPoint}></span>
                      {i < howItWorks.length - 1 && (
                        <span className={styles.theRoad}></span>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
