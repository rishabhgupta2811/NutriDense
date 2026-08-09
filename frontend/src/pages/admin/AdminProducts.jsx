import { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import { getProducts } from "../../services/productService";

import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminHeader from "../../components/admin/AdminHeader";

import ProductSearch from "../../components/admin/ProductSearch";
import ProductFilter from "../../components/admin/ProductFilter";
import ProductTable from "../../components/admin/ProductTable";
import ProductPagination from "../../components/admin/ProductPagination";

function AdminProducts() {

    const navigate = useNavigate();

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [stock, setStock] = useState("All");
    const [page, setPage] = useState(1);

    const [products, setProducts] = useState([]);

    // --------------------------------
    // FETCH PRODUCTS
    // --------------------------------

    const fetchProducts = async () => {

        try {

            const { data } = await getProducts();

            console.log("Products from API:", data);

            setProducts(data);

        } catch (error) {

            console.error(
                "Failed to fetch products:",
                error
            );

        }

    };

    // Fetch when page loads

    useEffect(() => {

        fetchProducts();

    }, []);

    // --------------------------------
    // PAGINATION COUNT
    // --------------------------------

    const totalPages =
        Math.max(
            1,
            Math.ceil(products.length / 10)
        );

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

                    {/* TITLE */}

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                        <div>

                            <h2 className="text-3xl font-bold text-gray-800">
                                Product Management
                            </h2>

                            <p className="text-gray-500 mt-1">
                                Manage products, inventory, pricing, and availability.
                            </p>

                        </div>

                        {/* ADD PRODUCT */}

                        <button
                            onClick={() =>
                                navigate("/admin/products/add")
                            }
                            className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl flex items-center gap-2"
                        >

                            <FiPlus />

                            Add Product

                        </button>

                    </div>

                    {/* PRODUCT AREA */}

                    <div className="bg-white rounded-3xl shadow-lg p-6 space-y-6">

                        {/* SEARCH + FILTER */}

                        <div className="grid lg:grid-cols-3 gap-4">

                            <ProductSearch
                                search={search}
                                setSearch={(value) => {
                                    setSearch(value);
                                    setPage(1);
                                }}
                            />

                            <ProductFilter
                                category={category}
                                setCategory={(value) => {
                                    setCategory(value);
                                    setPage(1);
                                }}
                                stock={stock}
                                setStock={(value) => {
                                    setStock(value);
                                    setPage(1);
                                }}
                            />

                        </div>

                        {/* TABLE */}

                        <ProductTable

                            products={products}

                            search={search}

                            category={category}

                            stock={stock}

                            page={page}

                            onProductDeleted={fetchProducts}

                        />

                        {/* PAGINATION */}

                        <ProductPagination

                            page={page}

                            setPage={setPage}

                            totalPages={totalPages}

                        />

                    </div>

                </div>

            </div>

        </section>

    );
}

export default AdminProducts;