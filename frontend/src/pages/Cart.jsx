import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiTrash2 } from "react-icons/fi";

function Cart() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useContext(CartContext);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const delivery = 0;
  const discount = subtotal > 3000 ? 200 : 0;
  const total = subtotal + delivery - discount;

  return (
    <>
      <Navbar />

      <section className="bg-[#F8FAF5] min-h-screen py-12">

        <div className="max-w-7xl mx-auto px-5">

          {/* Heading */}

          <div className="mb-10">

            <p className="uppercase tracking-[4px] text-green-700 font-semibold">
              Your Shopping Bag
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
              Shopping Cart
            </h1>

            <p className="text-gray-500 mt-3">
              {cartItems.length} Item{cartItems.length !== 1 && "s"} in your cart
            </p>

          </div>

          {cartItems.length === 0 ? (

            <div className="bg-white rounded-3xl shadow-lg py-20 text-center">

              <FiShoppingCart className="mx-auto text-6xl text-green-600 mb-6" />

              <h2 className="text-3xl font-bold mb-3">
                Your Cart is Empty
              </h2>

              <p className="text-gray-500 mb-8">
                Looks like you haven't added anything yet.
              </p>

              <Link to="/products">
                <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-xl font-semibold transition">
                  Continue Shopping
                </button>
              </Link>

            </div>

          ) : (

            <div className="grid lg:grid-cols-3 gap-10">

              {/* Cart Items */}

              <div className="lg:col-span-2 space-y-6">

                {cartItems.map((item) => (

                  <div
                    key={item._id || item.id}
                    className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl transition"
                  >

                    <div className="flex flex-col md:flex-row items-center gap-6">

                      {/* Image */}

                      <div className="bg-green-50 rounded-2xl p-4">

                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-32 h-32 object-contain"
                        />

                      </div>

                      {/* Product Details */}

                      <div className="flex-1 text-center md:text-left">

                        <h2 className="text-2xl font-bold text-gray-900">
                          {item.name}
                        </h2>

                        <p className="text-green-700 font-semibold mt-2">
                          ₹{item.price}
                        </p>

                        <p className="text-gray-500 text-sm mt-2">
                          Premium Organic Product
                        </p>

                        <p className="mt-3 font-semibold">
                          Total : ₹{item.price * item.quantity}
                        </p>

                      </div>

                      {/* Quantity */}

                      <div className="flex flex-col items-center gap-5">

                        <div className="flex items-center bg-gray-100 rounded-xl overflow-hidden">

                          <button
                            onClick={() =>
                              decreaseQuantity(item._id || item.id)
                            }
                            className="px-4 py-2 hover:bg-green-700 hover:text-white transition"
                          >
                            −
                          </button>

                          <span className="px-5 font-bold">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() =>
                              increaseQuantity(item._id || item.id)
                            }
                            className="px-4 py-2 hover:bg-green-700 hover:text-white transition"
                          >
                            +
                          </button>

                        </div>

                        <button
                          onClick={() =>
                            removeFromCart(item._id || item.id)
                          }
                          className="flex items-center gap-2 text-red-500 hover:text-red-700 transition"
                        >
                          <FiTrash2 />
                          Remove
                        </button>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

              {/* Order Summary */}

              <div className="bg-white rounded-3xl shadow-lg p-8 h-fit sticky top-28">

                <h2 className="text-3xl font-bold mb-8">
                  Order Summary
                </h2>

                <div className="space-y-5">

                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      Subtotal
                    </span>

                    <span className="font-semibold">
                      ₹{subtotal}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      Delivery
                    </span>

                    <span className="text-green-700 font-semibold">
                      FREE
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      Discount
                    </span>

                    <span className="text-green-700">
                      - ₹{discount}
                    </span>
                  </div>

                  <hr />

                  <div className="flex justify-between text-2xl font-bold">

                    <span>Total</span>

                    <span className="text-green-700">
                      ₹{total}
                    </span>

                  </div>

                </div>

                <Link to="/checkout">

                  <button className="mt-8 w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-xl font-semibold text-lg transition">

                    Proceed to Checkout

                  </button>

                </Link>

                <Link to="/products">

                  <button className="mt-4 w-full border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white py-4 rounded-xl font-semibold transition">

                    Continue Shopping

                  </button>

                </Link>

              </div>

            </div>

          )}

        </div>

      </section>

      <Footer />

    </>
  );
}

export default Cart;