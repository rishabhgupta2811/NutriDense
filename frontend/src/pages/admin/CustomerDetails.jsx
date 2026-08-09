import { Link, useParams } from "react-router-dom";
import {
  FiArrowLeft,
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiShoppingBag,
  FiDollarSign,
} from "react-icons/fi";

import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminHeader from "../../components/admin/AdminHeader";
import CustomerStatusBadge from "../../components/admin/CustomerStatusBadge";

function CustomerDetails() {
  const { id } = useParams();

  const customer = {
    id,
    name: "Rahul Kumar",
    email: "rahul@gmail.com",
    phone: "+91 9876543210",
    status: "Active",
    totalOrders: 12,
    totalSpent: 12450,
    address:
      "House 21, Gandhi Nagar, Patna, Bihar - 800001",

    orders: [
      {
        id: "ND1001",
        date: "24 Jul 2026",
        amount: 2499,
        status: "Delivered",
      },
      {
        id: "ND0998",
        date: "20 Jul 2026",
        amount: 1799,
        status: "Shipped",
      },
      {
        id: "ND0992",
        date: "15 Jul 2026",
        amount: 999,
        status: "Delivered",
      },
    ],
  };

  return (
    <section className="bg-gray-100 min-h-screen p-8">

      <div className="grid lg:grid-cols-5 gap-8">

        <div className="lg:col-span-1">
          <AdminSidebar />
        </div>

        <div className="lg:col-span-4 space-y-6">

          <AdminHeader />

          <Link
            to="/admin/customers"
            className="inline-flex items-center gap-2 text-green-600 font-semibold"
          >
            <FiArrowLeft />
            Back to Customers
          </Link>

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <div className="flex justify-between items-center">

              <div>

                <h2 className="text-3xl font-bold">
                  {customer.name}
                </h2>

                <p className="text-gray-500 mt-2">
                  Customer ID : {customer.id}
                </p>

              </div>

              <CustomerStatusBadge
                status={customer.status}
              />

            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-white rounded-3xl shadow-lg p-6">

              <h3 className="text-xl font-bold mb-5">
                Personal Information
              </h3>

              <div className="space-y-4">

                <p className="flex gap-3">
                  <FiUser />
                  {customer.name}
                </p>

                <p className="flex gap-3">
                  <FiMail />
                  {customer.email}
                </p>

                <p className="flex gap-3">
                  <FiPhone />
                  {customer.phone}
                </p>

                <p className="flex gap-3">
                  <FiMapPin />
                  {customer.address}
                </p>

              </div>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-6">

              <h3 className="text-xl font-bold mb-5">
                Customer Statistics
              </h3>

              <div className="space-y-5">

                <div className="flex justify-between">

                  <span className="flex gap-2 items-center">
                    <FiShoppingBag />
                    Total Orders
                  </span>

                  <strong>{customer.totalOrders}</strong>

                </div>

                <div className="flex justify-between">

                  <span className="flex gap-2 items-center">
                    <FiDollarSign />
                    Total Spent
                  </span>

                  <strong>₹{customer.totalSpent}</strong>

                </div>

              </div>

            </div>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <h3 className="text-2xl font-bold mb-6">
              Recent Orders
            </h3>

            <table className="w-full">

              <thead className="border-b">

                <tr>

                  <th className="text-left py-3">
                    Order ID
                  </th>

                  <th>Date</th>

                  <th>Amount</th>

                  <th>Status</th>

                </tr>

              </thead>

              <tbody>

                {customer.orders.map((order) => (

                  <tr
                    key={order.id}
                    className="border-b"
                  >

                    <td className="py-4">
                      {order.id}
                    </td>

                    <td>{order.date}</td>

                    <td>₹{order.amount}</td>

                    <td>{order.status}</td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CustomerDetails;