import React from 'react';

const DomainCard = ({ title, description }) => (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 transition-transform duration-300 hover:scale-105">
        <h3 className="text-xl font-semibold text-indigo-600 mb-2">
            {title}
        </h3>
        <p className="text-gray-600">
            {description}
        </p>
    </div>
);

export default DomainCard;