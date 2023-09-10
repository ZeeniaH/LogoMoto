import React from "react"
import Image from "next/future/image"
import Link from "next/link"
import { AnimationOnScroll } from "react-animation-on-scroll"
import * as styles from "./iconIllustration.module.scss"
import ParallexFade from "../../helpers/ParallexFade"
import ReactMarkdown from "react-markdown"

function IconIllustration({ iconOrIllustrations }) {
  // const [data, setData] = useState([])

  // useEffect(() => {
  //   getData()
  // }, [])

  // async function getData() {
  //   const res = await fetch(
  //     "https://logomoto-heroku-22.herokuapp.com/icon-or-illustrations"
  //   )
  //   const data = await res.json()
  //   if (data.length > 0) {
  //     setData(data)
  //   }
  // }
  return (
    <div className={`container ${styles.iconIllustrationContainer}`}>
      <div className={styles.iconIllustration}>
        <ParallexFade>
          <AnimationOnScroll animateOnce animateIn="animate__fadeInUp">
            <h3>
              icon or illustration <br /> & brief statement
            </h3>
          </AnimationOnScroll>
        </ParallexFade>
        <div className="row">
          {iconOrIllustrations.map((node, i) => {
            console.log(node.image)
            return (
              <div className="col-md-4 px-4" key={i}>
                <AnimationOnScroll animateOnce animateIn="animate__zoomIn">
                  <Image
                    src={node.image.url}
                    alt="icon"
                    width={node.image.width}
                    height={node.image.height}
                    className={styles.icon}
                  ></Image>
                </AnimationOnScroll>
                <AnimationOnScroll animateOnce animateIn="animate__fadeInUp">
                  <p className={styles.iconIllustrationLine1}>{node.title}</p>
                </AnimationOnScroll>
                <AnimationOnScroll animateOnce animateIn="animate__fadeInUp">
                  <ReactMarkdown
                    className={styles.iconIllustrationLine2}
                    children={node.brief}
                  />
                </AnimationOnScroll>
              </div>
            )
          })}
        </div>
        <AnimationOnScroll animateOnce animateIn="animate__fadeInUp">
          <Link href="#">
            <a
              className={`btn btn-secondary text-uppercase d-none d-md-inline-block ${styles.startLogo}`}
            >
              Start Your Logo
            </a>
          </Link>
        </AnimationOnScroll>
      </div>
    </div>
  )
}
export default IconIllustration
