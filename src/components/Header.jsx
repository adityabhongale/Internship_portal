import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/sarg1.png';

const Header = () => {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const getNavLinkClass = (path) => {
        return `font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-200 ${location.pathname === path ? 'text-indigo-600 border-b-2 border-indigo-600 pb-1' : ''}`;
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <nav className="container mx-auto px-4 sm:px-6 py-4">
                <div className="flex items-center justify-between">
                    <Link to="/" className="text-xl sm:text-2xl font-bold text-indigo-700 flex items-center">
                        <img 
                            src={logo} 
                            alt="Company Logo" 
                            className="h-8 sm:h-10 w-auto mr-2"
                        />
                    </Link>
                    
                    {/* Mobile menu button */}
                    <button
                        onClick={toggleMobileMenu}
                        className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        {!isMobileMenuOpen ? (
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        ) : (
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        )}
                    </button>

                    {/* Desktop navigation */}
                    <ul className="hidden lg:flex items-center space-x-6">
                        <li>
                            <a href="https://sargsoftech.com/Main" target="_blank" rel="noopener noreferrer" className={getNavLinkClass('/home')}>Home</a>
                        </li>
                        <li>
                            <a href="https://sargsoftech.com/aboutus" target="_blank" rel="noopener noreferrer" className={getNavLinkClass('/about')}>About Us</a>
                        </li>
                        <li>
                            <a href="https://sargsoftech.com/services" target="_blank" rel="noopener noreferrer" className={getNavLinkClass('/services')}>Services</a>
                        </li>
                        <li>
                            <a href="https://sargsoftech.com/career" target="_blank" rel="noopener noreferrer" className={getNavLinkClass('/career')}>Career</a>
                        </li>
                        <li>
                            <Link to="/" className={getNavLinkClass('/')}>Internships</Link>
                        </li>
                        <li>
                           <a href="https://sargsoftech.com/Contact" target="_blank" rel="noopener noreferrer" className={getNavLinkClass('/contact')}>Contact Us</a>
                        </li>
                    </ul>
                </div>

                {/* Mobile navigation menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden mt-4">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50 rounded-lg">
                            <a 
                                href="https://sargsoftech.com/Main" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-100"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Home
                            </a>
                            <a 
                                href="https://sargsoftech.com/aboutus" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-100"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                About Us
                            </a>
                            <a 
                                href="https://sargsoftech.com/services" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-100"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Services
                            </a>
                            <a 
                                href="https://sargsoftech.com/career" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-100"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Career
                            </a>
                            <Link 
                                to="/" 
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-100"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Internships
                            </Link>
                            <a 
                                href="https://sargsoftech.com/Contact" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-100"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;