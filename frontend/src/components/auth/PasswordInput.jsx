import { useState } from "react";
import { FiEye, FiEyeOff, FiLock } from "react-icons/fi";

function PasswordInput({
  value,
  onChange,
  placeholder = "Enter Password",
  name = "password",
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">

      {/* Lock Icon */}

      <FiLock
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        size={20}
      />

      {/* Input */}

      <input
        type={showPassword ? "text" : "password"}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full pl-12 pr-12 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-600 transition"
      />

      {/* Eye Icon */}

      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-green-700"
      >
        {showPassword ? (
          <FiEyeOff size={20} />
        ) : (
          <FiEye size={20} />
        )}
      </button>

    </div>
  );
}

export default PasswordInput;