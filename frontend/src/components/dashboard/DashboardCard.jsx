function DashboardCard({ title, value, icon, color }) {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl transition">

      <div
        className={`w-14 h-14 rounded-full ${color} flex items-center justify-center text-white text-2xl`}
      >
        {icon}
      </div>

      <h3 className="mt-5 text-gray-500">
        {title}
      </h3>

      <h2 className="text-3xl font-bold mt-2">
        {value}
      </h2>

    </div>
  );
}

export default DashboardCard;