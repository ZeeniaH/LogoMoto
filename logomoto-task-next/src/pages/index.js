import React from "react"
import Layout from "./Layout"
import HeroSection from "../components/heroSection/HeroSection"
import HowItWorks from "../components/howItWorks/HowItWorks"
import IconIllustration from "../components/iconIllustration/IconIllustration"
import OurProjects from "../components/ourProjects/OurProjects"
import Clients from "../components/clients/Clients"
import Faqs from "../components/faqs/Faqs"

import client from "../components/_helper/Apollo-client"
import { gql } from "@apollo/client"

export default function Index({ allFaqs }) {
  const { faqs, howItWorks, testimonials, iconOrIllustrations, ourProjects } =
    allFaqs
  return (
    <Layout>
      <HeroSection />
      <HowItWorks howItWorks={howItWorks} />
      <IconIllustration iconOrIllustrations={iconOrIllustrations} />
      <OurProjects ourProjects={ourProjects} />
      <Clients testimonials={testimonials} />
      <Faqs faqs={faqs} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query allData {
        faqs {
          id
          answer
          question
        }
        howItWorks {
          id
          description
          title
          step
          image {
            url
            width
            height
            formats
          }
        }
        testimonials {
          id
          heading
          designation
          star
          review
          name
          avatar {
            url
            width
            height
          }
          socialLink {
            id
            Facebook
            Twitter
            Instagram
          }
        }
        iconOrIllustrations {
          id
          title
          brief
          image {
            url
            width
            height
            formats
          }
        }
        ourProjects {
          image {
            url
            width
            height
            formats
          }
        }
      }
    `,
  })

  return {
    props: {
      allFaqs: data,
    },
  }
}
