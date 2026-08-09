import { useEffect, useState } from "react";

import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import FilterSidebar from "./FilterSidebar";
import SortDropdown from "./SortDropdown";

import { getProducts } from "../../services/productService";

function ProductGrid() {
  const [products, setProducts] = useState([]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");

  const [priceRange, setPriceRange] = useState(5000);
  const [rating, setRating] = useState(0);
  const [inStockOnly, setInStockOnly] = useState(false);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // --------------------------------
  // FETCH PRODUCTS FROM MONGODB
  // --------------------------------

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const { data } = await getProducts();

        console.log("Products from MongoDB:", data);

        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);

        setError(
          error?.response?.data?.message ||
            "Failed to load products"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // --------------------------------
  // CLEAR FILTERS
  // --------------------------------

  const clearFilters = () => {
    setSearch("");
    setCategory("All");
    setSort("");
    setPriceRange(5000);
    setRating(0);
    setInStockOnly(false);
  };

  // --------------------------------
  // FILTER PRODUCTS
  // --------------------------------

  let filteredProducts = products.filter((product) => {
    const productName = product.name || "";
    const productBrand = product.brand || "";

    const matchesSearch =
      productName
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      productBrand
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      product.category === category;

    const matchesPrice =
      Number(product.price) <= priceRange;

    const matchesRating =
      Number(product.rating || 0) >= rating;

    const matchesStock =
      !inStockOnly ||
      Number(product.stock) > 0;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesPrice &&
      matchesRating &&
      matchesStock
    );
  });

  // --------------------------------
  // SORT PRODUCTS
  // --------------------------------

  switch (sort) {
    case "low":
      filteredProducts.sort(
        (a, b) =>
          Number(a.price) - Number(b.price)
      );
      break;

    case "high":
      filteredProducts.sort(
        (a, b) =>
          Number(b.price) - Number(a.price)
      );
      break;

    case "rating":
      filteredProducts.sort(
        (a, b) =>
          Number(b.rating || 0) -
          Number(a.rating || 0)
      );
      break;

    case "discount":
      filteredProducts.sort(
        (a, b) =>
          Number(b.discount || 0) -
          Number(a.discount || 0)
      );
      break;

    case "popular":
      filteredProducts.sort(
        (a, b) =>
          Number(b.numReviews || 0) -
          Number(a.numReviews || 0)
      );
      break;

    default:
      break;
  }

  // --------------------------------
  // LOADING
  // --------------------------------

  if (loading) {
    return (
      <section className="bg-gray-100 min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-5">

          <h1 className="text-4xl font-bold text-center text-green-700 mb-10">
            Our Products
          </h1>

          <div className="text-center py-20">
            <p className="text-xl text-gray-500">
              Loading products...
            </p>
          </div>

        </div>
      </section>
    );
  }

  // --------------------------------
  // ERROR
  // --------------------------------

  if (error) {
    return (
      <section className="bg-gray-100 min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-5">

          <h1 className="text-4xl font-bold text-center text-green-700 mb-10">
            Our Products
          </h1>

          <div className="bg-white rounded-2xl p-10 text-center">

            <h2 className="text-2xl font-bold text-red-600">
              Unable to Load Products
            </h2>

            <p className="text-gray-500 mt-3">
              {error}
            </p>

            <p className="text-sm text-gray-400 mt-4">
              Make sure your backend server is running on port 5000.
            </p>

          </div>

        </div>
      </section>
    );
  }

  // --------------------------------
  // MAIN UI
  // --------------------------------

  return (
    <section className="bg-gray-100 min-h-screen py-16">

      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <h1 className="text-4xl font-bold text-center text-green-700 mb-10">
          Our Products
        </h1>

        {/* Search */}

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        {/* Filters */}

        <FilterSidebar
          category={category}
          setCategory={setCategory}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          rating={rating}
          setRating={setRating}
          inStockOnly={inStockOnly}
          setInStockOnly={setInStockOnly}
          clearFilters={clearFilters}
        />

        {/* Sort */}

        <SortDropdown
          sort={sort}
          setSort={setSort}
        />

        {/* Product Count */}

        <p className="text-gray-600 mb-6">
          Showing{" "}
          <span className="font-semibold">
            {filteredProducts.length}
          </span>{" "}
          Products
        </p>

        {/* No Products */}

        {filteredProducts.length === 0 ? (

          <div className="text-center py-20">

            <h2 className="text-3xl font-bold text-gray-800">
              No Products Found
            </h2>

            <p className="text-gray-500 mt-3">
              Try changing your search or filters.
            </p>

            <button
              onClick={clearFilters}
              className="mt-6 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl"
            >
              Clear Filters
            </button>

          </div>

        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {filteredProducts.map((product) => (

              <ProductCard
                key={product._id}
                product={product}
              />

            ))}

          </div>

        )}

      </div>

    </section>
  );
}

export default ProductGrid;