import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminHeader from "../../components/admin/AdminHeader";
import ProductForm from "../../components/admin/ProductForm";
import { createProduct } from "../../services/productService";

function AddProduct() {
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
  try {
    await createProduct(formData);

    toast.success("Product added successfully!");

    navigate("/admin/products");

  } catch (error) {
    console.error(error);

    toast.error("Failed to add product.");
  }
};
  return (
    <section className="bg-gray-100 min-h-screen p-8">
      <div className="grid lg:grid-cols-5 gap-8">

        {/* Sidebar */}

        <div className="lg:col-span-1">
          <AdminSidebar />
        </div>

        {/* Main Content */}

        <div className="lg:col-span-4 space-y-6">

          <AdminHeader />

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <div className="mb-8">

              <h2 className="text-3xl font-bold">
                Add New Product
              </h2>

              <p className="text-gray-500 mt-2">
                Fill in the details below to create a new product.
              </p>

            </div>

            <ProductForm
              onSubmit={handleSubmit}
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default AddProduct;