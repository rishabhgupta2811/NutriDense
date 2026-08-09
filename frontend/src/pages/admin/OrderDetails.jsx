import { Link, useParams } from "react-router-dom";
import {
  FiArrowLeft,
  FiUser,
  FiMapPin,
  FiCreditCard,
  FiTruck,
} from "react-icons/fi";

import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminHeader from "../../components/admin/AdminHeader";
import OrderStatusBadge from "../../components/admin/OrderStatusBadge";

function OrderDetails() {
  const { id } = useParams();

  const order = {
    id,
    customer: "Rahul Kumar",
    phone: "+91 9876543210",
    email: "rahul@gmail.com",

    address:
      "House 21, Gandhi Nagar, Patna, Bihar - 800001",

    payment: "Paid",

    amount: 2499,

    status: "Delivered",

    products: [
      {
        id: 1,
        name: "Organic Honey",
        quantity: 2,
        price: 599,
      },
      {
        id: 2,
        name: "Green Tea",
        quantity: 1,
        price: 1299,
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
            to="/admin/orders"
            className="inline-flex items-center gap-2 text-green-600 font-semibold"
          >
            <FiArrowLeft />
            Back to Orders
          </Link>

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <div className="flex justify-between items-center">

              <div>
                <h2 className="text-3xl font-bold">
                  Order #{order.id}
                </h2>

                <p className="text-gray-500 mt-2">
                  Total Amount: ₹{order.amount}
                </p>
              </div>

              <OrderStatusBadge status={order.status} />

            </div>

          </div>

          <div className="grid lg:grid-cols-2 gap-6">

            <div className="bg-white rounded-3xl shadow-lg p-6">

              <h3 className="text-xl font-bold flex items-center gap-2 mb-5">
                <FiUser />
                Customer Details
              </h3>

              <p><strong>Name:</strong> {order.customer}</p>

              <p><strong>Phone:</strong> {order.phone}</p>

              <p><strong>Email:</strong> {order.email}</p>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-6">

              <h3 className="text-xl font-bold flex items-center gap-2 mb-5">
                <FiMapPin />
                Shipping Address
              </h3>

              <p>{order.address}</p>

            </div>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <h3 className="text-xl font-bold mb-6">
              Ordered Products
            </h3>

            <table className="w-full">

              <thead className="border-b">

                <tr>

                  <th className="text-left py-3">
                    Product
                  </th>

                  <th>
                    Qty
                  </th>

                  <th>
                    Price
                  </th>

                </tr>

              </thead>

              <tbody>

                {order.products.map((product) => (

                  <tr key={product.id} className="border-b">

                    <td className="py-4">
                      {product.name}
                    </td>

                    <td className="text-center">
                      {product.quantity}
                    </td>

                    <td className="text-center">
                      ₹{product.price}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-white rounded-3xl shadow-lg p-6">

              <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
                <FiCreditCard />
                Payment
              </h3>

              <p>Status: {order.payment}</p>

              <p>Total Paid: ₹{order.amount}</p>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-6">

              <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
                <FiTruck />
                Delivery
              </h3>

              <p>Courier: Delhivery</p>

              <p>Tracking ID: ND45879632</p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default OrderDetails;