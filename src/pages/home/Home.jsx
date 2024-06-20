import { Link } from "react-router-dom";
import CustomerReview from "../../components/reviews/CustomerReviews";
import LoanCalculator from "./EMIcalculator";
import { Button } from "../../components/ui/button";

function Home() {
  return (
    <div className="p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Discover a smarter way to Borrow and Lend with our platform
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Gone are the days of complex and cumbersome lending processes. At
          Lending Buddha, we've streamlined the entire experience to make
          borrowing and lending as simple as possible. Our user-friendly
          interface guides you through each step of the process, ensuring a
          seamless experience from start to finish. Whether you're a borrower in
          need of funds or a lender looking to invest, our platform makes it
          easy to achieve your financial goals.
        </p>
        <div className="flex space-x-4 mb-6 justify-center items-center">
          <Button className="btn-primary">Borrow</Button>
          <Button className="btn-primary">Lender</Button>
        </div>
        <a href="#" className="text-blue-500 text-lg font-bold underline mb-8 block">
          Contact Us
        </a>
      </div>

      <LoanCalculator />

      <section id="help_you" className="my-8">
        <p className="text-2xl font-bold mb-4">
          How can Lending Buddha Help You?
        </p>
        <p className="text-lg mb-6">
          Lending Buddha, India's leading peer-to-peer Lending Marketplace, is
          trusted by doctors, engineers, businessmen and many more for their
          investing and financing needs.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://getlendingbuddha.online/static/images/custom/want-to-invest-icon.png"
              alt=""
              className="w-16 h-16 mb-4"
            />
            <p className="text-xl font-bold mb-2">Want to Invest</p>
            <ul className="list-disc list-inside mb-4">
              <li>
                Earn higher interest returns on your investments as much as 36%
              </li>
              <li>
                Invest as low as Rs. 10,000 in multiple verified & creditworthy
                borrowers
              </li>
              <li>Earn monthly returns and without any hidden charges</li>
            </ul>
            <Button className="btn-primary w-full">Invest Now</Button>
            <a href="#" className="text-blue-500 underline block mt-4">
              Learn More
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://getlendingbuddha.online/static/images/custom/need-a-loan-icon.png"
              alt=""
              className="w-16 h-16 mb-4"
            />
            <p className="text-xl font-bold mb-2">Need a loan</p>
            <ul className="list-disc list-inside mb-4">
              <li>Save more with low interest rates as low as 12%</li>
              <li>
                Hassle-free borrowing process, interact with investors directly
              </li>
              <li>
                Avail small loans Rs. 5,000 to Rs. 5,00,000 without any hidden
                charges
              </li>
            </ul>
            <Button className="btn-primary w-full">Register as Borrower</Button>
            <a href="#" className="text-blue-500 underline block mt-4">
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section id="need_loan" className="my-8">
        <p className="text-2xl font-bold mb-4">
          Need a loan for a Wedding? Want to buy a new car? Take A personal loan
          online with Lending Buddha
        </p>
        <p className="text-lg mb-6">
          We operate with a mission of keeping our costs low compared to
          traditional financial institutions by cutting out the middle man and
          pass all of the the savings directly to our investors who get high
          returns and borrowers who are charged low interest rates.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://getlendingbuddha.online/static/images/custom/hassle-free-icon.png"
              alt=""
              className="w-16 h-16 mb-4"
            />
            <p className="text-xl font-bold mb-2">Bank Free = Hassle Free</p>
            <p className="text-lg">
              Lending Buddha has simplified the lending process in India.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://getlendingbuddha.online/static/images/custom/higher-returns-icon.png"
              alt=""
              className="w-16 h-16 mb-4"
            />
            <p className="text-xl font-bold mb-2">Higher Returns</p>
            <p className="text-lg">
              Earn much higher returns than any other channel.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://getlendingbuddha.online/static/images/custom/potential-earnings-icon.png"
              alt=""
              className="w-16 h-16 mb-4"
            />
            <p className="text-xl font-bold mb-2">
              Increase Your Potential earnings
            </p>
            <p className="text-lg">
              Save more money with Lending Buddha, No hidden charges.
            </p>
          </div>
        </div>
      </section>

      <div id="image_link2" className="my-8 text-center">
        <p className="text-2xl font-bold mb-4">
          Lending Buddha - Making meaningful connections for all your borrowing
          and investing needs
        </p>
        <Button className="btn-primary">Register as Lender</Button>
      </div>

      <section className="my-8">
        <p className="text-2xl font-bold mb-4 text-center">
          Our Proven Process Produces Results
        </p>
        <p className="text-lg mb-6">
          Lending Buddha has simplified the process of lending and borrowing. It
          also gives you complete control of lending and borrowing at your own
          terms.
        </p>
        <div className="grid gap-6 md:grid-cols-5">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://getlendingbuddha.online/static/images/custom/step1.png"
              alt=""
              className="w-16 h-16 mb-4"
            />
            <p className="text-xl font-bold">1. Register</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://getlendingbuddha.online/static/images/custom/step2.png"
              alt=""
              className="w-16 h-16 mb-4"
            />
            <p className="text-xl font-bold">
              2. E-KYC to comply RBI Guidelines
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://getlendingbuddha.online/static/images/custom/step3.png"
              alt=""
              className="w-16 h-16 mb-4"
            />
            <p className="text-xl font-bold">3. Lending Buddha Verification</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://getlendingbuddha.online/static/images/custom/step4.png"
              alt=""
              className="w-16 h-16 mb-4"
            />
            <p className="text-xl font-bold">
              4. Start Building or Reaching out to Investors
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://getlendingbuddha.online/static/images/custom/step5.png"
              alt=""
              className="w-16 h-16 mb-4"
            />
            <p className="text-xl font-bold">5. Loan Disbursement</p>
          </div>
        </div>
      </section>

      <section className="my-8">
        <p className="text-2xl font-bold mb-4 text-center">
          AI-Powered Peer-to-Peer Lending in India
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <img
            src="https://getlendingbuddha.online/static/images/background/homepage-image.jpg"
            alt=""
            className="w-full rounded-lg shadow-md"
          />
          <div className="flex flex-col justify-center">
            <p className="text-lg mb-4">
              Lending Buddha introduces a groundbreaking approach to
              Peer-to-Peer lending in India with the help of AI technology. Our
              platform connects borrowers and lenders directly, offering
              seamless transactions, lower interest rates, and higher returns.
              Experience the future of lending with us.
            </p>
            <button className="btn-primary self-start">Learn More</button>
          </div>
        </div>
      </section>

      <div className="flex justify-center items-cen">
      <CustomerReview />
      </div>
    </div>
  );
}

export default Home;
