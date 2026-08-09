import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  FiHeart,
  FiTruck,
  FiShield,
  FiShoppingCart,
  FiMinus,
  FiPlus,
  FiArrowLeft,
} from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import toast from "react-hot-toast";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

import {
  getProductById,
  getProducts,
} from "../services/productService";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { addToCart } = useContext(CartContext);
  const { wishlistItems, toggleWishlist } =
    useContext(WishlistContext);

  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ---------------------------------------
  // FETCH PRODUCT FROM MONGODB
  // ---------------------------------------

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError("");

        console.log("Fetching product:", id);

        const { data } = await getProductById(id);

        console.log("MongoDB Product:", data);

        setProduct(data);

        // Fetch related products
        try {
          const response = await getProducts();

          const related = response.data
            .filter(
              (item) =>
                item._id !== data._id &&
                item.category === data.category
            )
            .slice(0, 4);

          setRelatedProducts(related);
        } catch (relatedError) {
          console.log(
            "Could not load related products:",
            relatedError
          );
        }
      } catch (error) {
        console.error(
          "Product details error:",
          error
        );

        setError(
          error?.response?.data?.message ||
            "Failed to load product"
        );
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  // ---------------------------------------
  // WISHLIST
  // ---------------------------------------

  const isFavourite = product
    ? wishlistItems.some(
        (item) =>
          item.id === product._id ||
          item._id === product._id
      )
    : false;

  const handleWishlist = () => {
    if (!product) return;

    toggleWishlist({
      ...product,
      id: product._id,
    });

    if (isFavourite) {
      toast.success("Removed from wishlist");
    } else {
      toast.success("Added to wishlist");
    }
  };

  // ---------------------------------------
  // QUANTITY
  // ---------------------------------------

  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    } else {
      toast.error("Maximum available stock reached");
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // ---------------------------------------
  // ADD TO CART
  // ---------------------------------------

  const handleAddToCart = () => {
    if (!product) return;

    addToCart(
      {
        ...product,
        id: product._id,
      },
      quantity
    );
  };

  // ---------------------------------------
  // BUY NOW
  // ---------------------------------------

  const handleBuyNow = () => {
    if (!product) return;

    addToCart(
      {
        ...product,
        id: product._id,
      },
      quantity
    );

    navigate("/checkout");
  };

  // ---------------------------------------
  // LOADING
  // ---------------------------------------

  if (loading) {
    return (
      <>
        <Navbar />

        <div className="min-h-[70vh] flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-green-700 border-t-transparent rounded-full animate-spin mx-auto"></div>

            <p className="mt-5 text-gray-600 text-lg">
              Loading product...
            </p>
          </div>
        </div>

        <Footer />
      </>
    );
  }

  // ---------------------------------------
  // ERROR
  // ---------------------------------------

  if (error || !product) {
    return (
      <>
        <Navbar />

        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-5">
          <h1 className="text-4xl font-bold text-gray-800">
            Product Not Found
          </h1>

          <p className="text-gray-500 mt-3">
            {error || "This product does not exist."}
          </p>

          <button
            onClick={() => navigate("/products")}
            className="mt-8 bg-green-700 hover:bg-green-800 text-white px-7 py-3 rounded-xl font-semibold"
          >
            Back to Products
          </button>
        </div>

        <Footer />
      </>
    );
  }

  // ---------------------------------------
  // DISCOUNT
  // ---------------------------------------

  const discount =
    product.oldPrice && product.price
      ? Math.round(
          ((product.oldPrice - product.price) /
            product.oldPrice) *
            100
        )
      : 0;

  return (
    <>
      <Navbar />

      <main className="bg-[#F8FAF5] min-h-screen py-10">
        <div className="max-w-7xl mx-auto px-5">

          {/* BACK BUTTON */}

          <button
            onClick={() => navigate("/products")}
            className="flex items-center gap-2 text-gray-600 hover:text-green-700 mb-8 transition"
          >
            <FiArrowLeft />
            Back to Products
          </button>

          {/* PRODUCT DETAILS */}

          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-10 p-6 md:p-10">

              {/* IMAGE */}

              <div className="relative">

                {/* Discount */}

                {discount > 0 && (
                  <span className="absolute top-5 left-5 z-10 bg-green-700 text-white px-4 py-2 rounded-full font-semibold">
                    {discount}% OFF
                  </span>
                )}

                {/* Wishlist */}

                <button
                  onClick={handleWishlist}
                  className="absolute top-5 right-5 z-10 bg-white shadow-lg rounded-full p-4 hover:scale-110 transition"
                >
                  {isFavourite ? (
                    <FaHeart className="text-red-500 text-xl" />
                  ) : (
                    <FiHeart className="text-xl text-gray-700" />
                  )}
                </button>

                <div className="bg-[#F8FAF5] rounded-3xl min-h-[450px] flex items-center justify-center p-8">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[450px] object-contain"
                  />
                </div>
              </div>

              {/* PRODUCT INFORMATION */}

              <div className="flex flex-col justify-center">

                {/* BRAND */}

                <p className="text-green-700 font-semibold text-lg">
                  {product.brand || "NutriDense"}
                </p>

                {/* NAME */}

                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
                  {product.name}
                </h1>

                {/* CATEGORY */}

                <p className="text-gray-500 mt-3">
                  Category:{" "}
                  <span className="font-semibold text-gray-700">
                    {product.category}
                  </span>
                </p>

                {/* RATING */}

                <div className="flex items-center gap-3 mt-5">

                  <span className="bg-green-700 text-white px-3 py-1 rounded-lg">
                    ⭐ {product.rating || 0}
                  </span>

                  <span className="text-gray-500">
                    ({product.reviews || 0} Reviews)
                  </span>

                </div>

                {/* PRICE */}

                <div className="flex items-center gap-4 mt-7">

                  <span className="text-4xl font-bold text-green-700">
                    ₹{product.price}
                  </span>

                  {product.oldPrice && (
                    <span className="text-xl text-gray-400 line-through">
                      ₹{product.oldPrice}
                    </span>
                  )}

                </div>

                {/* STOCK */}

                <div className="mt-5">

                  {product.stock > 0 ? (
                    <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
                      ✓ In Stock ({product.stock} available)
                    </span>
                  ) : (
                    <span className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full font-semibold">
                      Out of Stock
                    </span>
                  )}

                </div>

                {/* DESCRIPTION */}

                <p className="text-gray-600 leading-7 mt-7">
                  {product.description ||
                    "Premium quality organic nutrition product from NutriDense."}
                </p>

                {/* FEATURES */}

                <div className="grid sm:grid-cols-3 gap-4 mt-8">

                  <div className="bg-green-50 rounded-xl p-4">
                    <FiTruck className="text-green-700 text-2xl mb-2" />
                    <p className="font-semibold">
                      Free Delivery
                    </p>
                  </div>

                  <div className="bg-green-50 rounded-xl p-4">
                    <FiShield className="text-green-700 text-2xl mb-2" />
                    <p className="font-semibold">
                      Secure Product
                    </p>
                  </div>

                  <div className="bg-green-50 rounded-xl p-4">
                    <FiShoppingCart className="text-green-700 text-2xl mb-2" />
                    <p className="font-semibold">
                      Easy Shopping
                    </p>
                  </div>

                </div>

                {/* QUANTITY */}

                {product.stock > 0 && (
                  <div className="flex items-center gap-5 mt-8">

                    <span className="font-semibold">
                      Quantity:
                    </span>

                    <div className="flex items-center border rounded-xl overflow-hidden">

                      <button
                        onClick={decreaseQuantity}
                        className="px-4 py-3 hover:bg-green-700 hover:text-white transition"
                      >
                        <FiMinus />
                      </button>

                      <span className="px-6 py-3 font-bold">
                        {quantity}
                      </span>

                      <button
                        onClick={increaseQuantity}
                        className="px-4 py-3 hover:bg-green-700 hover:text-white transition"
                      >
                        <FiPlus />
                      </button>

                    </div>

                  </div>
                )}

                {/* BUTTONS */}

                <div className="grid sm:grid-cols-2 gap-4 mt-8">

                  <button
                    onClick={handleAddToCart}
                    disabled={product.stock <= 0}
                    className="bg-green-700 hover:bg-green-800 disabled:bg-gray-400 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition"
                  >
                    <FiShoppingCart />
                    Add to Cart
                  </button>

                  <button
                    onClick={handleBuyNow}
                    disabled={product.stock <= 0}
                    className="border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white disabled:border-gray-400 disabled:text-gray-400 py-4 rounded-xl font-bold text-lg transition"
                  >
                    Buy Now
                  </button>

                </div>

              </div>
            </div>

            {/* -------------------------------- */}
            {/* EXTRA PRODUCT INFORMATION */}
            {/* -------------------------------- */}

            <div className="border-t p-6 md:p-10">

              <div className="grid md:grid-cols-3 gap-10">

                {/* INGREDIENTS */}

                <div>
                  <h2 className="text-2xl font-bold mb-4">
                    Ingredients
                  </h2>

                  <p className="text-gray-600 leading-7 whitespace-pre-line">
                    {product.ingredients ||
                      "Information not available."}
                  </p>
                </div>

                {/* BENEFITS */}

                <div>
                  <h2 className="text-2xl font-bold mb-4">
                    Benefits
                  </h2>

                  <p className="text-gray-600 leading-7 whitespace-pre-line">
                    {product.benefits ||
                      "Information not available."}
                  </p>
                </div>

                {/* NUTRITION */}

                <div>
                  <h2 className="text-2xl font-bold mb-4">
                    Nutrition
                  </h2>

                  <p className="text-gray-600 leading-7 whitespace-pre-line">
                    {product.nutrition ||
                      "Information not available."}
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* -------------------------------- */}
          {/* RELATED PRODUCTS */}
          {/* -------------------------------- */}

          {relatedProducts.length > 0 && (
            <section className="mt-16">

              <div className="flex items-center justify-between mb-7">

                <div>
                  <p className="text-green-700 font-semibold uppercase tracking-widest">
                    You May Also Like
                  </p>

                  <h2 className="text-3xl font-bold mt-2">
                    Related Products
                  </h2>
                </div>

                <Link
                  to="/products"
                  className="text-green-700 font-semibold hover:underline"
                >
                  View All
                </Link>

              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

                {relatedProducts.map((item) => (
                  <Link
                    key={item._id}
                    to={`/products/${item._id}`}
                    className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition"
                  >

                    <div className="bg-[#F8FAF5] h-52 flex items-center justify-center p-5">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div className="p-5">

                      <p className="text-sm text-green-700">
                        {item.brand || "NutriDense"}
                      </p>

                      <h3 className="font-bold text-lg mt-1">
                        {item.name}
                      </h3>

                      <div className="flex justify-between items-center mt-3">

                        <span className="font-bold text-green-700 text-xl">
                          ₹{item.price}
                        </span>

                        <span className="text-sm">
                          ⭐ {item.rating || 0}
                        </span>

                      </div>

                    </div>

                  </Link>
                ))}

              </div>
            </section>
          )}

        </div>
      </main>

      <Footer />
    </>
  );
}

export default ProductDetails;