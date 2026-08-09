import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { FiCheckCircle } from "react-icons/fi";

function OrderSuccess() {
  const orderId =
    "#" + Math.floor(100000 + Math.random() * 900000);

  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 5);

  return (
    <>
      <Navbar />

      <section className="bg-[#F8FAF5] min-h-screen flex items-center justify-center py-16">

        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl p-10 text-center">

          <FiCheckCircle className="text-green-600 text-8xl mx-auto mb-6" />

          <h1 className="text-4xl font-bold text-gray-900">
            Order Placed Successfully!
          </h1>

          <p className="text-gray-500 mt-4">
            Thank you for shopping with NutriDense.
          </p>

          <div className="bg-green-50 rounded-2xl p-6 mt-8 text-left space-y-4">

            <div className="flex justify-between">
              <span className="text-gray-600">
                Order ID
              </span>

              <span className="font-bold">
                {orderId}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">
                Estimated Delivery
              </span>

              <span className="font-semibold">
                {deliveryDate.toDateString()}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">
                Payment Status
              </span>

              <span className="text-green-700 font-semibold">
                Confirmed
              </span>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">

            <Link to="/" className="flex-1">
              <button className="w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-xl font-semibold transition">
                Continue Shopping
              </button>
            </Link>

            <Link to="/products" className="flex-1">
              <button className="w-full border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white py-4 rounded-xl font-semibold transition">
                Browse Products
              </button>
            </Link>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default OrderSuccess;