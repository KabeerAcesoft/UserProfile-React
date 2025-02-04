import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../config/axiosinstance';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  const userfetch = async () => {
    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        navigate('/');
        return;
      }
      const response = await axiosInstance.get('/users/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        // The above code checks and secures user data by verifying the token from local storage. Commented for my future reference.
      });
      console.log("Fetched user data successfully:", response.data);
      setUser(response.data);
    } catch (error) {
      console.error("Failed to fetch user data:", error.response?.data);
      navigate('/');
    }
  };

  useEffect(() => {
    userfetch();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <p className="text-xl font-semibold text-gray-800">
          {user ? `Welcome, ${user.name}` : "Loading..."}
        </p>
        <p className="text-xl font-semibold text-gray-800">
          {user ? `Email: ${user.email}` : "Loading..."}
        </p>
        <p className="text-xl font-semibold text-gray-800">
          {user ? `Role: ${user.role}` : "Loading..."}
        </p>
        <button
          className="mt-4 px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          onClick={() => {
            localStorage.removeItem('authToken');
            navigate('/');
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
