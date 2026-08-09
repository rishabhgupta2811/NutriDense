import { useState } from "react";
import { Link } from "react-router-dom";
import { FiEye, FiEdit } from "react-icons/fi";

import OrderStatusBadge from "./OrderStatusBadge";
import UpdateOrderModal from "./UpdateOrderModal";

const initialOrders = [
  {
    id: "ND1001",
    customer: "Rahul Kumar",
    products: 3,
    amount: 2499,
    payment: "Paid",
    status: "Delivered",
    date: "24 Jul 2026",
  },
  {
    id: "ND1002",
    customer: "Anjali Singh",
    products: 1,
    amount: 799,
    payment: "Pending",
    status: "Pending",
    date: "23 Jul 2026",
  },
  {
    id: "ND1003",
    customer: "Amit Sharma",
    products: 5,
    amount: 5299,
    payment: "Paid",
    status: "Shipped",
    date: "22 Jul 2026",
  },
  {
    id: "ND1004",
    customer: "Priya Verma",
    products: 2,
    amount: 1499,
    payment: "Paid",
    status: "Processing",
    date: "21 Jul 2026",
  },
];

function OrderTable({ search, status }) {
  const [orders, setOrders] = useState(initialOrders);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleEdit = (order) => {
    setSelectedOrder(order);
    setShowModal(true);
  };

  const handleSave = (newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === selectedOrder.id
          ? { ...order, status: newStatus }
          : order
      )
    );

    setShowModal(false);
    setSelectedOrder(null);
  };

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(search.toLowerCase()) ||
      order.customer.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      status === "All" || order.status === status;

    return matchesSearch && matchesStatus;
  });

  return (
    <>
      <div className="overflow-x-auto bg-white rounded-2xl">
        <table className="w-full text-left">

          <thead className="border-b bg-gray-50">
            <tr className="text-gray-600">
              <th className="py-4 px-4">Order ID</th>
              <th className="px-4">Customer</th>
              <th className="px-4">Products</th>
              <th className="px-4">Amount</th>
              <th className="px-4">Payment</th>
              <th className="px-4">Status</th>
              <th className="px-4">Date</th>
              <th className="text-center px-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredOrders.map((order) => (
              <tr
                key={order.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="py-4 px-4 font-semibold">
                  {order.id}
                </td>

                <td className="px-4">
                  {order.customer}
                </td>

                <td className="px-4">
                  {order.products}
                </td>

                <td className="px-4">
                  ₹{order.amount}
                </td>

                <td className="px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      order.payment === "Paid"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {order.payment}
                  </span>
                </td>

                <td className="px-4">
                  <OrderStatusBadge status={order.status} />
                </td>

                <td className="px-4">
                  {order.date}
                </td>

                <td>
                  <div className="flex justify-center gap-4">

                    <Link
                      to={`/admin/orders/${order.id}`}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <FiEye size={18} />
                    </Link>

                    <button
                      onClick={() => handleEdit(order)}
                      className="text-green-600 hover:text-green-800"
                    >
                      <FiEdit size={18} />
                    </button>

                  </div>
                </td>
              </tr>
            ))}
          </tbody>

        </table>

        {filteredOrders.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No orders found.
          </div>
        )}
      </div>

      <UpdateOrderModal
        isOpen={showModal}
        currentStatus={selectedOrder?.status || "Pending"}
        onClose={() => {
          setShowModal(false);
          setSelectedOrder(null);
        }}
        onSave={handleSave}
      />
    </>
  );
}

export default OrderTable;