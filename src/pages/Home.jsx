import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OfferCard from '../components/OfferCard';
import DomainCard from '../components/DomainCard';

const Home = () => (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans text-gray-800 antialiased">
        <Header />
        <main className="flex-grow">
            <section className="bg-gradient-to-r from-purple-400 to-blue-400 text-white text-center py-20 px-6">
                <div className="container mx-auto max-w-4xl">
                    <h1 className="text-5xl font-extrabold leading-tight mb-4 fade-in-text">
                        A Launchpad to Your Tech Career
                    </h1>
                    <p className="text-lg font-light max-w-2xl mx-auto mb-8 opacity-80 fade-in-text" style={{ animationDelay: '0.5s' }}>
                        Gain hands-on experience, learn from industry experts, and build a portfolio that will set you apart. Our internships are designed to prepare you for the real world.
                    </p>
                    <Link
                        to="/register"
                        className="inline-block px-10 py-4 text-lg font-bold text-indigo-700 bg-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-indigo-300"
                    >
                        Apply Now
                    </Link>
                </div>
            </section>
            <section className="py-20 px-6 bg-white">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
                        What We Offer
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <OfferCard
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15M12 4.5a3 3 0 013 3v2.25M12 4.5a3 3 0 00-3 3v2.25M12 19.5a3 3 0 01-3-3V14.25M12 19.5a3 3 0 003-3V14.25" /></svg>}
                            title="Expert Mentorship"
                            description="Work directly with seasoned professionals and receive one-on-one guidance to accelerate your growth."
                        />
                        <OfferCard
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>}
                            title="Real-world Projects"
                            description="Contribute to live projects that have a direct impact on our company and our customers."
                        />
                        <OfferCard
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                            title="Networking Opportunities"
                            description="Connect with fellow interns and full-time employees, building a valuable professional network."
                        />
                    </div>
                </div>
            </section>
            <section className="py-20 px-6 bg-gray-50">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
                        Internship Domains
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <DomainCard
                            title="Software Development"
                            description="Build and maintain applications using modern programming languages and frameworks."
                        />
                        <DomainCard
                            title="Data Science"
                            description="Analyze large datasets to extract valuable insights and drive business decisions."
                        />
                        <DomainCard
                            title="UX/UI Design"
                            description="Design intuitive and engaging user interfaces and experiences for our products."
                        />
                        <DomainCard
                            title="Marketing"
                            description="Help create and execute marketing strategies to grow our brand and reach a wider audience."
                        />
                        <DomainCard
                            title="Project Management"
                            description="Learn to plan, execute, and oversee projects from conception to completion."
                        />
                        <DomainCard
                            title="Human Resources"
                            description="Assist in talent acquisition, employee relations, and other HR functions."
                        />
                    </div>
                </div>
            </section>
        </main>
        <Footer />
    </div>
);

export default Home;