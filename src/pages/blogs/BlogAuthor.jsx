import React from 'react'
import avatar1 from '../../assets/avatar1.jpg'
import './Blogs.css'



const BlogAuthor = () => {
  return (
      
          <div className='blog-author' >
              <div className='post-author-avatar'>
         <img src={avatar1} alt="avatar1" />
         
    </div>
    <div className='post-avatar-details'>
         <h5>By: Bhuvan Rustagi</h5>
         <small>Feb 23 2023</small>
    </div>
          </div>
  )
}

export default BlogAuthor