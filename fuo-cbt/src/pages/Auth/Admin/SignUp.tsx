// import React from 'react'
import React, { useState } from "react";
import { assets } from "../../../assets/images";
import { Mail, Phone, User, Lock } from "lucide-react";
import Input from "../../../components/UI/Input";
import CustomSelect, { type OptionType } from "../../../components/UI/Select";
import { Button } from "../../../components/UI/Button";
import type { AdminSignupData } from "../../../types/Auth";
import { AuthServises } from "../../../services/AuthApi";
import { SimpleSpinner } from "../../../components/Loader/Loader";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const genderOptions: OptionType[] = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

const SignUp = (): React.JSX.Element => {
  const navigate = useNavigate()
  const [selectedGender, setSelectedGender] = useState<OptionType | null>(null);
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [passwordMessage, setPasswordMessage] = useState<string>("");
  const [cPasswordMessage, setCPasswordMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!password) {
      return setPasswordMessage("Password field is required");
    }
    if (password !== confirmPassword) {
      return setCPasswordMessage(
        "Password and Confirm password must be the same"
      );
    }

    const formData: AdminSignupData = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      gender: selectedGender!.value,
      phoneNumber: phoneNumber,
    };

    console.log(formData);
    setLoading(true);

    try {
      const res = await AuthServises.AdminSignup(formData);
      if (res.status === 201) {
        toast.success("Admin Created Successfully");
        navigate("/adminlogin")
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
      <div className="hidden lg:flex lg:w-1/2 h-[800px]">
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
            {/* First Name and Last Name Row */}
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <label
                  htmlFor="firstname"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Firstname
                </label>
                <div className="flex items-center border border-gray-400 rounded-lg">
                  <div className="bg-gray-50 py-3 px-3 rounded-l-lg">
                    <User className="text-gray-400 w-5 h-5" />
                  </div>
                  <Input
                    type="text"
                    className="flex-1 border-none py-1 outline-none"
                    placeholder="Enter firstname"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex-1">
                <label
                  htmlFor="lastname"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Lastname
                </label>
                <div className="flex items-center border border-gray-400 rounded-lg">
                  <div className="bg-gray-50 py-3 px-3 rounded-l-lg">
                    <User className="text-gray-400 w-5 h-5" />
                  </div>
                  <Input
                    name="lastname"
                    type="text"
                    className="flex-1 border-none py-1 outline-none"
                    placeholder="Enter lastname"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </div>
              </div>
            </div>

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

            {/* Phone Number and Gender Row */}
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone number
                </label>
                <div className="flex items-center border border-gray-400 rounded-lg">
                  <div className="bg-gray-50 py-3 px-3 rounded-l-lg">
                    <Phone className="text-gray-400 w-5 h-5" />
                  </div>
                  <Input
                    name="phoneNumber"
                    type="text"
                    className="flex-1 border-none py-1 outline-none"
                    placeholder="Enter phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex-1">
                <label
                  htmlFor="gender"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Gender
                </label>
                <CustomSelect
                  className="w-full border border-gray-400 rounded-lg"
                  options={genderOptions}
                  value={selectedGender}
                  onChange={setSelectedGender}
                  placeholder="Select gender"
                />
              </div>
            </div>

            {/* Password and Confirm Password Row */}
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
                <p className="text-red-600 text-sm">
                  {passwordMessage ? passwordMessage : ""}
                </p>
              </div>

              <div className="flex-1">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Confirm Password
                </label>
                <div className="flex items-center border border-gray-400 rounded-lg">
                  <div className="bg-gray-50 py-3 px-3 rounded-l-lg">
                    <Lock className="text-gray-400 w-5 h-5" />
                  </div>
                  <Input
                    name="confirmPassword"
                    type="password"
                    className="flex-1 border-none py-1 outline-none"
                    placeholder="Enter confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <p className="text-red-600 text-sm">
                  {cPasswordMessage ? cPasswordMessage : ""}
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <Button
                label={
                  loading ? (
                    <div className="flex items-center justify-center gap-2">
                      <SimpleSpinner color="text-green-700" />
                      <span>Signing up...</span>
                    </div>
                  ) : (
                    "Signup"
                  )
                }
                className={
                  loading
                    ? "w-full lg:w-80 bg-gray-300 py-3 px-6 text-white font-medium rounded-lg transition-colors cursor-not-allowed"
                    : "w-full lg:w-80 bg-green-700 hover:bg-green-800 py-2 px-6 text-white font-medium rounded-lg cursor-pointer transition-colors"
                }
                type="submit"
                disabled={loading}
              />
            </div>

            <div className="flex items-center justify-center gap-1">
              <p>Already have an account?</p>
              <Link
                to={"/adminlogin"}
                className="text-md font-medium text-green-700"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
