import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
import SEO from '../components/SEO'
// ...GatsbyImageSharpFluid

const Blog = ({data:{allStrapiBlogs:{nodes:blogs},},}) => {
  return (
    <Layout>
      <SEO title='Blog' description='blog webdev'/>
      <section className='blog-page'>
        <Blogs blogs={blogs} title='blog' />
      </section>
    </Layout>
  )
}
export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        slug
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

export default Blog
