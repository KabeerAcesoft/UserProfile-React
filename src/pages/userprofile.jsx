import React from 'react';

const UserProfile = () => {
  return (
<div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-lg w-96">
      <p className="text-xl font-semibold text-gray-800">Welcome, admin@gmail.com</p>
      <button
        className="mt-4 px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        Logout
      </button>
    </div>
</div>

  );
};

export default UserProfile;

