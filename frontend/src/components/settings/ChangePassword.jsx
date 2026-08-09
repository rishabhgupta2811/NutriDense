import { useState } from "react";
import PasswordInput from "../auth/PasswordInput";
import SettingsCard from "./SettingsCard";
import toast from "react-hot-toast";

function ChangePassword() {
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setPasswords((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (passwords.newPassword !== passwords.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    toast.success("Password updated successfully!");

    setPasswords({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  return (
    <SettingsCard
      title="Change Password"
      description="Update your account password."
    >
      <form onSubmit={handleSubmit} className="space-y-5">

        <PasswordInput
          name="currentPassword"
          placeholder="Current Password"
          value={passwords.currentPassword}
          onChange={handleChange}
        />

        <PasswordInput
          name="newPassword"
          placeholder="New Password"
          value={passwords.newPassword}
          onChange={handleChange}
        />

        <PasswordInput
          name="confirmPassword"
          placeholder="Confirm New Password"
          value={passwords.confirmPassword}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl"
        >
          Update Password
        </button>

      </form>
    </SettingsCard>
  );
}

export default ChangePassword;