import React from 'react';

const OfferCard = ({ icon, title, description, className = '', backgroundImage }) => (
    <div 
        className={`bg-white/70 p-6 rounded-2xl shadow-md border border-gray-200 transition-transform duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden ${className}`}
        style={backgroundImage ? {
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        } : {}}
    >
        <div className="relative z-10">
            <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full mb-4">
                {icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {title}
            </h3>
            <p className="text-gray-600 text-sm">
                {description}
            </p>
        </div>
    </div>
);

export default OfferCard;