import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('Login attempt with email:', email, 'password:', password);
        
        // Admin credentials check (exact match)
        if (email.trim() === 'admin@internship.com' && password.trim() === 'admin123') {
            console.log('Admin login detected, redirecting to /admin');
            alert('Admin login successful! Redirecting to admin dashboard...');
            navigate('/admin');
        } 
        // Test user credentials
        else if (email.trim() === 'user@internship.com' && password.trim() === 'user123') {
            console.log('Test user login detected, redirecting to /dashboard');
            alert('User login successful! Redirecting to user dashboard...');
            navigate('/dashboard');
        }
        // Any other credentials (for demo purposes)
        else {
            console.log('Regular user login, redirecting to /dashboard');
            alert('User login successful! Redirecting to user dashboard...');
            navigate('/dashboard');
        }
    };

    return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 font-sans text-gray-800 antialiased p-4">
        <div className="w-full max-w-xl bg-white/40 backdrop-blur-lg p-16 rounded-2xl shadow-2xl border border-white/30 text-center">
            <h2 className="text-3xl font-extrabold text-blue-700 mb-2 tracking-tight drop-shadow-sm">
                Welcome Back
            </h2>
            <p className="text-gray-700 mb-8 font-medium">
                Please enter your credentials to log in.
            </p>
            
            {/* Login credentials hint */}
            <div className="mb-4 p-4 bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg text-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Admin Credentials */}
                    <div className="bg-blue-100 p-3 rounded">
                        <p className="text-blue-700 font-semibold mb-1">🔑 Admin Login:</p>
                        <p className="text-blue-600">Email: <strong>admin@internship.com</strong></p>
                        <p className="text-blue-600">Password: <strong>admin123</strong></p>
                    </div>
                    
                    {/* User Credentials */}
                    <div className="bg-green-100 p-3 rounded">
                        <p className="text-green-700 font-semibold mb-1">👤 User Login:</p>
                        <p className="text-green-600">Email: <strong>user@internship.com</strong></p>
                        <p className="text-green-600">Password: <strong>user123</strong></p>
                    </div>
                </div>
                <p className="text-gray-600 text-xs mt-2 text-center">
                    💡 You can also use any other email/password for user access
                </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="email" className="block text-left font-semibold text-gray-700 mb-2">
                        Email address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-200 outline-none bg-white/70"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-left font-semibold text-gray-700 mb-2">
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
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-200 outline-none bg-white/70"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-3 font-bold text-white bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl shadow-lg transition-all duration-200 hover:from-blue-700 hover:to-blue-500 hover:shadow-xl"
                >
                    Log In
                </button>
            </form>
            <div className="mt-6 text-sm text-gray-500">
                Don't have an account?{' '}
                <Link to="/register" className="font-bold text-blue-700 hover:underline">
                    Sign up here
                </Link>
            </div>
        </div>
    </div>
    );
};

export default Login;