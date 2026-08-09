function StatCard({
  title,
  value,
  icon,
  color,
}) {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">
      <div
        className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center text-white text-2xl`}
      >
        {icon}
      </div>

      <h3 className="text-gray-500 mt-5">
        {title}
      </h3>

      <h2 className="text-3xl font-bold mt-2">
        {value}
      </h2>
    </div>
  );
}

export default StatCard;