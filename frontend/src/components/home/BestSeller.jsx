import { Link } from "react-router-dom";
import { products } from "../../data/products";
import ProductCard from "../products/ProductCard";

function BestSeller() {

  const bestSellers = products.filter(
    (product) => product.featured
  );

  return (

    <section className="py-12 md:py-16 bg-white">

      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <div className="text-center mb-10">

          <span className="inline-block bg-red-100 text-red-600 px-4 py-1 rounded-full text-sm font-semibold">
            🔥 Customer Favorites
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
            Best Sellers
          </h2>

          <div className="w-20 h-1 bg-green-600 rounded-full mx-auto mt-4"></div>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Explore our most loved products trusted by thousands of
            happy customers across India.
          </p>

        </div>

        {/* Products */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {bestSellers.slice(0, 3).map((product) => (

            <ProductCard
              key={product.id}
              product={product}
            />

          ))}

        </div>

        {/* Bottom Button */}

        <div className="flex justify-center mt-10">

          <Link
            to="/products"
            className="bg-green-700 text-white px-8 py-3 rounded-xl hover:bg-green-800 transition duration-300 shadow-lg"
          >
            Shop Best Sellers →
          </Link>

        </div>

      </div>

    </section>

  );
}

export default BestSeller;