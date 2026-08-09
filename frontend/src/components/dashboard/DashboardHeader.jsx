function DashboardHeader() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 flex justify-between items-center">

      <div>
        <h1 className="text-3xl font-bold">
          My Dashboard
        </h1>

        <p className="text-gray-500 mt-1">
          Manage your account, orders and wishlist.
        </p>
      </div>

      <div className="hidden md:flex items-center gap-4">

        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
          Premium Member
        </span>

      </div>

    </div>
  );
}

export default DashboardHeader;