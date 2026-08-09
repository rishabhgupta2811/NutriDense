import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMail, FiPhone, FiUser } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

import AuthLayout from "../components/auth/AuthLayout";
import PasswordInput from "../components/auth/PasswordInput";

function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!formData.agree) {
      alert("Please accept the Terms & Conditions.");
      return;
    }

    console.log(formData);

    // Backend registration will be added later.
  };

  return (
    <AuthLayout
      title="Create Your Account"
      subtitle="Join NutriDense and start your healthy lifestyle."
      footerText="Already have an account?"
      footerLinkText="Login"
      footerLink="/login"
    >
      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Full Name */}

        <div className="relative">
          <FiUser
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full pl-12 py-4 border rounded-2xl focus:ring-2 focus:ring-green-700 outline-none"
          />
        </div>

        {/* Email */}

        <div className="relative">
          <FiMail
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full pl-12 py-4 border rounded-2xl focus:ring-2 focus:ring-green-700 outline-none"
          />
        </div>

        {/* Phone */}

        <div className="relative">
          <FiPhone
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full pl-12 py-4 border rounded-2xl focus:ring-2 focus:ring-green-700 outline-none"
          />
        </div>

        {/* Password */}

        <PasswordInput
          value={formData.password}
          onChange={handleChange}
          name="password"
          placeholder="Create Password"
        />

        {/* Confirm Password */}

        <PasswordInput
          value={formData.confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
          placeholder="Confirm Password"
        />

        {/* Terms */}

        <label className="flex items-start gap-3 text-gray-600">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            className="mt-1"
          />

          <span>
            I agree to the{" "}
            <Link
              to="/terms"
              className="text-green-700 font-semibold hover:underline"
            >
              Terms & Conditions
            </Link>{" "}
            and{" "}
            <Link
              to="/privacy"
              className="text-green-700 font-semibold hover:underline"
            >
              Privacy Policy
            </Link>.
          </span>
        </label>

        {/* Register */}

        <button
          type="submit"
          className="w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-2xl font-semibold transition"
        >
          Create Account
        </button>

        {/* Divider */}

        <div className="flex items-center">
          <div className="flex-1 border-t"></div>

          <span className="px-4 text-gray-500">
            OR
          </span>

          <div className="flex-1 border-t"></div>
        </div>

        {/* Google */}

        <button
          type="button"
          className="w-full border py-4 rounded-2xl flex items-center justify-center gap-3 hover:bg-gray-50 transition"
        >
          <FcGoogle size={24} />
          Continue with Google
        </button>

      </form>
    </AuthLayout>
  );
}

export default Signup;