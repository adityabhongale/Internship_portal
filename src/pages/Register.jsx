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

        // Simulate form submission
        try {
            // Here you would typically send the data to your backend
            await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
            
            alert(`Registration successful! Welcome ${formData.name}! You can now log in with your credentials.`);
            
            // Redirect to login page
            navigate('/login');
        } catch (error) {
            alert('Registration failed. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 font-sans text-gray-800 antialiased p-6">
            <div className="w-full max-w-3xl bg-white/40 backdrop-blur-lg p-14 rounded-2xl shadow-2xl border border-white/30 text-center">
                <h2 className="text-3xl font-extrabold text-blue-700 mb-2 tracking-tight drop-shadow-sm">
                    Apply for Internship
                </h2>
                <p className="text-gray-700 mb-8 font-medium">
                    Fill out the form below to submit your application.
                </p>
                
                {/* Success/Demo Message */}
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-sm">
                    <p className="text-green-700 font-semibold mb-1">📝 Demo Registration</p>
                    <p className="text-green-600">Fill out the form and submit - you'll be registered and can login!</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8 text-left">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <label htmlFor="name" className="block font-semibold text-gray-700 mb-1">Full Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Enter Your Name" 
                                className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-200'} bg-white/70 focus:ring-2 focus:ring-blue-200 outline-none`}
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>
                        <div>
                            <label htmlFor="email" className="block font-semibold text-gray-700 mb-1">Email address</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="you@example.com" 
                                className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-200'} bg-white/70 focus:ring-2 focus:ring-blue-200 outline-none`}
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>
                        <div>
                            <label htmlFor="phone" className="block font-semibold text-gray-700 mb-1">Contact Number</label>
                            <input 
                                type="tel" 
                                id="phone" 
                                name="phone" 
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="0000000000" 
                                className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-200'} bg-white/70 focus:ring-2 focus:ring-blue-200 outline-none`}
                            />
                            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                        </div>
                        <div>
                            <label htmlFor="university" className="block font-semibold text-gray-700 mb-1">College/University</label>
                            <input 
                                type="text" 
                                id="university" 
                                name="university" 
                                value={formData.university}
                                onChange={handleInputChange}
                                placeholder="Enter Your College/University Name" 
                                className={`w-full px-4 py-3 rounded-lg border ${errors.university ? 'border-red-500' : 'border-gray-200'} bg-white/70 focus:ring-2 focus:ring-blue-200 outline-none`}
                            />
                            {errors.university && <p className="text-red-500 text-sm mt-1">{errors.university}</p>}
                        </div>
                        <div>
                            <label htmlFor="domain" className="block font-semibold text-gray-700 mb-1">Domain of Interest</label>
                            <select 
                                id="domain" 
                                name="domain" 
                                value={formData.domain}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-3 rounded-lg border ${errors.domain ? 'border-red-500' : 'border-gray-200'} bg-white/70 focus:ring-2 focus:ring-blue-200 outline-none appearance-none`}
                            >
                                <option value="">Select a domain</option>
                                <option value="Software Development">Software Development</option>
                                <option value="Data Science">Data Science</option>
                                <option value="UX/UI Design">UX/UI Design</option>
                                <option value="Marketing">Marketing</option>
                                <option value="Project Management">Project Management</option>
                                <option value="Human Resources">Human Resources</option>
                            </select>
                            {errors.domain && <p className="text-red-500 text-sm mt-1">{errors.domain}</p>}
                        </div>
                        <div>
                            <label htmlFor="resume" className="block font-semibold text-gray-700 mb-1">Upload Resume</label>
                            <input 
                                type="file" 
                                id="resume" 
                                name="resume" 
                                onChange={handleInputChange}
                                accept=".pdf,.doc,.docx" 
                                className={`w-full px-4 py-3 rounded-lg border ${errors.resume ? 'border-red-500' : 'border-gray-200'} bg-white/70 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700`}
                            />
                            {errors.resume && <p className="text-red-500 text-sm mt-1">{errors.resume}</p>}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="message" className="block font-semibold text-gray-700 mb-1">Message to the hiring manager</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            rows="4" 
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Tell us why you'd be a great fit for our team." 
                            className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-200'} bg-white/70 focus:ring-2 focus:ring-blue-200 outline-none`}
                        />
                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <label htmlFor="password" className="block font-semibold text-gray-700 mb-1">Password</label>
                            <input 
                                type="password" 
                                id="password" 
                                name="password" 
                                value={formData.password}
                                onChange={handleInputChange}
                                placeholder="••••••••" 
                                className={`w-full px-4 py-3 rounded-lg border ${errors.password ? 'border-red-500' : 'border-gray-200'} bg-white/70 focus:ring-2 focus:ring-blue-200 outline-none`}
                            />
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                        </div>
                        <div>
                            <label htmlFor="confirmPassword" className="block font-semibold text-gray-700 mb-1">Confirm Password</label>
                            <input 
                                type="password" 
                                id="confirmPassword" 
                                name="confirmPassword" 
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                placeholder="••••••••" 
                                className={`w-full px-4 py-3 rounded-lg border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-200'} bg-white/70 focus:ring-2 focus:ring-blue-200 outline-none`}
                            />
                            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                        </div>
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-3 font-bold text-white rounded-xl shadow-lg transition-all duration-200 ${
                            isSubmitting 
                            ? 'bg-gray-400 cursor-not-allowed' 
                            : 'bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 hover:shadow-xl'
                        }`}
                    >
                        {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                    </button>
                </form>
                <div className="mt-6 text-sm text-gray-500">
                    Already have an account?{' '}
                    <Link to="/login" className="font-bold text-blue-700 hover:underline">
                        Log in here
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
