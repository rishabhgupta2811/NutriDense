import {
  FiUsers,
  FiUserCheck,
  FiUserX,
  FiShoppingBag,
} from "react-icons/fi";

const stats = [
  {
    title: "Total Customers",
    value: "1,248",
    icon: <FiUsers />,
    color: "bg-blue-500",
  },
  {
    title: "Active",
    value: "1,176",
    icon: <FiUserCheck />,
    color: "bg-green-600",
  },
  {
    title: "Blocked",
    value: "72",
    icon: <FiUserX />,
    color: "bg-red-500",
  },
  {
    title: "Orders",
    value: "3,945",
    icon: <FiShoppingBag />,
    color: "bg-purple-600",
  },
];

function CustomerStats() {
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

export default CustomerStats;