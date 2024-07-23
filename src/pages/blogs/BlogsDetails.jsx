import React, { useEffect, useState } from 'react'
import './Blogs.css'
import BlogAuthor from './BlogAuthor'
import { Link, useParams } from 'react-router-dom'
import { demoData } from './demoData'


const BlogsDetails = () => {

  const {id}=useParams();
  const post = demoData.find(post => post.id === parseInt(id));
  console.log(id);

  if (!post) return <p>Post not found.</p>;

  return (
    
    <section className='blog-deatils'>
       <div className='container blog-detail-container'>
        <div className='blog-details-header'>
          <BlogAuthor />

        </div>
        <h1>{post.title}</h1>
        <div className='blog-detail-thumbnail'>
          <img src={post.thumbnail} alt="" />
        </div>
        <div className="blog-details-container">
            <div className="blog--details-section">
                <h2>1. Diversifying Options</h2>
                <div className="blog-details-content">
                    <h3>Peer to Peer Lending:</h3>
                    <p>A P2P lending marketplace offers lenders a variety of borrowers to choose from. Lenders can review each borrower's credit details and decide whom to lend to. Similarly, borrowers can choose individual lenders or groups of lenders for their financial needs.</p>
                    <ul>
                        <li>Transparent process</li>
                        <li>Direct lender-borrower interaction</li>
                    </ul>
                </div>

                <div className="blog-details-content">
                    <h3>Mutual Funds:</h3>
                    <p>Mutual funds involve pooling capital with other investors. A portfolio manager manages investments across various avenues, aiming to reduce market risks associated with stock market investments.</p>
                    <ul>
                        <li>Diverse investment options (e.g., equities)</li>
                        <li>Professional management</li>
                    </ul>
                </div>
            </div>

            <div className="blog-details-section">
                <h2>2. Exit Strategy</h2>
                <div className="blog-details-content">
                    <h3>Peer to Peer Lending:</h3>
                    <p>In P2P lending, lenders must adhere to the loan term, restricting withdrawal flexibility. Early withdrawal may incur penalties or loss of interest.</p>
                    <ul>
                        <li>Low liquidity</li>
                        <li>Fixed term commitment</li>
                    </ul>
                </div>

                <div className="blog-details-content">
                    <h3>Mutual Funds:</h3>
                    <p>Mutual funds offer high liquidity, allowing investors to buy or sell holdings at any time. This flexibility is beneficial for investors needing quick access to their funds.</p>
                    <ul>
                        <li>High liquidity</li>
                        <li>Quick access to investments</li>
                    </ul>
                </div>
            </div>

            <div className="blog-details-section">
                <h2>3. Returns</h2>
                <div className="blog-content">
                    <h3>Peer to Peer Lending:</h3>
                    <p>Returns in P2P lending are fixed and not subject to market volatility, providing predictable income for lenders over the loan term.</p>
                    <ul>
                        <li>Predictable returns</li>
                        <li>Stable income</li>
                    </ul>
                </div>

                <div className="blog-details-content">
                    <h3>Mutual Funds:</h3>
                    <p>Mutual fund returns are variable, influenced by market conditions. While potential returns can be higher, there is also risk of losses during market downturns.</p>
                    <ul>
                        <li>Potential for higher returns</li>
                        <li>Market risk exposure</li>
                    </ul>
                </div>
            </div>

            <div className="blog-details-section">
                <p>Many websites offer P2P lending options, but it's essential to choose a platform that ensures the safety and security of investments while maximizing returns. Lending Buddha strikes a balance between safety and returns, making it a preferred choice for many investors. Register now to explore your lending options!</p>
            </div>
        </div>
       </div>
    </section>
  )
}

export default BlogsDetails