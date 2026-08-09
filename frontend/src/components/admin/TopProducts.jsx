const products = [
  {
    id: 1,
    name: "Organic Honey",
    sold: 342,
    revenue: "₹1,70,658",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Protein Powder",
    sold: 218,
    revenue: "₹3,26,782",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Premium Dry Fruits",
    sold: 185,
    revenue: "₹1,47,815",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Green Tea",
    sold: 160,
    revenue: "₹63,840",
    rating: 4.6,
  },
];

function TopProducts() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        Top Selling Products
      </h2>

      <div className="space-y-5">

        {products.map((product) => (

          <div
            key={product.id}
            className="flex justify-between items-center border-b pb-4"
          >

            <div>

              <h3 className="font-semibold text-lg">
                {product.name}
              </h3>

              <p className="text-gray-500 text-sm">
                Sold: {product.sold} units
              </p>

            </div>

            <div className="text-right">

              <p className="font-bold text-green-600">
                {product.revenue}
              </p>

              <p className="text-yellow-500">
                ⭐ {product.rating}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default TopProducts;