import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-12 px-6">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">SargSoftech</h3>
                        <p className="text-sm">
                            Crafting cutting-edge software solutions and digital experiences that drive success.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">Quick Links</h4>
                        <ul className="text-sm space-y-2">
                            <li><Link to="/" className="hover:text-white transition-colors duration-200">Home</Link></li>
                            <li><Link to="/about" className="hover:text-white transition-colors duration-200">About Us</Link></li>
                            <li><Link to="/services" className="hover:text-white transition-colors duration-200">Services</Link></li>
                            <li><Link to="/career" className="hover:text-white transition-colors duration-200">Career</Link></li>
                            <li><Link to="/internships" className="hover:text-white transition-colors duration-200">Internships</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors duration-200">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">Our Services</h4>
                        <ul className="text-sm space-y-2">
                            <li><a href="#" className="hover:text-white transition-colors duration-200">Web Development</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-200">Mobile App Development</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-200">UI/UX Design</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-200">Cloud Solutions</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">Connect With Us</h4>
                        <p className="text-sm mb-4">
                            Stay updated with our latest news and opportunities.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://linkedin.com/company/sargsoftech" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">LinkedIn</a>
                            <a href="https://facebook.com/sargsoftech" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">Facebook</a>
                            <a href="https://twitter.com/sargsoftech" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">Twitter</a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-500">
                    &copy; 2025 Sarg Softech. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;