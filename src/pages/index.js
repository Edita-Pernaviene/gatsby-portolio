import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"
export default ({data}) => {
 const {allStrapiProjects:{nodes:projects},allStrapiBlogs:{nodes:blogs}} = data
  return (
  <Layout>
    <SEO title="Home" description="this is our home page"/>
    <Hero />
    <Services />
    <Jobs />
    <Projects projects={projects} title='featured projects' showLink/>
    <Blogs blogs={blogs} title='latest articles' showLink/>
  </Layout>
  )
}
export const query = graphql`
  {
    allStrapiProjects(filter: {featured: {eq: false}}) {
      nodes {
        github
        id
        description
        url
        projects
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
     allStrapiBlogs(sort: {fields: date, order: DESC}, limit: 3) {
      nodes {
        slug
        content
        description
        date(formatString: "Do MMMM YYYY")
        id
        title
        category
        imgage {
          childImageSharp {
            fluid {
            ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

