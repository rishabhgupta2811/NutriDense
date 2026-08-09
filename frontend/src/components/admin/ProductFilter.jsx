function ProductFilter({
  category,
  setCategory,
  stock,
  setStock,
}) {
  return (
    <div className="grid grid-cols-2 gap-4">

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border rounded-xl p-3 focus:ring-2 focus:ring-green-600 outline-none"
      >
        <option value="All">All Categories</option>
        <option value="Honey">Honey</option>
        <option value="Protein">Protein</option>
        <option value="Oats">Oats</option>
        <option value="Tea">Tea</option>
        <option value="Dry Fruits">Dry Fruits</option>
        <option value="Supplements">Supplements</option>
      </select>

      <select
        value={stock}
        onChange={(e) => setStock(e.target.value)}
        className="border rounded-xl p-3 focus:ring-2 focus:ring-green-600 outline-none"
      >
        <option value="All">All Stock</option>
        <option value="In Stock">In Stock</option>
        <option value="Low Stock">Low Stock</option>
        <option value="Out of Stock">Out of Stock</option>
      </select>

    </div>
  );
}

export default ProductFilter;