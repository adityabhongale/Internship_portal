import React from 'react';

const DomainCard = ({ icon, title, description, className = '' }) => (
    <div className={`bg-white p-6 rounded-xl shadow-md border border-gray-200 transition-transform duration-300 hover:scale-105 flex flex-col items-center text-center ${className}`}>
        <div className="mb-3 flex items-center justify-center w-full">
            {icon ? icon : (
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="20" fill="#e0e7ff"/>
                  <path d="M12 28l16-8-16-8v16z" fill="#6366f1"/>
                </svg>
            )}
        </div>
        <h3 className="text-lg font-semibold text-indigo-600 mb-2">
            {title}
        </h3>
        <p className="text-gray-600 text-sm">
            {description}
        </p>
    </div>
);

export default DomainCard;