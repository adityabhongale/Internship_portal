import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdminRegister = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        department: '',
        password: '',
        confirmPassword: '',
        adminCode: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
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
        if (!formData.department.trim()) newErrors.department = 'Department is required';
        if (!formData.password) newErrors.password = 'Password is required';
        if (!formData.adminCode.trim()) newErrors.adminCode = 'Admin code is required';
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
        if (formData.password && formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
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

        const apiEndpoint = 'http://localhost:5000/api/admin/register';

        try {
            const response = await fetch(apiEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    department: formData.department,
                    password: formData.password,
                    adminCode: formData.adminCode
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.msg || 'Admin registration failed.');
            }

            const result = await response.json();
            alert(`Admin registration successful! Welcome ${formData.name}!`);
            
            // Redirect to admin login page
            navigate('/admin-login');
        } catch (error) {
            console.error('Error during admin registration:', error);
            alert(`Admin registration failed: ${error.message}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-cyan-600/10 to-blue-600/10 rounded-full blur-2xl animate-pulse delay-500"></div>
            </div>

            <div className="relative z-10 flex items-center justify-center min-h-screen p-6">
                <div className="w-full max-w-2xl bg-black/20 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl border border-purple-500/30 relative">
                    {/* Decorative elements */}
                    <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-xl"></div>
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-600/20 to-purple-600/20 rounded-full blur-xl"></div>
                    
                    {/* Header */}
                    <div className="text-center mb-8 relative z-10">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl mb-4 shadow-lg">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                            </svg>
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-3 tracking-tight">
                            Admin <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Registration</span>
                        </h2>
                        <p className="text-gray-200 text-lg font-medium">
                            Create a new administrative account
                        </p>
                    </div>

                    {/* Security Notice */}
                    <div className="mb-6 p-4 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-400/20 rounded-2xl text-sm relative z-10 backdrop-blur-sm">
                        <p className="text-amber-200 text-center flex items-center justify-center mb-2">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                            </svg>
                            <span className="font-semibold">Admin Code Required</span>
                        </p>
                        <p className="text-amber-300/80 text-xs text-center mb-3">
                            You need a valid admin code to create an administrative account.
                        </p>
                        <div className="bg-amber-500/20 p-3 rounded-xl border border-amber-400/30">
                            <p className="text-amber-200 text-xs text-center font-semibold">
                                🔑 Development Code: <span className="font-mono bg-amber-400/20 px-2 py-1 rounded">INTERN2025_ADMIN</span>
                            </p>
                            <p className="text-amber-300/60 text-xs text-center mt-1">
                                (This will be secured in production)
                            </p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6 text-left relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="group">
                                <label htmlFor="name" className="flex items-center font-semibold text-gray-200 mb-2">
                                    <svg className="w-4 h-4 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                                    placeholder="Enter Your Full Name" 
                                    className={`w-full px-4 py-4 rounded-xl border-2 ${errors.name ? 'border-red-400 bg-red-50/10' : 'border-purple-500/20 bg-black/10'} backdrop-blur-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none transition-all duration-300 group-hover:border-purple-500/30`}
                                />
                                {errors.name && <p className="text-red-400 text-sm mt-2 flex items-center"><svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>{errors.name}</p>}
                            </div>
                            <div className="group">
                                <label htmlFor="email" className="flex items-center font-semibold text-gray-200 mb-2">
                                    <svg className="w-4 h-4 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                                    placeholder="admin@company.com" 
                                    className={`w-full px-4 py-4 rounded-xl border-2 ${errors.email ? 'border-red-400 bg-red-50/10' : 'border-purple-500/20 bg-black/10'} backdrop-blur-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none transition-all duration-300 group-hover:border-purple-500/30`}
                                />
                                {errors.email && <p className="text-red-400 text-sm mt-2 flex items-center"><svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>{errors.email}</p>}
                            </div>
                            <div className="group">
                                <label htmlFor="phone" className="flex items-center font-semibold text-gray-200 mb-2">
                                    <svg className="w-4 h-4 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                                    className={`w-full px-4 py-4 rounded-xl border-2 ${errors.phone ? 'border-red-400 bg-red-50/10' : 'border-purple-500/20 bg-black/10'} backdrop-blur-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none transition-all duration-300 group-hover:border-purple-500/30`}
                                />
                                {errors.phone && <p className="text-red-400 text-sm mt-2 flex items-center"><svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>{errors.phone}</p>}
                            </div>
                            <div className="group">
                                <label htmlFor="department" className="flex items-center font-semibold text-gray-200 mb-2">
                                    <svg className="w-4 h-4 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                    Department
                                </label>
                                <input 
                                    type="text" 
                                    id="department" 
                                    name="department" 
                                    value={formData.department}
                                    onChange={handleInputChange}
                                    placeholder="IT, HR, Operations, etc." 
                                    className={`w-full px-4 py-4 rounded-xl border-2 ${errors.department ? 'border-red-400 bg-red-50/10' : 'border-purple-500/20 bg-black/10'} backdrop-blur-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none transition-all duration-300 group-hover:border-purple-500/30`}
                                />
                                {errors.department && <p className="text-red-400 text-sm mt-2 flex items-center"><svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>{errors.department}</p>}
                            </div>
                            <div className="group">
                                <label htmlFor="password" className="flex items-center font-semibold text-gray-200 mb-2">
                                    <svg className="w-4 h-4 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                                    placeholder="••••••••••••" 
                                    className={`w-full px-4 py-4 rounded-xl border-2 ${errors.password ? 'border-red-400 bg-red-50/10' : 'border-purple-500/20 bg-black/10'} backdrop-blur-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none transition-all duration-300 group-hover:border-purple-500/30`}
                                />
                                {errors.password && <p className="text-red-400 text-sm mt-2 flex items-center"><svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>{errors.password}</p>}
                            </div>
                            <div className="group">
                                <label htmlFor="confirmPassword" className="flex items-center font-semibold text-gray-200 mb-2">
                                    <svg className="w-4 h-4 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                                    placeholder="••••••••••••" 
                                    className={`w-full px-4 py-4 rounded-xl border-2 ${errors.confirmPassword ? 'border-red-400 bg-red-50/10' : 'border-purple-500/20 bg-black/10'} backdrop-blur-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none transition-all duration-300 group-hover:border-purple-500/30`}
                                />
                                {errors.confirmPassword && <p className="text-red-400 text-sm mt-2 flex items-center"><svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>{errors.confirmPassword}</p>}
                            </div>
                        </div>
                        
                        <div className="group">
                            <label htmlFor="adminCode" className="flex items-center font-semibold text-gray-200 mb-2">
                                <svg className="w-4 h-4 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                                </svg>
                                Admin Access Code
                            </label>
                            <input 
                                type="password" 
                                id="adminCode" 
                                name="adminCode" 
                                value={formData.adminCode}
                                onChange={handleInputChange}
                                placeholder="Enter admin access code" 
                                className={`w-full px-4 py-4 rounded-xl border-2 ${errors.adminCode ? 'border-red-400 bg-red-50/10' : 'border-purple-500/20 bg-black/10'} backdrop-blur-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none transition-all duration-300 group-hover:border-purple-500/30`}
                            />
                            {errors.adminCode && <p className="text-red-400 text-sm mt-2 flex items-center"><svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>{errors.adminCode}</p>}
                        </div>
                        
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full py-4 font-bold text-white rounded-xl shadow-lg transition-all duration-300 transform ${
                                isSubmitting 
                                ? 'bg-gray-600/50 cursor-not-allowed scale-95' 
                                : 'bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-purple-500 hover:via-pink-500 hover:to-purple-500 hover:shadow-2xl hover:scale-[1.02] active:scale-95'
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
                                        Creating Admin Account...
                                    </>
                                ) : (
                                    <>
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                        </svg>
                                        Create Admin Account
                                    </>
                                )}
                            </span>
                        </button>
                    </form>
                    
                    <div className="mt-8 text-center relative z-10">
                        <div className="inline-flex items-center px-6 py-3 bg-black/10 backdrop-blur-sm rounded-full border border-purple-500/20">
                            <span className="text-gray-300 text-sm">Already have admin access?</span>
                            <Link 
                                to="/admin-login" 
                                className="ml-2 font-bold text-purple-400 hover:text-purple-300 transition-colors duration-200 underline decoration-purple-400/50 hover:decoration-purple-300 underline-offset-4"
                            >
                                Login here
                            </Link>
                        </div>
                        <div className="mt-4">
                            <Link 
                                to="/login" 
                                className="text-gray-400 hover:text-gray-300 text-sm transition-colors duration-200 flex items-center justify-center"
                            >
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Back to Student Portal
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminRegister;
