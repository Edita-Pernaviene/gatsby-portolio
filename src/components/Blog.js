import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"
const Blog = ({id, title, imgage, date, category, slug, description}) => {
  return (
    <Link to={`/blogs/${slug}`} className='blog' key={id}>
      <article>
        {imgage && ( 
       <Image fluid={imgage.childImageSharp.fluid} className="blog-img" />
        )}
        <div className='blog-card'>
            <h4>{title}</h4>
            <p>{description}</p>
            <div className='blog-footer'>
               <p>{category}</p>
               <p>{date}</p>
            </div>
        </div>
      </article>
    </Link>
  )
}

Blog.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgage: PropTypes.object.isRequired,
}

export default Blog
