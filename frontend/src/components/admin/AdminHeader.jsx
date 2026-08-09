import {
  FiBell,
  FiSearch,
  FiUser,
} from "react-icons/fi";

function AdminHeader() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col md:flex-row items-center justify-between gap-5">

      {/* Left */}

      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Admin Dashboard
        </h1>

        <p className="text-gray-500 mt-1">
          Welcome back! Manage your NutriDense store efficiently.
        </p>
      </div>

      {/* Right */}

      <div className="flex items-center gap-5">

        {/* Search */}

        <div className="relative hidden md:block">

          <FiSearch
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search..."
            className="border rounded-xl py-2.5 pl-11 pr-4 w-64 focus:ring-2 focus:ring-green-600 outline-none"
          />

        </div>

        {/* Notification */}

        <button className="relative p-2 rounded-xl hover:bg-gray-100 transition">

          <FiBell size={22} />

          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-600 text-white rounded-full text-xs flex items-center justify-center">
            3
          </span>

        </button>

        {/* Admin Profile */}

        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-full bg-green-700 flex items-center justify-center text-white">

            <FiUser size={20} />

          </div>

          <div className="hidden md:block">

            <h3 className="font-semibold text-gray-800">
              Admin
            </h3>

            <p className="text-sm text-gray-500">
              Super Admin
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AdminHeader;