// import React from 'react'
import React, { useState } from "react";
import { assets } from "../../../assets/images";
import { Mail, Lock } from "lucide-react";
import Input from "../../../components/UI/Input";
import { Button } from "../../../components/UI/Button";
import type { AdminLoginData } from "../../../types/Auth";
import { AuthServises } from "../../../services/AuthApi";
import { SimpleSpinner } from "../../../components/Loader/Loader";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
const AdminLogin = (): React.JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!password.trim()) {
      return toast.error("Password field is required");
    }

    const formData: AdminLoginData = {
      email: email,
      password: password,
    };

    console.log(formData);
    setLoading(true);

    try {
      const res = await AuthServises.AdminLogin(formData);
      console.log(res);
      if (res.status === 200) {
        toast.success("Admin Created Successfully");
      }
    } catch (error: any) {
      toast.error(error.message);
      throw new Error("Failed to Create Admin");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen lg:flex justify-between font-poppins">
      <div className="hidden lg:flex lg:w-3/4 h-screen">
        <img src={assets.admin} alt="" className="object-cover w-full h-full" />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col">
        <div className="flex-1 px-4 lg:px-8 py-6">
          <div className="flex justify-end mb-4">
            <img
              src={assets.logo}
              alt=""
              className="object-cover h-32 lg:h-32"
            />
          </div>
          <h2 className="text-center text-2xl lg:text-4xl font-semibold font-lato mb-8">
            Admin Signup
          </h2>

          <form
            className="space-y-6 max-w-2xl mx-auto mb-10 lg:mb-0"
            onSubmit={handleSignup}
          >
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <div className="flex items-center border border-gray-400 rounded-lg">
                <div className="bg-gray-50 py-3 px-3 rounded-l-lg">
                  <Mail className="text-gray-400 w-5 h-5" />
                </div>
                <Input
                  type="email"
                  className="flex-1 border-none py-1 outline-none"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Password */}
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Password
                </label>
                <div className="flex items-center border border-gray-400 rounded-lg">
                  <div className="bg-gray-50 py-3 px-3 rounded-l-lg">
                    <Lock className="text-gray-400 w-5 h-5" />
                  </div>
                  <Input
                    type="password"
                    className="flex-1 border-none py-1 outline-none"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Check and forgot password */}
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="flex items-center gap-1">
                <input type="checkbox" className="w-[15px] h-[15px]" />
                <p className="text-sm font-medium">Remember me</p>
              </div>

              <div className="flex items-center">
                <p>Forgot Password?</p>
                <Link to={"/"} className="text-md font-medium text-green-700">
                  Reset
                </Link>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <Button
                label={
                  loading ? (
                    <div className="flex items-center justify-center gap-2">
                      <SimpleSpinner color="text-green-700" />
                      {/* <span>Signing up...</span> */}
                    </div>
                  ) : (
                    "Login"
                  )
                }
                className={
                  loading
                    ? "w-full  bg-gray-300 py-3 px-6 text-white font-medium rounded-lg transition-colors cursor-not-allowed"
                    : "w-full  bg-green-700 hover:bg-green-800 py-2 px-6 text-white font-medium rounded-lg cursor-pointer transition-colors"
                }
                type="submit"
                disabled={loading}
              />
            </div>

            <div className="flex items-center">
                <p>Dont have an account?</p>
                <Link to={"/adminsignup"} className="text-md font-medium text-green-700">
                  Enroll here
                </Link>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
