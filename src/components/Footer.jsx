import React from 'react';
import { Link } from 'react-router-dom';
import whiteLogo from '../assets/white-logo.png';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-12 px-6">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <div className="mb-4">
                            <img 
                                src={whiteLogo} 
                                alt="Company Logo" 
                                className="h-12 w-auto mb-3"
                            />
                        </div>
                        <p className="text-sm">
                            Crafting cutting-edge software solutions and digital experiences that drive success.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">Quick Links</h4>
                        <ul className="text-sm space-y-2">
                            <li><a href="https://sargsoftech.com/Main" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">Home</a></li>

                            <li><a href="https://sargsoftech.com/aboutus" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">About Us</a></li>
                            <li><a href="https://sargsoftech.com/services" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">Services</a></li>
                            <li><a href="https://sargsoftech.com/career" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">Career</a></li>
                            <li><Link to="/" className="hover:text-white transition-colors duration-200">Internships</Link></li>
                            <li><a href="https://sargsoftech.com/Contact" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">Our Services</h4>
                        <ul className="text-sm space-y-2">
                            <li><a href="https://sargsoftech.com/web/5" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">Web Development</a></li>
                            <li><a href="https://sargsoftech.com/web/6" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">Mobile App Development</a></li>
                            <li><a href="https://sargsoftech.com/web/7" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">E-Commerce Development</a></li>
                            <li><a href="https://sargsoftech.com/web/8" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">UX/UI Design</a></li>
                            <li><a href="https://sargsoftech.com/web/9" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">ERP / CRM Development</a></li>
                            <li><a href="https://sargsoftech.com/web/10" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">Support and Maintenance</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">Connect With Us</h4>
                        <p className="text-sm mb-4">
                            Stay updated with our latest news and opportunities.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.linkedin.com/company/sargsoftech" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">LinkedIn</a>
                            <a href="https://www.facebook.com/share/18RVHmk1Re/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">Facebook</a>
                    
                            <a href="https://www.instagram.com/sargsoft/?igsh=ZGVsOHNkMWpnNDcw" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">Instagram</a>
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