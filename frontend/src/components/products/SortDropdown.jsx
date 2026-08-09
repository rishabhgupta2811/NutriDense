function SortDropdown({ sort, setSort }) {
  return (
    <div className="flex justify-end mb-6">
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="border rounded-xl px-4 py-3 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600"
      >
        <option value="">Sort Products</option>
        <option value="popular">Popularity</option>
        <option value="rating">Highest Rated</option>
        <option value="discount">Highest Discount</option>
        <option value="low">Price: Low to High</option>
        <option value="high">Price: High to Low</option>
      </select>
    </div>
  );
}

export default SortDropdown;