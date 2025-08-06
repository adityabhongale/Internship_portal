import React from 'react';

const OfferCard = ({ icon, title, description }) => (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl shadow-lg border border-gray-200 transition-transform duration-300 hover:scale-105">
        <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {title}
        </h3>
        <p className="text-gray-600">
            {description}
        </p>
    </div>
);

export default OfferCard;