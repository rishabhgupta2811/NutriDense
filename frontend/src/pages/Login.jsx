import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMail } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

import AuthLayout from "../components/auth/AuthLayout";
import PasswordInput from "../components/auth/PasswordInput";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // Backend login will be added later
  };

  return (
    <AuthLayout
      title="Welcome Back 👋"
      subtitle="Login to continue shopping with NutriDense."
      footerText="Don't have an account?"
      footerLinkText="Sign Up"
      footerLink="/signup"
    >
      <form onSubmit={handleSubmit} className="space-y-6">

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
            className="w-full pl-12 py-4 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-700"
          />

        </div>

        {/* Password */}

        <PasswordInput
          value={formData.password}
          onChange={handleChange}
          name="password"
          placeholder="Password"
        />

        {/* Remember */}

        <div className="flex items-center justify-between">

          <label className="flex items-center gap-2 text-gray-600">

            <input
              type="checkbox"
              name="remember"
              checked={formData.remember}
              onChange={handleChange}
            />

            Remember Me

          </label>

          <Link
            to="/forgot-password"
            className="text-green-700 font-medium hover:underline"
          >
            Forgot Password?
          </Link>

        </div>

        {/* Login */}

        <button
          type="submit"
          className="w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-2xl font-semibold transition"
        >
          Login
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

export default Login;