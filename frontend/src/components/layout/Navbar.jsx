import { Link } from "react-router-dom";
import { useContext, useState } from "react";

import {
  FiSearch,
  FiHeart,
  FiShoppingCart,
  FiMenu,
  FiX,
} from "react-icons/fi";

import { CartContext } from "../../context/CartContext";
import { WishlistContext } from "../../context/WishlistContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { cartItems } = useContext(CartContext);
  const { wishlistItems } = useContext(WishlistContext);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">

      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-3">

        {/* Logo */}
        <Link to="/" className="flex flex-col items-start leading-none">

  <div className="text-2xl lg:text-3xl font-extrabold">
    <span className="text-green-700">Nutri</span>
    <span className="text-black">Dense</span>
  </div>

  <div className="w-full flex items-center mt-1">

    <div className="flex-1 h-px bg-gray-300"></div>

    <span className="px-2 text-[10px] uppercase tracking-[5px] text-green-500 font-bold">
      NATURALS
    </span>

    <div className="flex-1 h-px bg-gray-300"></div>

  </div>

</Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 lg:gap-10 font-medium text-gray-700">

          <li>
            <Link to="/" className="hover:text-green-700 transition">
              Home
            </Link>
          </li>

          <li>
            <Link to="/products" className="hover:text-green-700 transition">
              Products
            </Link>
          </li>

          <li>
            <a href="#categories" className="hover:text-green-700 transition">
              Categories
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-green-700 transition">
              About
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-green-700 transition">
              Contact
            </a>
          </li>

        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Search */}
          <button className="hidden md:block">
            <FiSearch
              size={22}
              className="cursor-pointer hover:text-green-700 transition"
            />
          </button>

          {/* Wishlist */}
          <Link to="/wishlist" className="relative">

            <FiHeart
              size={22}
              className="hover:text-red-500 transition"
            />

            {wishlistItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                {wishlistItems.length}
              </span>
            )}

          </Link>

          {/* Cart */}
          <Link to="/cart" className="relative">

            <FiShoppingCart
              size={22}
              className="hover:text-green-700 transition"
            />

            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-700 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}

          </Link>

          {/* Desktop Button */}
          <Link
            to="/products"
            className="hidden md:inline-block bg-green-700 text-white px-5 py-2 rounded-xl hover:bg-green-800 transition"
          >
            Shop Now
          </Link>

          {/* Mobile Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
          >
            {menuOpen ? (
              <FiX size={28} />
            ) : (
              <FiMenu size={28} />
            )}
          </button>

        </div>

      </nav>

      {/* Mobile Menu */}

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >

        <div className="bg-white border-t">

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 hover:bg-green-50"
          >
            Home
          </Link>

          <Link
            to="/products"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 hover:bg-green-50"
          >
            Products
          </Link>

          <a
            href="#categories"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 hover:bg-green-50"
          >
            Categories
          </a>

          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 hover:bg-green-50"
          >
            About
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 hover:bg-green-50"
          >
            Contact
          </a>

          <Link
            to="/wishlist"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 hover:bg-green-50"
          >
            Wishlist ({wishlistItems.length})
          </Link>

          <Link
            to="/cart"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 hover:bg-green-50"
          >
            Cart ({cartItems.length})
          </Link>

          <div className="px-6 py-5">

            <Link
              to="/products"
              onClick={() => setMenuOpen(false)}
              className="block text-center bg-green-700 text-white py-3 rounded-xl hover:bg-green-800 transition"
            >
              Shop Now
            </Link>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;