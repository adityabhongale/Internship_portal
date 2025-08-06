import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-300 to-blue-300 p-4">
        <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 text-center backdrop-blur-sm bg-opacity-90 login-container">
            <h2 className="text-3xl font-bold text-primary mb-2">
                Welcome Back
            </h2>
            <p className="text-gray-600 mb-8">
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
                        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300"
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
                        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-3 font-bold text-white bg-gradient-to-r from-primaryLight to-primary rounded-lg shadow-md transition-all duration-200 hover:shadow-xl hover:from-primary hover:to-primaryLight"
                >
                    <Link to="/dashboard">Log In</Link>
                </button>
            </form>
            <div className="mt-6 text-sm text-gray-500">
                Don't have an account?{' '}
                <Link to="/register" className="font-bold text-primary hover:underline">
                    Sign up here
                </Link>
            </div>
        </div>
    </div>
);

export default Login;