import { products } from "../../data/products";
import ProductCard from "../products/ProductCard";
import { Link } from "react-router-dom";

function FeaturedProducts() {
  const featuredProducts = products.filter(
    (product) => product.featured
  );

  return (
    <section className="py-12 md:py-16 bg-[#F8FAF5]">

      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <div className="text-center mb-10">

          <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold">
            Featured Collection
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
            Featured Products
          </h2>

          

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Discover our most loved organic foods, nutritional supplements
            and healthy lifestyle essentials.
          </p>

        </div>

        {/* Products */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {featuredProducts.slice(0, 4).map((product) => (

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
            View More Products →
          </Link>

        </div>

      </div>

    </section>
  );
}

export default FeaturedProducts;