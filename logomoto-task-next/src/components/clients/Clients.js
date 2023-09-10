import React from "react"
import Image from "next/future/image"
import Slider from "react-slick"
import { AnimationOnScroll } from "react-animation-on-scroll"
import * as styles from "./clients.module.scss"
import ParallexFade from "../../helpers/ParallexFade"

import testimonialsTopImage from "../../../public/images/testimonials-top-image.png"
import star from "../../../public/images/star.png"
import instagram from "../../../public/images/instagram.png"
import facebook from "../../../public/images/facebook.png"
import twitter from "../../../public/images/twitter.png"
import testimonialsBottomRightImage from "../../../public/images/testimonials-bottom-right-image.png"
import testimonialsCenterImage from "../../../public/images/testimonials-center-image.png"
import testimonialsBottomLeftImage from "../../../public/images/testimonials-bottom-left-image.png"

const Clients = ({ testimonials }) => {
  // const [data, setData] = useState([])

  // useEffect(() => {
  //   getData()
  // }, [])

  // async function getData() {
  //   // Call an external API endpoint to get posts.
  //   // You can use any data fetching library
  //   const res = await fetch(
  //     "https://logomoto-heroku-22.herokuapp.com/testimonials"
  //   )
  //   const data = await res.json()
  //   if (data.length > 0) {
  //     setData(data)
  //   }
  // }

  const testimonialsSliderConfig = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          vertical: true,
          verticalSwiping: true,
          centerMode: false,
        },
      },
    ],
  }

  return (
    <div className="container">
      <div className={styles.clients}>
        <AnimationOnScroll
          animateOnce
          animateIn="animate__rotateIn"
          animateOut="animate__rotateOut"
          duration={2}
        >
          <Image
            src={testimonialsTopImage}
            alt="Testimonials Top Image"
            className={styles.testimonialsTopImage}
          ></Image>
        </AnimationOnScroll>
        <ParallexFade>
          <AnimationOnScroll animateOnce animateIn="animate__fadeInUp">
            <h3 className="text-uppercase" id="client">
              Happy Clients
            </h3>
          </AnimationOnScroll>
        </ParallexFade>
        <div className="clientsSlider">
          <Slider {...testimonialsSliderConfig}>
            {testimonials.map((node, i) => {
              return (
                <div className={styles.client} key={i}>
                  <div className={styles.review}>
                    <p className={styles.clientHeading}>{node.heading} </p>
                    <p className={styles.clientReview}>{node.review}</p>
                  </div>
                  <div className="row">
                    <div className="offset-2 col-7 d-flex flex-column justify-content-center">
                      <p className={`mb-0 text-uppercase ${styles.clientName}`}>
                        {node.name}
                      </p>
                      <p
                        className={`text-uppercase ${styles.clientDesignation}`}
                      >
                        {node.designation}
                      </p>
                      <div className={styles.stars}>
                        {[...Array(node.star)].map((n, index) => {
                          return (
                            <Image
                              key={index}
                              src={star}
                              alt="star"
                              className={styles.star}
                            ></Image>
                          )
                        })}
                      </div>
                      <div className={styles.social}>
                        <a
                          href={node.socialLink.Instagram}
                          rel="noopener noreferrer"
                          className={styles.socialLink}
                          target="_blank"
                        >
                          <Image src={instagram} alt="instagram"></Image>
                        </a>
                        <a
                          href={node.socialLink.Facebook}
                          rel="noopener noreferrer"
                          className={styles.socialLink}
                          target="_blank"
                        >
                          <Image src={facebook} alt="facebook"></Image>
                        </a>
                        <a
                          href={node.socialLink.Twitter}
                          rel="noopener noreferrer"
                          className={styles.socialLink}
                          target="_blank"
                        >
                          <Image src={twitter} alt="twitter"></Image>
                        </a>
                      </div>
                    </div>
                    <div className="col-3 px-0">
                      <Image
                        src={node.avatar.url}
                        alt="client image"
                        width={node.avatar.width}
                        height={node.avatar.height}
                        className={`rounded-circle ${styles.clientImage}`}
                      ></Image>
                    </div>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
        <div className={`${styles.testimonialsBottomImage}`}>
          <AnimationOnScroll
            animateOnce
            className={`${styles.testimonialsBottomRightImage}`}
            animateIn="animate__rotateInUpRight"
            animateOut="animate__rotateOutUpRight"
            duration={2}
          >
            <Image
              src={testimonialsBottomRightImage}
              alt="testimonial bottom image"
            ></Image>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateOnce
            className={`${styles.testimonialsBottomCenterImage}`}
            animateIn="animate__fadeInUp"
            animateOut="animate__fadeOutUp"
            duration={2}
          >
            <Image
              src={testimonialsCenterImage}
              alt="testimonial bottom image"
            ></Image>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateOnce
            className={`${styles.testimonialsBottomLeftImage}`}
            animateIn="animate__fadeInLeft"
            animateOut="animate__fadeOutLeft"
            duration={2}
          >
            <Image
              src={testimonialsBottomLeftImage}
              alt="testimonial bottom image"
            ></Image>
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  )
}

export default Clients
