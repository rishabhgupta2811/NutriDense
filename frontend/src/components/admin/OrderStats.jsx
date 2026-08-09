import {
  FiShoppingBag,
  FiClock,
  FiTruck,
  FiCheckCircle,
} from "react-icons/fi";

const stats = [
  {
    title: "Total Orders",
    value: "245",
    icon: <FiShoppingBag />,
    color: "bg-blue-500",
  },
  {
    title: "Pending",
    value: "18",
    icon: <FiClock />,
    color: "bg-yellow-500",
  },
  {
    title: "Shipped",
    value: "42",
    icon: <FiTruck />,
    color: "bg-purple-600",
  },
  {
    title: "Delivered",
    value: "185",
    icon: <FiCheckCircle />,
    color: "bg-green-600",
  },
];

function OrderStats() {
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

export default OrderStats;