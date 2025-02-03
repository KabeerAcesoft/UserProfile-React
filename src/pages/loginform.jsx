import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { axiosInstance } from '../config/axiosinstance';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            navigate('/userprofile');
        }
    }, [navigate]);

    const onSubmit = async (data) => {
        try {
            const response = await axiosInstance.post('/users/login', {
                email: data.email,
                password: data.password
            });
            console.log("Login successful:", response.data);
            localStorage.setItem('authToken', response.data.token);
            navigate('/userprofile');
        } catch (error) {
            console.error("Login failed:", error.response?.data);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <form className="flex flex-col space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="text-2xl font-semibold text-center text-blue-600">Login Form</h2>

                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                        <input
                            id="email"
                            {...register("email", { required: "This field is required" })}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            {...register("password", { required: "This field is required" })}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.password && <span className="text-red-500 text-xs">{errors.password.message}</span>}
                    </div>

                    <button 
                        type="submit" 
                        className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
