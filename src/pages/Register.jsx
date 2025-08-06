import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-300 to-blue-300 p-6">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-10 text-center register-container">
            <h2 className="text-3xl font-extrabold text-text-dark mb-2">
                Apply for Internship
            </h2>
            <p className="text-gray-600 mb-8">
                Fill out the form below to submit your application.
            </p>
            <form className="space-y-6 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block font-semibold text-gray-700 mb-1">
                            Full Name
                        </label>
                        <input type="text" id="name" name="name" placeholder="John Doe" required className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block font-semibold text-gray-700 mb-1">
                            Email address
                        </label>
                        <input type="email" id="email" name="email" placeholder="you@example.com" required className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block font-semibold text-gray-700 mb-1">
                            Contact Number
                        </label>
                        <input type="tel" id="phone" name="phone" placeholder="(123) 456-7890" required className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                    <div>
                        <label htmlFor="university" className="block font-semibold text-gray-700 mb-1">
                            College/University
                        </label>
                        <input type="text" id="university" name="university" placeholder="Example University" required className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                    <div>
                        <label htmlFor="domain" className="block font-semibold text-gray-700 mb-1">
                            Domain of Interest
                        </label>
                        <select id="domain" name="domain" required className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary appearance-none">
                            <option value="" disabled>Select a domain</option>
                            <option value="Software Development">Software Development</option>
                            <option value="Data Science">Data Science</option>
                            <option value="UX/UI Design">UX/UI Design</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Project Management">Project Management</option>
                            <option value="Human Resources">Human Resources</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="resume" className="block font-semibold text-gray-700 mb-1">
                            Upload Resume
                        </label>
                        <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" required className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primaryLight" />
                    </div>
                </div>
                <div>
                    <label htmlFor="message" className="block font-semibold text-gray-700 mb-1">
                        Message to the hiring manager
                    </label>
                    <textarea id="message" name="message" rows="4" placeholder="Tell us why you'd be a great fit for our team." required className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="password" className="block font-semibold text-gray-700 mb-1">
                            Password
                        </label>
                        <input type="password" id="password" name="password" placeholder="••••••••" required className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                    <div>
                        <label htmlFor="confirm-password" className="block font-semibold text-gray-700 mb-1">
                            Confirm Password
                        </label>
                        <input type="password" id="confirm-password" name="confirm-password" placeholder="••••••••" required className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full py-3 font-bold text-white bg-gradient-to-r from-primaryLight to-primary rounded-lg shadow-md transition-all duration-200 hover:shadow-xl hover:from-primary hover:to-primaryLight"
                >
                    Submit Application
                </button>
            </form>
            <div className="mt-6 text-sm text-gray-500">
                Already have an account?{' '}
                <Link to="/login" className="font-bold text-primary hover:underline">
                    Log in here
                </Link>
            </div>
        </div>
    </div>
);

export default Register;