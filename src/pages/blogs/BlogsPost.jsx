import React from 'react'
import { Link } from 'react-router-dom'
import BlogAuthor from './BlogAuthor'
import './Blogs.css'

const BlogsPost = ({postId,thumbnail,category,title,desc,authorId}) => {
   
   const blogDesc=desc.length > 145 ? desc.substr(0,145) + '...' : desc;
   const blogTitle=title.length > 55 ? title.substr(0,55)+ '...' : title;

  return (
     <article className='post'>
        <div className='post-thumbnail'>
              <img src={thumbnail} alt={title} />
        </div>
        <div className='post-content'>
            <Link to={`/blog/${postId}`}><h3>{blogTitle}</h3></Link>
            <p>{blogDesc}</p>
        </div>
        <div className='post-footer'>
             <BlogAuthor/>
              <Link to='/' className='category'>{category}</Link>
        </div>

        

     </article>
  )
}

export default BlogsPost