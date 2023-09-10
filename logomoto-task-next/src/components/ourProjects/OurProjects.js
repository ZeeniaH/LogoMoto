import React from "react"
import Image from "next/future/image"
import Slider from "react-slick"
import { AnimationOnScroll } from "react-animation-on-scroll"
import Link from "next/link"
import * as styles from "./ourProjects.module.scss"
import ParallexFade from "../../helpers/ParallexFade"

import ourProjectsHeading from "../../../public/images/our-projects-heading.png"

const OurProjects = ({ ourProjects }) => {
  // const [data, setData] = useState([])

  // useEffect(() => {
  //   getData()
  // }, [])

  // async function getData() {
  //   // Call an external API endpoint to get posts.
  //   // You can use any data fetching library
  //   const res = await fetch(
  //     "https://logomoto-heroku-22.herokuapp.com/our-projects"
  //   )
  //   const data = await res.json()
  //   if (data.length > 0) {
  //     setData(data)
  //   }
  // }

  const projectsSliderConfig = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: false,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }
  return (
    <div className={styles.ourProjects} id="projects">
      <div className="container">
        <ParallexFade>
          <AnimationOnScroll animateOnce animateIn="animate__fadeInUp">
            <Image
              src={ourProjectsHeading}
              alt="heading"
              className={`mb-md-5 mb-3 ${styles.heading}`}
            ></Image>
          </AnimationOnScroll>
          <AnimationOnScroll animateOnce animateIn="animate__fadeInUp">
            <p>Affordable professional, visually stunning logo design.</p>
          </AnimationOnScroll>
        </ParallexFade>
        <div className="projectsSlider">
          <Slider {...projectsSliderConfig}>
            {ourProjects.map((node, i) => {
              return (
                <Image
                  src={node.image.url}
                  alt="project"
                  width={node.image.width}
                  height={node.image.height}
                  key={i}
                ></Image>
              )
            })}
          </Slider>
        </div>

        <AnimationOnScroll animateOnce animateIn="animate__fadeInUp">
          <Link href="/">
            <a className="btn btn-primary text-uppercase position-relative">
              Start Your Logo
            </a>
          </Link>
        </AnimationOnScroll>
      </div>
    </div>
  )
}

export default OurProjects
