import '../blogs/blogs.css';
import { Link } from 'react-router-dom';

function Blogs() {
  return (

    <div className='root'>
        {/* Blogs
        <div className="breadCrumbMenu">
          <Link to={'/'}>Home</Link>/
          <Link to={'/howitworks'}>How It Works</Link>
        </div> */}

        <h2 id='blogHeading'>Blogs</h2>
        <div className="postContainer">

          <div className="post">
            <img src="https://www.getlendingbuddha.online/static/images/blog/p2p-lending-vs-mutual-funds.jpg" alt="" />
            <Link to={'/'} className='postHeading'>Peer to Peer Lending vs Mutual Funds: Find the right Lendment option for you</Link>
            <p>Peer to peer (P2P) lending is fast emerging as a lucrative Lendment avenue in the Indian financial marketplace. While new, it offers</p>
            <Link to={'/'} className='readMore'>Read more</Link>
          </div>

          <div className="post">
            <img src="https://www.getlendingbuddha.online/static/images/blog/how-safe-is-peer-to-peer-lending.jpg" alt="" />
            <Link to={'/'} className='postHeading'>How safe is peer to peer lending in India & Understanding the risks involved</Link>
            <p>Peer to peer lending is continuously gaining popularity throughout the country as more and more Lendors are developing</p>
            <Link to={'/'} className='readMore'>Read more</Link>
          </div>

          <div className="post">
            <img src="https://www.getlendingbuddha.online/static/images/blog/personal-loan-in-ahmedabad.jpg" alt="" />
            <Link to={'/'} className='postHeading'>Apply for personal loan in Ahmedabad online with Lending Buddha</Link>
            <p>Ahmedabad is one of the major cities of India. Ahmedabad is the fifth most populous city in India with a growing population and infrastructure</p>
            <Link to={'/'} className='readMore'>Read more</Link>
          </div>

          <div className="post">
            <img src="https://www.getlendingbuddha.online/static/images/blog/debt-consolidation.png" alt="" />
            <Link to={'/'} className='postHeading'>Debt Consolidation Loans For Credit Cards Settlement & Informal Debts</Link>
            <p>Debt consolidation loan is a loan which can be taken in order to pay off other debts. Thus by consolidating many small debts with one debt, one gets favorable payment off terms and lower burden of EMI</p>
            <Link to={'/'} className='readMore'>Read more</Link>
          </div>

        </div>
    </div>

  );
}

export default Blogs;
