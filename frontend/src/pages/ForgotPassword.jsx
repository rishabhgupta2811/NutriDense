import { useState } from "react";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email);

    // Backend API will be added later

    alert("Password reset link has been sent to your email.");
  };

  return (
    <AuthLayout
      title="Forgot Password?"
      subtitle="Enter your registered email address and we'll send you a password reset link."
      footerText="Remember your password?"
      footerLinkText="Login"
      footerLink="/login"
    >
      <form onSubmit={handleSubmit} className="space-y-6">

        <div className="relative">
          <FiMail
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />

          <input
            type="email"
            placeholder="Email Address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-12 py-4 border rounded-2xl focus:ring-2 focus:ring-green-700 outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-2xl font-semibold transition"
        >
          Send Reset Link
        </button>

        <div className="text-center">
          <Link
            to="/login"
            className="text-green-700 hover:underline font-medium"
          >
            ← Back to Login
          </Link>
        </div>

      </form>
    </AuthLayout>
  );
}

export default ForgotPassword;