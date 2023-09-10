/* eslint-disable */
import React, { useEffect, useState } from "react"
import Image from "next/future/image"
import Accordion from "react-bootstrap/Accordion"
import { AnimationOnScroll } from "react-animation-on-scroll"
import * as styles from "./faqs.module.scss"
import ParallexFade from "../../helpers/ParallexFade"

import faqBottomImage from "../../../public/images/faq-bottom-image.png"
import faqBg from "../../../public/images/faq-bg.png"

const Faqs = ({ faqs }) => {
  // const [data, setData] = useState([])

  // useEffect(() => {
  //   getData()
  // }, [])

  // async function getData() {
  //   // Call an external API endpoint to get posts.
  //   // You can use any data fetching library
  //   const res = await fetch("https://logomoto-heroku-22.herokuapp.com/faqs")
  //   const data = await res.json()
  //   if (data.length > 0) {
  //     setData(data)
  //   }
  // }

  return (
    <div className={styles.faqs}>
      <ParallexFade>
        <AnimationOnScroll animateOnce animateIn="animate__fadeInUp">
          <h3 className="text-center text-uppercase text-primary">
            Frequently Asked <br /> Questions
          </h3>
        </AnimationOnScroll>
      </ParallexFade>
      <div className={`container px-0 ${styles.faqsContainer}`}>
        <div className="accordion" id="accordionExample">
          <Accordion defaultActiveKey={0}>
            {faqs.map((node, i) => (
              <AnimationOnScroll
                animateOnce
                animateIn="animate__fadeInUp"
                key={i}
              >
                <Accordion.Item eventKey={i}>
                  <Accordion.Button></Accordion.Button>
                  <div className="row">
                    <div className="col-auto d-flex justify-content-center">
                      <h2 className="questionNumber">
                        {i < 9 ? "0" : ""}
                        {i + 1}
                      </h2>
                    </div>
                    <div className="col ps-md-2 ps-0">
                      <p className="question">{node.question}</p>
                      <Accordion.Body>
                        <p className={styles.answer}>{node.answer}</p>
                      </Accordion.Body>
                    </div>
                  </div>
                </Accordion.Item>
              </AnimationOnScroll>
            ))}
          </Accordion>
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <AnimationOnScroll animateOnce animateIn="animate__fadeInRight">
          <Image
            src={faqBottomImage}
            alt="faq bottom image"
            className={styles.faqBottomImg}
          ></Image>
        </AnimationOnScroll>
      </div>

      <AnimationOnScroll
        animateOnce
        className={styles.faqBg}
        animateIn="animate__fadeInLeft"
      >
        <Image src={faqBg} alt="faq background"></Image>
      </AnimationOnScroll>
    </div>
  )
}

export default Faqs
