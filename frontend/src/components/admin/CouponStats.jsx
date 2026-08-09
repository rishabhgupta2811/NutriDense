import {
  FiTag,
  FiCheckCircle,
  FiClock,
  FiPercent,
} from "react-icons/fi";

const stats = [
  {
    title: "Total Coupons",
    value: "24",
    icon: <FiTag />,
    color: "bg-blue-600",
  },
  {
    title: "Active",
    value: "18",
    icon: <FiCheckCircle />,
    color: "bg-green-600",
  },
  {
    title: "Expired",
    value: "6",
    icon: <FiClock />,
    color: "bg-red-500",
  },
  {
    title: "Avg Discount",
    value: "18%",
    icon: <FiPercent />,
    color: "bg-purple-600",
  },
];

function CouponStats() {
  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((item) => (
        <div
          key={item.title}
          className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl transition"
        >
          <div
            className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center text-white text-2xl`}
          >
            {item.icon}
          </div>

          <h4 className="text-gray-500 mt-5">
            {item.title}
          </h4>

          <h2 className="text-3xl font-bold mt-2">
            {item.value}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default CouponStats;