import React from 'react'
import './Blogs.css'
import BlogsPost from './BlogsPost';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react'
import { demoData } from './demoData'
import Breadcrumbs from './Breadcrumbs';





const Blogs = () => {

    const [posts, setPosts] = useState(demoData);
     const [searchTerm, setSearchTerm] = useState('');
  // const [filterOption, setFilterOption] = useState('');
 

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

 

  // const handleFilterChange = (event) => {
  //   setFilterOption(event.target.value);
  // };

  // const filterPosts = (posts) => {
  //   let filteredPosts = posts;

  //   if (searchTerm) {
  //     filteredPosts = filteredPosts.filter(post =>
  //       post.title.toLowerCase().includes(searchTerm.toLowerCase())
  //     );
  //   }

  //   if (filterOption) {
  //     filteredPosts = filteredPosts.filter(post => post.category === filterOption);
  //   }

  //   if (sortOptions.asc) {
  //     filteredPosts.sort((a, b) => a.title.localeCompare(b.title));
  //   } else if (sortOptions.desc) {
  //     filteredPosts.sort((a, b) => b.title.localeCompare(a.title));
  //   }

  //   return filteredPosts;
  // };

  // const filteredPosts = filterPosts(posts);


    return (


        <section className='posts'>

         <header>
             <Breadcrumbs/>
      </header>

      <div className="search-filter-container">
          <div className="search-bar">
            <input type="text" placeholder="Search..."  onChange={handleSearchChange}/>
            <span className="search-icon"><SearchIcon/></span>
          </div>
          <div className="filter-dropdown">
            
            <select id="category">
              <option value="all">Category</option>
              <option value="invest">Invest</option>
              <option value="stock">Stock</option>
              <option value="trade">Trading</option>
            </select>
          </div>
        </div>
            <div className='container post_container'>

                {
                    posts.map(({ id, thumbnail, category, title, desc, authorId }) => <BlogsPost key={id} postId={id} title={title} desc={desc} category={category} thumbnail={thumbnail} />)
                }
            </div>
            <br />
            <br />
         </section>
    )
}

export default Blogs