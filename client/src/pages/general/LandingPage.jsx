import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to Early Learners Hub</h1>
        <p className="mt-4 text-gray-700">
          Your one-stop solution for engaging content for young learners!
        </p>
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-500">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
