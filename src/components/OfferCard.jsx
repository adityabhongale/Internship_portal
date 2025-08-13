import React from 'react';

const OfferCard = ({ icon, title, description, className = '' }) => (
    <div 
        className={`bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 p-4 sm:p-6 rounded-2xl shadow-lg border border-indigo-200 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-blue-200 hover:to-purple-200 ${className}`}
    >
        <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-indigo-200 text-indigo-700 rounded-full mb-3 sm:mb-4">
            {icon}
        </div>
        <h3 className="text-base sm:text-lg font-semibold text-indigo-800 mb-2">
            {title}
        </h3>
        <p className="text-gray-700 text-sm">
            {description}
        </p>
    </div>
);

export default OfferCard;