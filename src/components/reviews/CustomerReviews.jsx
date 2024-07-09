import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CustomerReview.css'; // Import the CSS file

const reviews = [
  {
    img: "https://getlendingbuddha.online/static/images/people/imranCheulkar.png",
    text: "Lending Buddha is India's one of the best loan platform and top peer to peer club. My best business partner for all my business loan solution. Always Applied for the business loan got the loan in super fast process. Lending Buddha is everything they said, quick response, best customer service and quick loan disbursement. If you are in need of a loan then Lending Buddha is the place to go. I highly recommended. My five star rating to Lending Buddha Team. Thank you for always supporting me and making my business life easy.",
    name: "Imran Cheulkar",
    role: "Borrower"
  },
  {
    img: "https://getlendingbuddha.online/static/images/people/imranCheulkar.png",
    text: "Lending Buddha has exceeded my expectations as a lender. The AI algorithms have made the investment process incredibly efficient, matching me with borrowers who align perfectly with my investment criteria. The platform's user-friendly interface and transparent approach have made investing a hassle-free and rewarding experience.",
    name: "A. Bansal",
    role: "Investor"
  },
  {
    img: "https://getlendingbuddha.online/static/images/people/imranCheulkar.png",
    text: "Applying for a loan through Lending Buddha has been a game-changer for me. The AI-driven matchmaking ensured that I was connected with lenders who offered competitive terms tailored to my needs. The entire process was seamless and transparent, allowing me to secure the funds I needed quickly and easily. I'm grateful for the support and flexibility provided by Lending Buddha.",
    name: "S. Thukral",
    role: "Borrower"
  },
  {
    img: "https://getlendingbuddha.online/static/images/people/imranCheulkar.png",
    text: "Lending Buddha has been a lifesaver for me during a time of financial need. The platform's user-friendly interface made it easy for me to explore loan options and choose the terms that worked best for me. The AI algorithms matched me with lenders who understood my situation and offered fair and affordable rates. Thanks to Lending Buddha, I was able to access the funds I needed without any hassle.",
    name: "I. Kukade",
    role: "Investor"
  },
  {
    img: "https://getlendingbuddha.online/static/images/people/imranCheulkar.png",
    text: "Lending Buddha helped me in the time when i really needed the money. I am really thankful as it helped our family at the time of emergency. Team is really co-operative and they fulfilled what they promised.",
    name: "Bhanu Gautam",
    role: "Borrower"
  },
  {
    img: "https://getlendingbuddha.online/static/images/people/imranCheulkar.png",
    text: "Thanks to Lending Buddha I got my loan within 48 hours. Lending Buddha support was very assistive and they helped me get funded within 24 hours.",
    name: "Ajay Sethi",
    role: "Borrower"
  },
  {
    img: "https://getlendingbuddha.online/static/images/people/imranCheulkar.png",
    text: "Lending Buddha has been the only ray of hope when, others closed their doors on me.",
    name: "Biswajit Mishra",
    role: "Borrower"
  },
  {
    img: "https://getlendingbuddha.online/static/images/people/imranCheulkar.png",
    text: "Lending Buddha is definitely going the extra mile in terms of customer satisfaction. In P2P lending, I was very unsure of how much support I would receive from a facilitator site, but Lending Buddha just proved to me that it values its business and its customers. Cheers and Kudos.",
    name: "Karan Rao",
    role: "Investor"
  }
];

const CustomerReview = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000 // 5 seconds
  };

  return (
    <section className="section" id="customer_review">
      <p className="heading">
        What our Customers say about us?
      </p>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div className="card" key={index}>
            <img src={review.img} alt={review.name} />
            <div className="review-text">
              <p>{review.text}</p>
              <span>{review.name}</span>
              <p className="role">{review.role}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default CustomerReview;
