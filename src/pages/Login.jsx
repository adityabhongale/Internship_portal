import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 font-sans text-gray-800 antialiased p-4">
        <div className="w-full max-w-xl bg-white/40 backdrop-blur-lg p-16 rounded-2xl shadow-2xl border border-white/30 text-center">
            <h2 className="text-3xl font-extrabold text-blue-700 mb-2 tracking-tight drop-shadow-sm">
                Welcome Back
            </h2>
            <p className="text-gray-700 mb-8 font-medium">
                Please enter your credentials to log in.
            </p>
            <form className="space-y-6">
                <div>
                    <label htmlFor="email" className="block text-left font-semibold text-gray-700 mb-2">
                        Email address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
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
                        placeholder="••••••••"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-200 outline-none bg-white/70"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-3 font-bold text-white bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl shadow-lg transition-all duration-200 hover:from-blue-700 hover:to-blue-500 hover:shadow-xl"
                >
                    <Link to="/dashboard" className="block w-full h-full">Log In</Link>
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

export default Login;