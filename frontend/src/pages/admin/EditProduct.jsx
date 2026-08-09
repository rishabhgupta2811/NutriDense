import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import {
  getProductById,
  updateProduct,
} from "../../services/productService";

import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminHeader from "../../components/admin/AdminHeader";
import ProductForm from "../../components/admin/ProductForm";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // --------------------------------
  // FETCH PRODUCT
  // --------------------------------

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await getProductById(id);

        console.log("Product for editing:", data);

        setProduct(data);
      } catch (error) {
        console.error("Failed to fetch product:", error);

        toast.error(
          error?.response?.data?.message ||
            "Failed to load product"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // --------------------------------
  // UPDATE PRODUCT
  // --------------------------------

  const handleSubmit = async (formData) => {
    try {
      console.log("FormData received from ProductForm:");

      for (const [key, value] of formData.entries()) {
        console.log(key, value);
      }

      const { data } = await updateProduct(id, formData);

      console.log("Updated product:", data);

      toast.success("Product updated successfully!");

      navigate("/admin/products");

    } catch (error) {
      console.error("Update product error:", error);

      toast.error(
        error?.response?.data?.message ||
          "Failed to update product"
      );
    }
  };

  // --------------------------------
  // LOADING
  // --------------------------------

  if (loading) {
    return (
      <section className="bg-gray-100 min-h-screen p-8">

        <div className="flex items-center justify-center min-h-[70vh]">

          <p className="text-xl text-gray-600">
            Loading product...
          </p>

        </div>

      </section>
    );
  }

  // --------------------------------
  // PRODUCT NOT FOUND
  // --------------------------------

  if (!product) {
    return (
      <section className="bg-gray-100 min-h-screen p-8">

        <div className="flex flex-col items-center justify-center min-h-[70vh]">

          <h2 className="text-2xl font-bold text-gray-800">
            Product Not Found
          </h2>

          <button
            onClick={() => navigate("/admin/products")}
            className="mt-5 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl"
          >
            Back to Products
          </button>

        </div>

      </section>
    );
  }

  // --------------------------------
  // EDIT PRODUCT PAGE
  // --------------------------------

  return (
    <section className="bg-gray-100 min-h-screen p-8">

      <div className="grid lg:grid-cols-5 gap-8">

        {/* SIDEBAR */}

        <div className="lg:col-span-1">
          <AdminSidebar />
        </div>

        {/* MAIN */}

        <div className="lg:col-span-4 space-y-6">

          <AdminHeader />

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <div className="mb-8">

              <h2 className="text-3xl font-bold text-gray-800">
                Edit Product
              </h2>

              <p className="text-gray-500 mt-2">
                Update the product information below.
              </p>

            </div>

            <ProductForm
              initialData={product}
              onSubmit={handleSubmit}
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default EditProduct;