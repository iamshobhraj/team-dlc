"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";


    export default function LoginPage() {
        const router = useRouter();
        const [user, setuser] = React.useState({
            email: "",
            password: "",
        });

        const [buttonDisabled, setButtonDisabled] = React.useState(false);
        const [loading, setLoading] = React.useState(false);

        const onLogin = async () => {
           try {
                setLoading(true);
                const response = await axios.post("/api/users/login", user);
                console.log("Login success", response.data);
                toast.success("Login success");
                router.push("/profile");

           } catch (error:any) {
                console.log("Login failed", error.message);
                toast.error(error.message);
           }finally {
                setLoading(false);
           }
        }

        useEffect(() => {
                if(user.email.length > 0 && user.password.length > 0) {
                    setButtonDisabled(false);
                } else {
                    setButtonDisabled(true);
                }
        }, [user]); 

        return (
            <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-white">
                {/* Login */}
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-center p-1 text-4xl font-bold text-gray-800"
                >
                    Login
                </motion.h1>
                <hr />

                {/* Email */}
                <label htmlFor="email" className="mt-2 text-lg text-gray-800">
                    Email
                </label>
                <input
                    className="p-2 border-2 border-gray-500 rounded-md focus:outline-none focus:border-blue-500"
                    id="email"
                    type="email"
                    value={user.email}
                    onChange={(e) => setuser({ ...user, email: e.target.value })}
                    placeholder="Email"
                    required
                />

                {/* Password */}
                <label htmlFor="password" className="mt-4 text-lg text-gray-800">
                    Password
                </label>
                <input
                    className="p-2 border-2 border-gray-500 rounded-md focus:outline-none focus:border-blue-500"
                    id="password"
                    type="password"
                    value={user.password}
                    onChange={(e) => setuser({ ...user, password: e.target.value })}
                    placeholder="Password"
                    required
                />

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 mt-2 text-white bg-blue-500 rounded-md"
                    onClick={onLogin}
                >
                    Login
                </motion.button>
            
      <p className="p-2 m-2 border-2 border-gray-500 rounded-md focus:outline-none focus:border-blue-500">
      {buttonDisabled ? "Fill the 'Email' and  'Pasword' section associated with your account." : "Login can be done."}</p>
                <p className="mt-1 text-black">
                    New User?{" "}
                    <Link href="/signup" className="p-1 text-white bg-blue-500 rounded-md">
                        Sign Up
                    </Link>
                </p>
            </div>
        );
    }
  