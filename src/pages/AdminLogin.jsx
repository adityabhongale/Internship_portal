import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        
        console.log('Admin login attempt with email:', email);
        
        try {
            const response = await fetch('http://localhost:5000/api/admin/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email.trim(),
                    password: password.trim()
                })
            });
            
            const data = await response.json();
            
            if (response.ok && data.token) {
                // Store JWT token and admin data
                localStorage.setItem('adminToken', data.token);
                localStorage.setItem('admin', JSON.stringify(data.admin));
                
                // Success message
                alert(`Admin login successful! Welcome ${data.admin.name}!`);
                
                // Navigate to admin dashboard
                navigate('/admin');
            } else {
                // Handle login error
                setError(data.msg || 'Admin login failed. Please check your credentials.');
            }
        } catch (error) {
            console.error('Admin login error:', error);
            setError('Connection error. Please make sure the backend server is running.');
        } finally {
            setLoading(false);
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
                <div className="w-full max-w-md bg-black/20 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl border border-purple-500/30 relative">
                    {/* Decorative elements */}
                    <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-xl"></div>
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-600/20 to-purple-600/20 rounded-full blur-xl"></div>
                    
                    {/* Header */}
                    <div className="text-center mb-8 relative z-10">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl mb-4 shadow-lg">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-3 tracking-tight">
                            Admin <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Portal</span>
                        </h2>
                        <p className="text-gray-200 text-lg font-medium">
                            Secure access to administrative dashboard
                        </p>
                    </div>

                    {/* Security Notice */}
                    <div className="mb-6 p-4 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-400/20 rounded-2xl text-sm relative z-10 backdrop-blur-sm">
                        <p className="text-amber-200 text-center flex items-center justify-center">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
                            </svg>
                            <span className="font-semibold">Authorized Personnel Only</span>
                        </p>
                        <p className="text-amber-300/80 text-xs mt-1 text-center">
                            This is a secure area. Unauthorized access is prohibited.
                        </p>
                    </div>
                    
                    {/* Error Message */}
                    {error && (
                        <div className="mb-6 p-4 bg-red-500/20 border border-red-400/30 rounded-xl backdrop-blur-sm relative z-10">
                            <p className="text-red-200 text-sm flex items-center">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                {error}
                            </p>
                        </div>
                    )}
            
                    <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                        <div className="group">
                            <label htmlFor="email" className="flex items-center font-semibold text-gray-200 mb-2">
                                <svg className="w-4 h-4 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                Admin Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="admin@company.com"
                                required
                                className="w-full px-4 py-4 rounded-xl border-2 border-purple-500/20 bg-black/10 backdrop-blur-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none transition-all duration-300 group-hover:border-purple-500/30"
                            />
                        </div>
                        <div className="group">
                            <label htmlFor="password" className="flex items-center font-semibold text-gray-200 mb-2">
                                <svg className="w-4 h-4 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                                Admin Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••••••"
                                required
                                className="w-full px-4 py-4 rounded-xl border-2 border-purple-500/20 bg-black/10 backdrop-blur-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none transition-all duration-300 group-hover:border-purple-500/30"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-4 font-bold text-white rounded-xl shadow-lg transition-all duration-300 transform ${
                                loading 
                                ? 'bg-gray-600/50 cursor-not-allowed scale-95' 
                                : 'bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-purple-500 hover:via-pink-500 hover:to-purple-500 hover:shadow-2xl hover:scale-[1.02] active:scale-95'
                            } relative overflow-hidden group`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            <span className="relative z-10 flex items-center justify-center">
                                {loading ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Authenticating...
                                    </>
                                ) : (
                                    <>
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                        Access Admin Portal
                                    </>
                                )}
                            </span>
                        </button>
                    </form>
                    
                    <div className="mt-8 text-center relative z-10">
                        <div className="inline-flex items-center px-6 py-3 bg-black/10 backdrop-blur-sm rounded-full border border-purple-500/20">
                            <span className="text-gray-300 text-sm">Need admin access?</span>
                            <Link 
                                to="/admin-register" 
                                className="ml-2 font-bold text-purple-400 hover:text-purple-300 transition-colors duration-200 underline decoration-purple-400/50 hover:decoration-purple-300 underline-offset-4"
                            >
                                Register here
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
                                Back to Student Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
