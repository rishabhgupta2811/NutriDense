import { useContext, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FiHeart, FiSearch, FiShoppingCart, FiTrash2 } from "react-icons/fi";
import toast from "react-hot-toast";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import DashboardHeader from "../components/dashboard/DashboardHeader";

import { WishlistContext } from "../context/WishlistContext";
import { CartContext } from "../context/CartContext";

function Wishlist() {
  const { wishlistItems, toggleWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);

  const [search, setSearch] = useState("");

  const filteredWishlist = useMemo(() => {
    return wishlistItems.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [wishlistItems, search]);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart`);
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

                <div>
                  <h2 className="text-3xl font-bold">
                    My Wishlist
                  </h2>

                  <p className="text-gray-500 mt-2">
                    {filteredWishlist.length} Item(s) Saved
                  </p>
                </div>

                <div className="relative max-w-md w-full">

                  <FiSearch
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="text"
                    placeholder="Search wishlist..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full border rounded-xl pl-12 py-3 focus:ring-2 focus:ring-green-700 outline-none"
                  />

                </div>

              </div>

              {filteredWishlist.length === 0 ? (

                <div className="text-center py-20">

                  <FiHeart
                    className="mx-auto text-gray-300"
                    size={90}
                  />

                  <h3 className="text-2xl font-bold mt-6">
                    Your Wishlist is Empty
                  </h3>

                  <p className="text-gray-500 mt-3">
                    Save your favourite products here.
                  </p>

                  <Link
                    to="/products"
                    className="inline-block mt-8 bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-xl"
                  >
                    Browse Products
                  </Link>

                </div>

              ) : (

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

                  {filteredWishlist.map((product) => (

                    <div
                      key={product._id || product.id}
                      className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition"
                    >

                      <Link to={`/products/${product._id || product.id}`}>

                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-60 object-cover"
                        />

                      </Link>

                      <div className="p-5">

                        <h3 className="font-semibold text-lg">
                          {product.name}
                        </h3>

                        <p className="text-gray-500 text-sm mt-1">
                          {product.category}
                        </p>

                        <div className="flex justify-between items-center mt-4">

                          <span className="text-2xl font-bold text-green-700">
                            ₹{product.price}
                          </span>

                          <span className="bg-yellow-100 px-3 py-1 rounded-full text-sm">
                            ⭐ {product.rating}
                          </span>

                        </div>

                        <div className="grid grid-cols-2 gap-3 mt-6">

                          <button
                            onClick={() => handleAddToCart(product)}
                            className="bg-green-700 hover:bg-green-800 text-white py-3 rounded-xl flex items-center justify-center gap-2"
                          >
                            <FiShoppingCart />
                            Cart
                          </button>

                          <button
                            onClick={() => toggleWishlist(product)}
                            className="border hover:bg-red-50 text-red-600 py-3 rounded-xl flex items-center justify-center gap-2"
                          >
                            <FiTrash2 />
                            Remove
                          </button>

                        </div>

                      </div>

                    </div>

                  ))}

                </div>

              )}

            </div>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Wishlist;