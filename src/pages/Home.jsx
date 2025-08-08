import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OfferCard from '../components/OfferCard';
import DomainCard from '../components/DomainCard';
import card1Image from '../assets/card 1.png';
import card2Image from '../assets/card 2.png';
import card3Image from '../assets/card 3.png';


const Home = () => (
  <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 font-sans text-gray-800 antialiased">
    <Header />
    <main className="flex-grow">
      {/* Hero Section with glassmorphism */}
      <section className="relative flex items-center justify-center py-24 px-0 overflow-hidden">
        <div className="w-full relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/60 via-blue-400/60 to-pink-400/60 blur-2xl opacity-60 -z-10" />
          <div className="backdrop-blur-lg bg-white/40 shadow-md w-full border-t border-b border-white/30 flex flex-col items-center text-center px-0 py-16 relative z-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-blue-700 to-pink-600 drop-shadow-lg animate-fade-in w-full">
              A Launchpad to Your Tech Career
            </h1>
            <p className="text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 text-gray-700/90 animate-fade-in delay-200 w-full">
              Gain hands-on experience, learn from industry experts, and build a portfolio that will set you apart. Our internships are designed to prepare you for the real world.
            </p>
            <Link
              to="/register"
              className="inline-block px-8 py-3 text-lg font-extrabold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full shadow-xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:bg-gradient-to-l focus:outline-none focus:ring-4 focus:ring-pink-300/60 mt-2"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-24 px-6 bg-white/80 relative overflow-hidden">
        {/* Background Image for What We Offer */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')`
          }}
        />
        <div className="container mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-gray-900 tracking-tight">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <OfferCard
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15M12 4.5a3 3 0 013 3v2.25M12 4.5a3 3 0 00-3 3v2.25M12 19.5a3 3 0 01-3-3V14.25M12 19.5a3 3 0 003-3V14.25" /></svg>}
              title="Expert Mentorship"
              description="Work directly with seasoned professionals and receive one-on-one guidance to accelerate your growth."
              backgroundImage={card1Image}
            />
            <OfferCard
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>}
              title="Real-world Projects"
              description="Contribute to live projects that have a direct impact on our company and our customers."
              backgroundImage={card2Image}
            />
            <OfferCard
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
              title="Networking Opportunities"
              description="Connect with fellow interns and full-time employees, building a valuable professional network."
              backgroundImage={card3Image}
            />
          </div>
        </div>
      </section>

      {/* Internship Domains Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-gray-900 tracking-tight">
            Internship Domains
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <DomainCard
              title="Software Development"
              description="Build and maintain applications using modern programming languages and frameworks."
              icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="Software Dev" className="w-10 h-10 mb-3 mx-auto" />}
            />
            <DomainCard
              title="Data Science"
              description="Analyze large datasets to extract valuable insights and drive business decisions."
              icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Data Science" className="w-10 h-10 mb-3 mx-auto" />}
            />
            <DomainCard
              title="UX/UI Design"
              description="Design intuitive and engaging user interfaces and experiences for our products."
              icon={<img src="https://img.icons8.com/color/96/figma--v1.png" alt="UX/UI Design" className="w-10 h-10 mb-3 mx-auto" />}
            />
            <DomainCard
              title="Marketing"
              description="Help create and execute marketing strategies to grow our brand and reach a wider audience."
              icon={<img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mailchimp.svg" alt="Marketing" className="w-10 h-10 mb-3 mx-auto bg-yellow-300 rounded-full p-1" style={{background:'#fde68a'}} />}
            />
            <DomainCard
              title="Project Management"
              description="Learn to plan, execute, and oversee projects from conception to completion."
              icon={<img src="https://img.icons8.com/color/96/project-management.png" alt="Project Management" className="w-10 h-10 mb-3 mx-auto" />}
            />
            <DomainCard
              title="Human Resources"
              description="Assist in talent acquisition, employee relations, and other HR functions."
              icon={<img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/workplace.svg" alt="Human Resources" className="w-10 h-10 mb-3 mx-auto bg-pink-200 rounded-full p-1" style={{background:'#fbcfe8'}} />}
            />
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Home;