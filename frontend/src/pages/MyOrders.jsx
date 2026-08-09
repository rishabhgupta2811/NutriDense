import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import {
  FiSearch,
  FiEye,
  FiDownload,
  FiRefreshCw,
  FiTruck,
} from "react-icons/fi";

const orders = [
  {
    id: "ND1025",
    date: "15 July 2026",
    product: "Organic Honey",
    image: "/images/honey.png",
    amount: 599,
    status: "Delivered",
  },
  {
    id: "ND1026",
    date: "18 July 2026",
    product: "Protein Powder",
    image: "/images/protein.png",
    amount: 1999,
    status: "Shipped",
  },
  {
    id: "ND1027",
    date: "20 July 2026",
    product: "Green Tea",
    image: "/images/green-tea.png",
    amount: 399,
    status: "Processing",
  },
];

function MyOrders() {
  const [search, setSearch] = useState("");

  const filteredOrders = orders.filter(
    (order) =>
      order.id.toLowerCase().includes(search.toLowerCase()) ||
      order.product.toLowerCase().includes(search.toLowerCase())
  );

  const statusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-700";
      case "Shipped":
        return "bg-blue-100 text-blue-700";
      case "Processing":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <>
      <Navbar />

      <section className="bg-gray-100 min-h-screen py-10">
        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-4 gap-8">

          <DashboardSidebar />

          <div className="lg:col-span-3 space-y-8">

            <DashboardHeader />

            <div className="bg-white rounded-3xl shadow-lg p-6">

              <div className="flex flex-col md:flex-row justify-between gap-5 mb-8">

                <h2 className="text-3xl font-bold">
                  My Orders
                </h2>

                <div className="relative max-w-md w-full">

                  <FiSearch
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="text"
                    placeholder="Search Order ID or Product..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full border rounded-xl pl-12 py-3 focus:ring-2 focus:ring-green-700 outline-none"
                  />

                </div>

              </div>

              <div className="space-y-6">

                {filteredOrders.map((order) => (

                  <div
                    key={order.id}
                    className="border rounded-2xl p-5 hover:shadow-lg transition"
                  >

                    <div className="flex flex-col lg:flex-row justify-between gap-6">

                      <div className="flex gap-5">

                        <img
                          src={order.image}
                          alt={order.product}
                          className="w-28 h-28 object-cover rounded-xl border"
                        />

                        <div>

                          <h3 className="text-xl font-semibold">
                            {order.product}
                          </h3>

                          <p className="text-gray-500 mt-2">
                            Order ID : #{order.id}
                          </p>

                          <p className="text-gray-500">
                            Ordered : {order.date}
                          </p>

                          <p className="text-2xl font-bold text-green-700 mt-3">
                            ₹{order.amount}
                          </p>

                          <span
                            className={`inline-block mt-3 px-4 py-1 rounded-full text-sm font-semibold ${statusColor(order.status)}`}
                          >
                            {order.status}
                          </span>

                        </div>

                      </div>

                      <div className="grid grid-cols-2 gap-3 lg:w-72">

                        <button className="flex items-center justify-center gap-2 border rounded-xl py-3 hover:bg-gray-100">
                          <FiEye />
                          Details
                        </button>

                        <button className="flex items-center justify-center gap-2 border rounded-xl py-3 hover:bg-gray-100">
                          <FiTruck />
                          Track
                        </button>

                        <button className="flex items-center justify-center gap-2 border rounded-xl py-3 hover:bg-gray-100">
                          <FiDownload />
                          Invoice
                        </button>

                        <button className="bg-green-700 hover:bg-green-800 text-white rounded-xl py-3 flex items-center justify-center gap-2">
                          <FiRefreshCw />
                          Reorder
                        </button>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default MyOrders;