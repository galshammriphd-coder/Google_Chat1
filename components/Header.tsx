
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md p-4 text-center border-b-4 border-blue-500">
      <h1 className="text-2xl font-bold text-gray-800">
        Medical Prompt Engineering AI Guide
      </h1>
      <p className="text-sm text-gray-600 mt-1">
        Your AI-powered assistant for medical prompting questions.
      </p>
    </header>
  );
};

export default Header;
