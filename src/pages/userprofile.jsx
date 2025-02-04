import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../config/axiosinstance';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  const userfetch = async () => {
    try {
      const response = await axiosInstance.get('/users/profile', {
      });
      console.log("fetch user data sucessfylly:", response.data);
      setUser(response.data);
    } catch (error) {
      console.error("Faild to fetch user data:", error.response?.data);
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
          {user ? `Welcome, ${user.name}` : "Loading..."}</p>
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

