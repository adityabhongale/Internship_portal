import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        
        console.log('Login attempt with email:', email);
        
        try {
            const response = await fetch('http://localhost:5000/api/login', {
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
                // Store JWT token and user data
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', JSON.stringify(data.user));
                
                // Success message
                alert(`Login successful! Welcome back ${data.user.name}!`);
                
                // Navigate to dashboard (no admin access from student login)
                navigate('/dashboard');
            } else {
                // Handle login error
                setError(data.msg || 'Login failed. Please check your credentials.');
            }
        } catch (error) {
            console.error('Login error:', error);
            setError('Connection error. Please make sure the backend server is running.');
        } finally {
            setLoading(false);
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
                <div className="w-full max-w-md bg-white/10 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl border border-white/20 relative">
                    {/* Decorative elements */}
                    <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"></div>
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-xl"></div>
                    
                    {/* Header */}
                    <div className="text-center mb-8 relative z-10">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-4 shadow-lg">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                            </svg>
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-3 tracking-tight">
                            Welcome <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Back</span>
                        </h2>
                        <p className="text-gray-200 text-lg font-medium">
                            Sign in to access your internship dashboard
                        </p>
                    </div>

                    {/* Quick Access Links */}
                    <div className="mb-6 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/20 rounded-2xl text-sm relative z-10 backdrop-blur-sm">
                        <p className="text-blue-300 font-semibold mb-3 flex items-center justify-center">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Quick Access
                        </p>
                        <div className="flex justify-center gap-4">
                            <Link 
                                to="/admin-login"
                                className="bg-purple-500/20 hover:bg-purple-500/30 px-4 py-2 rounded-xl backdrop-blur-sm border border-purple-400/30 transition-all duration-300 text-purple-200 hover:text-purple-100 text-xs font-medium flex items-center"
                            >
                                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                Admin Portal
                            </Link>
                            <Link 
                                to="/register"
                                className="bg-blue-500/20 hover:bg-blue-500/30 px-4 py-2 rounded-xl backdrop-blur-sm border border-blue-400/30 transition-all duration-300 text-blue-200 hover:text-blue-100 text-xs font-medium flex items-center"
                            >
                                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                </svg>
                                New Account
                            </Link>
                        </div>
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
                                <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                required
                                className="w-full px-4 py-4 rounded-xl border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all duration-300 group-hover:border-white/30"
                            />
                        </div>
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
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                required
                                className="w-full px-4 py-4 rounded-xl border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all duration-300 group-hover:border-white/30"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-4 font-bold text-white rounded-xl shadow-lg transition-all duration-300 transform ${
                                loading 
                                ? 'bg-gray-600/50 cursor-not-allowed scale-95' 
                                : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 hover:shadow-2xl hover:scale-[1.02] active:scale-95'
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
                                        Logging in...
                                    </>
                                ) : (
                                    <>
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                        </svg>
                                        Log In
                                    </>
                                )}
                            </span>
                        </button>
                    </form>
                    
                    <div className="mt-8 text-center relative z-10">
                        <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                            <span className="text-gray-200 text-sm">Don't have an account?</span>
                            <Link 
                                to="/register" 
                                className="ml-2 font-bold text-blue-400 hover:text-blue-300 transition-colors duration-200 underline decoration-blue-400/50 hover:decoration-blue-300 underline-offset-4"
                            >
                                Sign up here
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Login;