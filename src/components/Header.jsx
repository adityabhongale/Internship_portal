import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();

    const getNavLinkClass = (path) => {
        return `font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-200 ${location.pathname === path ? 'text-indigo-600 border-b-2 border-indigo-600 pb-1' : ''}`;
    };
    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <nav className="container mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between">
                <Link to="/" className="text-2xl font-bold text-indigo-700 mb-4 md:mb-0">
                    SargSoftech
                </Link>
                <ul className="flex flex-wrap items-center justify-center space-x-6">
                    <li>
                        <Link to="/" className={getNavLinkClass('/')}>Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className={getNavLinkClass('/about')}>About Us</Link>
                    </li>
                    <li>
                        <Link to="/services" className={getNavLinkClass('/services')}>Services</Link>
                    </li>
                    <li>
                        <Link to="/career" className={getNavLinkClass('/career')}>Career</Link>
                    </li>
                    <li>
                        <Link to="/contact" className={getNavLinkClass('/contact')}>Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/internships" className={getNavLinkClass('/internships')}>Internships</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;