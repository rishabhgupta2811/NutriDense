import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#0F172A] text-gray-300">

      {/* Main Footer */}

      <div className="max-w-7xl mx-auto px-5 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo */}

          <div>

            {/* Logo */}

            <div className="text-center md:text-left">

              <h2 className="text-3xl font-extrabold text-white leading-none">
                Nutri<span className="text-green-300">Dense</span>
              </h2>

              <div className="flex items-center justify-center md:justify-start mt-1">

                <div className="h-[1px] w-10 bg-green-300"></div>

                <span className="mx-2 text-[11px] tracking-[5px] font-semibold text-green-300 uppercase">
                  Naturals
                </span>

                <div className="h-[1px] w-10 bg-green-300"></div>

              </div>

            </div>

            <p className="mt-6 leading-7 text-gray-400">
              Premium organic foods and healthy nutrition
              products for a healthier lifestyle.
            </p>

            {/* Social */}

            <div className="flex gap-4 mt-6">

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-600 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-600 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-sky-500 transition"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition"
              >
                <FaLinkedinIn />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-bold text-white mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">

              <li>
                <Link to="/" className="hover:text-green-400">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/products" className="hover:text-green-400">
                  Products
                </Link>
              </li>

              <li>
                <a href="#categories" className="hover:text-green-400">
                  Categories
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-green-400">
                  About
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-green-400">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Categories */}

          <div>

            <h3 className="text-xl font-bold text-white mb-6">
              Categories
            </h3>

            <ul className="space-y-4">

              <li>Organic Honey</li>

              <li>Protein Powder</li>

              <li>Organic Oats</li>

              <li>Green Tea</li>

              <li>Dry Fruits</li>

              <li>Supplements</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-bold text-white mb-6">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">

                <FaPhoneAlt className="text-green-400 mt-1" />

                <span>+91 9905577242</span>

              </div>

              <div className="flex gap-3">

                <FaEnvelope className="text-green-400 mt-1" />

                <span>support@nutridense.com</span>

              </div>

              <div className="flex gap-3">

                <FaMapMarkerAlt className="text-green-400 mt-1" />

                <span>New Delhi, India</span>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-5 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-center">
            © 2026 <span className="text-green-400">NutriDense Naturals</span>. All Rights Reserved.
          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="w-10 h-10 rounded-full bg-green-600 hover:bg-green-700 flex items-center justify-center transition"
          >
            <FaArrowUp className="text-white" />
          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;