function FilterSidebar({
  category,
  setCategory,
  priceRange,
  setPriceRange,
  rating,
  setRating,
  inStockOnly,
  setInStockOnly,
  clearFilters,
}) {
  const categories = [
    "All",
    "Honey",
    "Protein",
    "Dry Fruits",
    "Oats",
    "Tea",
    "Supplements",
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mb-8">

      <h2 className="text-2xl font-bold mb-6 text-green-700">
        Filters
      </h2>

      {/* Categories */}

      <div className="mb-8">
        <h3 className="font-semibold mb-3">
          Categories
        </h3>

        <div className="flex flex-wrap gap-2">

          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`px-4 py-2 rounded-full border transition ${
                category === item
                  ? "bg-green-700 text-white border-green-700"
                  : "hover:bg-green-50"
              }`}
            >
              {item}
            </button>
          ))}

        </div>
      </div>

      {/* Price */}

      <div className="mb-8">

        <h3 className="font-semibold mb-3">
          Maximum Price
        </h3>

        <input
          type="range"
          min="100"
          max="5000"
          step="100"
          value={priceRange}
          onChange={(e) =>
            setPriceRange(Number(e.target.value))
          }
          className="w-full accent-green-700"
        />

        <p className="mt-2 text-green-700 font-semibold">
          ₹ {priceRange}
        </p>

      </div>

      {/* Rating */}

      <div className="mb-8">

        <h3 className="font-semibold mb-3">
          Minimum Rating
        </h3>

        <select
          value={rating}
          onChange={(e) =>
            setRating(Number(e.target.value))
          }
          className="w-full border rounded-xl p-3"
        >
          <option value={0}>All Ratings</option>
          <option value={4}>4★ & Above</option>
          <option value={4.5}>4.5★ & Above</option>
          <option value={4.8}>4.8★ & Above</option>
        </select>

      </div>

      {/* Stock */}

      <div className="mb-8">

        <label className="flex items-center gap-3">

          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) =>
              setInStockOnly(e.target.checked)
            }
          />

          In Stock Only

        </label>

      </div>

      {/* Clear */}

      <button
        onClick={clearFilters}
        className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl transition"
      >
        Clear Filters
      </button>

    </div>
  );
}

export default FilterSidebar;