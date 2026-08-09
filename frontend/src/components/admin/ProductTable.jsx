import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiEdit,
  FiTrash2,
  FiEye,
} from "react-icons/fi";

import toast from "react-hot-toast";


import { deleteProduct } from "../../services/productService";
import DeleteProductModal from "./DeleteProductModal";

function ProductTable({
  products = [],
  search = "",
  category = "All",
  stock = "All",
  page = 1,
  onProductDeleted,
}) {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [deleting, setDeleting] = useState(false);

  // --------------------------------
  // FILTER PRODUCTS
  // --------------------------------

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const productName = String(product.name || "").toLowerCase();
      const productBrand = String(product.brand || "").toLowerCase();
      const searchText = String(search || "").toLowerCase();

      // Search
      const matchesSearch =
        productName.includes(searchText) ||
        productBrand.includes(searchText);

      // Category
      const matchesCategory =
        category === "All" ||
        product.category === category;

      // Stock
      let matchesStock = true;

      if (stock === "In Stock") {
        matchesStock = Number(product.stock) > 10;
      }

      if (stock === "Low Stock") {
        matchesStock =
          Number(product.stock) > 0 &&
          Number(product.stock) <= 10;
      }

      if (stock === "Out of Stock") {
        matchesStock = Number(product.stock) === 0;
      }

      return (
        matchesSearch &&
        matchesCategory &&
        matchesStock
      );
    });
  }, [products, search, category, stock]);

  // --------------------------------
  // PAGINATION
  // --------------------------------

  const itemsPerPage = 10;

  const startIndex = (page - 1) * itemsPerPage;

  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // --------------------------------
  // DELETE PRODUCT
  // --------------------------------

  const handleDelete = async () => {
  if (!selectedProduct?._id) return;

  try {
    await deleteProduct(selectedProduct._id);

    toast.success("Product deleted successfully!");

    setIsModalOpen(false);
    setSelectedProduct(null);

    // Refresh product list
    window.location.reload();

  } catch (error) {
    console.error("Delete Product Error:", error);

    toast.error(
      error?.response?.data?.message ||
      "Failed to delete product"
    );
  }
};

  // --------------------------------
  // VIEW PRODUCT
  // --------------------------------

  const handleView = (id) => {
    navigate(`/products/${id}`);
  };

  // --------------------------------
  // EDIT PRODUCT
  // --------------------------------

  const handleEdit = (id) => {
    navigate(`/admin/products/edit/${id}`);
  };

  return (
    <>
      <div className="overflow-x-auto rounded-2xl">

        <table className="w-full min-w-[900px]">

          {/* TABLE HEADER */}

          <thead className="bg-gray-100">

            <tr>

              <th className="text-left px-5 py-4">
                Product
              </th>

              <th className="text-left px-4 py-4">
                Category
              </th>

              <th className="text-left px-4 py-4">
                Price
              </th>

              <th className="text-left px-4 py-4">
                Stock
              </th>

              <th className="text-left px-4 py-4">
                Rating
              </th>

              <th className="text-left px-4 py-4">
                Status
              </th>

              <th className="text-center px-4 py-4">
                Actions
              </th>

            </tr>

          </thead>

          {/* TABLE BODY */}

          <tbody>

            {paginatedProducts.length === 0 ? (

              <tr>

                <td
                  colSpan={7}
                  className="text-center py-12 text-gray-500"
                >
                  No Products Found
                </td>

              </tr>

            ) : (

              paginatedProducts.map((product) => (

                <tr
                  key={product._id}
                  className="border-b hover:bg-gray-50 transition"
                >

                  {/* PRODUCT */}

                  <td className="px-5 py-4">

                    <div className="flex items-center gap-4">

                      <img
                        src={
                          product.image ||
                          "/placeholder.png"
                        }
                        alt={product.name}
                        className="w-16 h-16 rounded-xl object-cover border"
                      />

                      <div>

                        <h3 className="font-semibold text-gray-800">
                          {product.name}
                        </h3>

                        <p className="text-gray-500 text-sm">
                          {product.brand || "NutriDense"}
                        </p>

                      </div>

                    </div>

                  </td>

                  {/* CATEGORY */}

                  <td className="px-4 py-4">
                    {product.category}
                  </td>

                  {/* PRICE */}

                  <td className="px-4 py-4">

                    <p className="font-bold text-gray-800">
                      ₹{product.price}
                    </p>

                  </td>

                  {/* STOCK */}

                  <td className="px-4 py-4">

                    <span className="font-medium">
                      {product.stock}
                    </span>

                  </td>

                  {/* RATING */}

                  <td className="px-4 py-4">

                    <div>
                      ⭐ {product.rating || 0}
                    </div>

                    <p className="text-xs text-gray-400">
                      ({product.numReviews || 0} reviews)
                    </p>

                  </td>

                  {/* STATUS */}

                  <td className="px-4 py-4">

                    {Number(product.stock) === 0 ? (

                      <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-medium">
                        Out of Stock
                      </span>

                    ) : Number(product.stock) <= 10 ? (

                      <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-medium">
                        Low Stock
                      </span>

                    ) : (

                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                        In Stock
                      </span>

                    )}

                  </td>

                  {/* ACTIONS */}

                  <td className="px-4 py-4">

                    <div className="flex justify-center gap-2">

                      {/* VIEW */}

                      <button
                        onClick={() =>
                          handleView(product._id)
                        }
                        className="p-2 rounded-lg bg-blue-100 hover:bg-blue-200 text-blue-600 transition"
                        title="View Product"
                      >
                        <FiEye />
                      </button>

                      {/* EDIT */}

                      <button
                        onClick={() =>
                          handleEdit(product._id)
                        }
                        className="p-2 rounded-lg bg-green-100 hover:bg-green-200 text-green-700 transition"
                        title="Edit Product"
                      >
                        <FiEdit />
                      </button>

                      {/* DELETE */}

                      <button
                        onClick={() => {
                          setSelectedProduct(product);
                          setIsModalOpen(true);
                        }}
                        className="p-2 rounded-lg bg-red-100 hover:bg-red-200 text-red-600 transition"
                        title="Delete Product"
                      >
                        <FiTrash2 />
                      </button>

                    </div>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

      {/* DELETE MODAL */}

      <DeleteProductModal
        isOpen={isModalOpen}
        productName={selectedProduct?.name}
        onClose={() => {
          if (!deleting) {
            setIsModalOpen(false);
            setSelectedProduct(null);
          }
        }}
        onConfirm={handleDelete}
      />

    </>
  );
}

export default ProductTable;