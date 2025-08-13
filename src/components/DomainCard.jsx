import React from 'react';

const DomainCard = ({ icon, title, description, className = '' }) => (
    <div className={`bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 p-4 sm:p-6 rounded-xl shadow-lg border border-indigo-200 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-blue-200 hover:to-purple-200 flex flex-col items-center text-center ${className}`}>
        <div className="mb-3 flex items-center justify-center w-full">
            {icon ? icon : (
                <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-10 sm:h-10">
                  <circle cx="20" cy="20" r="20" fill="#e0e7ff"/>
                  <path d="M12 28l16-8-16-8v16z" fill="#6366f1"/>
                </svg>
            )}
        </div>
        <h3 className="text-base sm:text-lg font-semibold text-indigo-700 mb-2">
            {title}
        </h3>
        <p className="text-gray-700 text-sm">
            {description}
        </p>
    </div>
);

export default DomainCard;