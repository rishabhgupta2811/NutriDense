import {
  FiDollarSign,
  FiShoppingCart,
  FiUsers,
  FiTrendingUp,
} from "react-icons/fi";

const stats = [
  {
    title: "Total Revenue",
    value: "₹8,45,250",
    change: "+18.5%",
    color: "bg-green-600",
    icon: <FiDollarSign />,
  },
  {
    title: "Total Orders",
    value: "2,548",
    change: "+12.3%",
    color: "bg-blue-600",
    icon: <FiShoppingCart />,
  },
  {
    title: "Customers",
    value: "1,248",
    change: "+8.7%",
    color: "bg-purple-600",
    icon: <FiUsers />,
  },
  {
    title: "Growth",
    value: "22.4%",
    change: "+4.1%",
    color: "bg-orange-500",
    icon: <FiTrendingUp />,
  },
];

function AnalyticsStats() {
  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">

      {stats.map((item) => (

        <div
          key={item.title}
          className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl transition"
        >

          <div
            className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center text-white text-2xl`}
          >
            {item.icon}
          </div>

          <h4 className="text-gray-500 mt-5">
            {item.title}
          </h4>

          <h2 className="text-3xl font-bold mt-2">
            {item.value}
          </h2>

          <p className="text-green-600 font-semibold mt-2">
            {item.change} this month
          </p>

        </div>

      ))}

    </div>
  );
}

export default AnalyticsStats;