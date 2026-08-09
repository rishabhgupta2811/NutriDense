import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";
import PasswordInput from "../components/auth/PasswordInput";

function ResetPassword() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    alert("Password changed successfully!");

    navigate("/login");
  };

  return (
    <AuthLayout
      title="Reset Password"
      subtitle="Create a strong new password for your account."
      footerText="Back to"
      footerLinkText="Login"
      footerLink="/login"
    >
      <form onSubmit={handleSubmit} className="space-y-6">

        <PasswordInput
          value={formData.password}
          onChange={handleChange}
          name="password"
          placeholder="New Password"
        />

        <PasswordInput
          value={formData.confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
          placeholder="Confirm Password"
        />

        <button
          type="submit"
          className="w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-2xl font-semibold transition"
        >
          Reset Password
        </button>

      </form>
    </AuthLayout>
  );
}

export default ResetPassword;