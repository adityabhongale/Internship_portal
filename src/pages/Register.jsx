import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        university: '',
        domain: '',
        resume: null,
        message: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: files ? files[0] : value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = 'Full name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
        if (!formData.university.trim()) newErrors.university = 'University is required';
        if (!formData.domain) newErrors.domain = 'Domain selection is required';
        if (!formData.resume) newErrors.resume = 'Resume upload is required';
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        if (!formData.password) newErrors.password = 'Password is required';
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (formData.email && !emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        // Phone validation
        const phoneRegex = /^[\+]?[1-9]?[\d\s\-\(\)]{10,}$/;
        if (formData.phone && !phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
            newErrors.phone = 'Please enter a valid phone number';
        }

        // Password validation
        if (formData.password && formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        const apiEndpoint = 'http://localhost:5000/api/register';

        // We need to use FormData for file uploads
        const data = new FormData();
        data.append('name', formData.name);
        data.append('email', formData.email);
        data.append('phone', formData.phone);
        data.append('university', formData.university);
        data.append('domain', formData.domain);
        data.append('message', formData.message);
        data.append('password', formData.password);
        data.append('resume', formData.resume); // The resume file

        try {
            const response = await fetch(apiEndpoint, {
                method: 'POST',
                body: data, // Note: no 'Content-Type' header needed for FormData
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.msg || 'Registration failed.');
            }

            const result = await response.json();
            alert(`Registration successful! Welcome ${formData.name}!`);
            
            // Redirect to login page
            navigate('/login');
        } catch (error) {
            console.error('Error during registration:', error);
            alert(`Registration failed: ${error.message}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
            </div>

            <div className="relative z-10 flex items-center justify-center min-h-screen p-6">
                <div className="w-full max-w-4xl bg-white/10 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-2xl border border-white/20 relative">
                    {/* Decorative elements */}
                    <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"></div>
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-xl"></div>
                    
                    {/* Header */}
                    <div className="text-center mb-8 relative z-10">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-4 shadow-lg">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-3 tracking-tight">
                            Join Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Internship Program</span>
                        </h2>
                        <p className="text-gray-200 text-lg font-medium max-w-2xl mx-auto">
                            Take the first step towards your dream career. Fill out the application below and let's build something amazing together.
                        </p>
                    </div>

                <form onSubmit={handleSubmit} className="space-y-6 text-left relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="group">
                            <label htmlFor="name" className="flex items-center font-semibold text-gray-200 mb-2">
                                <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                Full Name
                            </label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Enter Your Name" 
                                className={`w-full px-4 py-4 rounded-xl border-2 ${errors.name ? 'border-red-400 bg-red-50/10' : 'border-white/20 bg-white/10'} backdrop-blur-sm text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all duration-300 group-hover:border-white/30`}
                            />
                            {errors.name && <p className="text-red-400 text-sm mt-2 flex items-center"><svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>{errors.name}</p>}
                        </div>
                        <div className="group">
                            <label htmlFor="email" className="flex items-center font-semibold text-gray-200 mb-2">
                                <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Email Address
                            </label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="you@example.com" 
                                className={`w-full px-4 py-4 rounded-xl border-2 ${errors.email ? 'border-red-400 bg-red-50/10' : 'border-white/20 bg-white/10'} backdrop-blur-sm text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all duration-300 group-hover:border-white/30`}
                            />
                            {errors.email && <p className="text-red-400 text-sm mt-2 flex items-center"><svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>{errors.email}</p>}
                        </div>
                        <div className="group">
                            <label htmlFor="phone" className="flex items-center font-semibold text-gray-200 mb-2">
                                <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                Contact Number
                            </label>
                            <input 
                                type="tel" 
                                id="phone" 
                                name="phone" 
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="0000000000" 
                                className={`w-full px-4 py-4 rounded-xl border-2 ${errors.phone ? 'border-red-400 bg-red-50/10' : 'border-white/20 bg-white/10'} backdrop-blur-sm text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all duration-300 group-hover:border-white/30`}
                            />
                            {errors.phone && <p className="text-red-400 text-sm mt-2 flex items-center"><svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>{errors.phone}</p>}
                        </div>
                        <div className="group">
                            <label htmlFor="university" className="flex items-center font-semibold text-gray-200 mb-2">
                                <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                </svg>
                                College/University
                            </label>
                            <input 
                                type="text" 
                                id="university" 
                                name="university" 
                                value={formData.university}
                                onChange={handleInputChange}
                                placeholder="Enter Your College/University Name" 
                                className={`w-full px-4 py-4 rounded-xl border-2 ${errors.university ? 'border-red-400 bg-red-50/10' : 'border-white/20 bg-white/10'} backdrop-blur-sm text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all duration-300 group-hover:border-white/30`}
                            />
                            {errors.university && <p className="text-red-400 text-sm mt-2 flex items-center"><svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>{errors.university}</p>}
                        </div>
                        <div className="group">
                            <label htmlFor="domain" className="flex items-center font-semibold text-gray-200 mb-2">
                                <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                                Domain of Interest
                            </label>
                            <select 
                                id="domain" 
                                name="domain" 
                                value={formData.domain}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-4 rounded-xl border-2 ${errors.domain ? 'border-red-400 bg-red-50/10' : 'border-white/20 bg-white/10'} backdrop-blur-sm text-white focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none appearance-none transition-all duration-300 group-hover:border-white/30`}
                            >
                                <option value="" className="bg-gray-800 text-white">Select a domain</option>
                                <option value="Software Development" className="bg-gray-800 text-white">Software Development</option>
                                <option value="Data Science" className="bg-gray-800 text-white">Data Science</option>
                                <option value="UX/UI Design" className="bg-gray-800 text-white">UX/UI Design</option>
                                <option value="Marketing" className="bg-gray-800 text-white">Marketing</option>
                                <option value="Project Management" className="bg-gray-800 text-white">Project Management</option>
                                <option value="Human Resources" className="bg-gray-800 text-white">Human Resources</option>
                            </select>
                            {errors.domain && <p className="text-red-400 text-sm mt-2 flex items-center"><svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>{errors.domain}</p>}
                        </div>
                        <div className="group">
                            <label htmlFor="resume" className="flex items-center font-semibold text-gray-200 mb-2">
                                <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                </svg>
                                Upload Resume
                            </label>
                            <input 
                                type="file" 
                                id="resume" 
                                name="resume" 
                                onChange={handleInputChange}
                                accept=".pdf,.doc,.docx" 
                                className={`w-full px-4 py-4 rounded-xl border-2 ${errors.resume ? 'border-red-400 bg-red-50/10' : 'border-white/20 bg-white/10'} backdrop-blur-sm text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gradient-to-r file:from-blue-500 file:to-purple-500 file:text-white hover:file:from-blue-600 hover:file:to-purple-600 transition-all duration-300 group-hover:border-white/30`}
                            />
                            {errors.resume && <p className="text-red-400 text-sm mt-2 flex items-center"><svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>{errors.resume}</p>}
                        </div>
                    </div>
                    
                    <div className="group">
                        <label htmlFor="message" className="flex items-center font-semibold text-gray-200 mb-2">
                            <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            Message to the hiring manager
                        </label>
                        <textarea 
                            id="message" 
                            name="message" 
                            rows="4" 
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Tell us why you'd be a great fit for our team." 
                            className={`w-full px-4 py-4 rounded-xl border-2 ${errors.message ? 'border-red-400 bg-red-50/10' : 'border-white/20 bg-white/10'} backdrop-blur-sm text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all duration-300 group-hover:border-white/30 resize-none`}
                        />
                        {errors.message && <p className="text-red-400 text-sm mt-2 flex items-center"><svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>{errors.message}</p>}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="group">
                            <label htmlFor="password" className="flex items-center font-semibold text-gray-200 mb-2">
                                <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                                Password
                            </label>
                            <input 
                                type="password" 
                                id="password" 
                                name="password" 
                                value={formData.password}
                                onChange={handleInputChange}
                                placeholder="••••••••" 
                                className={`w-full px-4 py-4 rounded-xl border-2 ${errors.password ? 'border-red-400 bg-red-50/10' : 'border-white/20 bg-white/10'} backdrop-blur-sm text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all duration-300 group-hover:border-white/30`}
                            />
                            {errors.password && <p className="text-red-400 text-sm mt-2 flex items-center"><svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>{errors.password}</p>}
                        </div>
                        <div className="group">
                            <label htmlFor="confirmPassword" className="flex items-center font-semibold text-gray-200 mb-2">
                                <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Confirm Password
                            </label>
                            <input 
                                type="password" 
                                id="confirmPassword" 
                                name="confirmPassword" 
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                placeholder="••••••••" 
                                className={`w-full px-4 py-4 rounded-xl border-2 ${errors.confirmPassword ? 'border-red-400 bg-red-50/10' : 'border-white/20 bg-white/10'} backdrop-blur-sm text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all duration-300 group-hover:border-white/30`}
                            />
                            {errors.confirmPassword && <p className="text-red-400 text-sm mt-2 flex items-center"><svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>{errors.confirmPassword}</p>}
                        </div>
                    </div>
                    
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-4 font-bold text-white rounded-xl shadow-lg transition-all duration-300 transform ${
                            isSubmitting 
                            ? 'bg-gray-600/50 cursor-not-allowed scale-95' 
                            : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 hover:shadow-2xl hover:scale-[1.02] active:scale-95'
                        } relative overflow-hidden group`}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        <span className="relative z-10 flex items-center justify-center">
                            {isSubmitting ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Submitting Application...
                                </>
                            ) : (
                                <>
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                    Submit Application
                                </>
                            )}
                        </span>
                    </button>
                </form>
                
                <div className="mt-8 text-center relative z-10">
                    <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                        <span className="text-gray-200 text-sm">Already have an account?</span>
                        <Link 
                            to="/login" 
                            className="ml-2 font-bold text-blue-400 hover:text-blue-300 transition-colors duration-200 underline decoration-blue-400/50 hover:decoration-blue-300 underline-offset-4"
                        >
                            Log in here
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

};

export default Register;
