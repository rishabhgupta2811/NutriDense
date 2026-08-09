import { Link } from "react-router-dom";
import { useContext } from "react";

import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

import { CartContext } from "../../context/CartContext";
import { WishlistContext } from "../../context/WishlistContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  const { wishlistItems, toggleWishlist } =
    useContext(WishlistContext);

  // MongoDB ID
  const productId = product._id || product.id;

  // Check wishlist
  const isFavourite = wishlistItems.some(
    (item) =>
      (item._id || item.id) === productId
  );

  const discount =
    product.discount ||
    (product.oldPrice && product.price
      ? Math.round(
          ((product.oldPrice - product.price) /
            product.oldPrice) *
            100
        )
      : 0);

  return (
    <div className="group bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">

      {/* ================= IMAGE ================= */}

      <div className="relative bg-[#F8FAF5] overflow-hidden">

        {/* Discount */}

        {discount > 0 && (
          <span className="absolute top-4 left-4 z-10 bg-green-700 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {discount}% OFF
          </span>
        )}

        {/* Wishlist */}

        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();

            toggleWishlist(product);
          }}
          className="absolute top-4 right-4 z-10 bg-white p-2 rounded-full shadow hover:scale-110 transition"
          title={
            isFavourite
              ? "Remove from Wishlist"
              : "Add to Wishlist"
          }
        >
          {isFavourite ? (
            <FaHeart className="text-red-500 text-lg" />
          ) : (
            <FiHeart className="text-lg" />
          )}
        </button>

        {/* Product Image */}

        <Link to={`/products/${productId}`}>
          <img
            src={
              product.image ||
              "/placeholder.png"
            }
            alt={product.name}
            className="w-full h-56 md:h-64 object-contain p-6 transition duration-500 group-hover:scale-110"
          />
        </Link>

      </div>

      {/* ================= PRODUCT INFO ================= */}

      <div className="p-5">

        {/* Brand */}

        {product.brand && (
          <p className="text-sm text-green-700 font-medium">
            {product.brand}
          </p>
        )}

        {/* Name */}

        <Link to={`/products/${productId}`}>
          <h3 className="mt-2 text-lg md:text-xl font-bold text-gray-900 hover:text-green-700 transition">
            {product.name}
          </h3>
        </Link>

        {/* Category */}

        {product.category && (
          <p className="text-sm text-gray-500 mt-1">
            {product.category}
          </p>
        )}

        {/* Rating */}

        <div className="flex items-center justify-between mt-3">

          <div className="flex items-center gap-2">

            <span className="bg-green-700 text-white text-xs px-2 py-1 rounded">
              ⭐ {product.rating || 0}
            </span>

            <span className="text-sm text-gray-500">
              (
              {product.numReviews ||
                product.reviews ||
                0}{" "}
              Reviews)
            </span>

          </div>

        </div>

        {/* Delivery */}

        <div className="mt-3">

          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
            Free Delivery
          </span>

        </div>

        {/* ================= PRICE ================= */}

        <div className="flex flex-wrap items-center gap-3 mt-4">

          <span className="text-2xl font-bold text-green-700">
            ₹{product.price}
          </span>

          {product.oldPrice && (
            <span className="text-gray-400 line-through">
              ₹{product.oldPrice}
            </span>
          )}

        </div>

        {/* ================= STOCK ================= */}

        <p
          className={`mt-2 text-sm font-medium ${
            Number(product.stock) > 20
              ? "text-green-600"
              : Number(product.stock) > 0
              ? "text-yellow-600"
              : "text-red-600"
          }`}
        >
          {Number(product.stock) > 20
            ? "In Stock"
            : Number(product.stock) > 0
            ? `Only ${product.stock} Left`
            : "Out of Stock"}
        </p>

        {/* ================= BUTTONS ================= */}

        <div className="mt-6 space-y-3">

          <button
            type="button"
            disabled={Number(product.stock) === 0}
            onClick={() => addToCart(product)}
            className={`w-full py-3 rounded-xl font-semibold transition ${
              Number(product.stock) === 0
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-green-700 hover:bg-green-800 text-white"
            }`}
          >
            🛒{" "}
            {Number(product.stock) === 0
              ? "Out of Stock"
              : "Add to Cart"}
          </button>

          <Link
            to={`/products/${productId}`}
            className="block w-full text-center border border-green-700 text-green-700 py-3 rounded-xl hover:bg-green-700 hover:text-white transition"
          >
            View Details
          </Link>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;