import React from 'react';

const GlobalStyles = () => (
    <style>
        {`
        .text-primary { color: #4338ca; }
        .bg-primary { background-color: #4338ca; }
        .hover\\:bg-primary:hover { background-color: #4338ca; }

        .text-primaryLight { color: #6366f1; }
        .bg-primaryLight { background-color: #6366f1; }
        .hover\\:bg-primaryLight:hover { background-color: #6366f1; }

        .text-text-dark { color: #1f2937; }
        .bg-light-gray { background-color: #f9fafb; }

        .login-container {
            background-color: rgba(255, 255, 255, 0.9);
        }
        .register-container {
            background-color: white;
        }

        @keyframes fadeInText {
            to { opacity: 1; }
        }

        .fade-in-text {
            opacity: 0;
            animation: fadeInText 1s ease-out forwards;
        }
        `}
    </style>
);

export default GlobalStyles;