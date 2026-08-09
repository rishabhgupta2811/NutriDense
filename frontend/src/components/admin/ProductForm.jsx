import { useEffect, useState } from "react";

const initialState = {
    name: "",
    brand: "",
    category: "",
    price: "",
    oldPrice: "",
    stock: "",
    sku: "",
    description: "",
    ingredients: "",
    benefits: "",
    nutrition: "",
    featured: false,
    bestSeller: false,
    image: "",
};

function ProductForm({
    initialData,
    onSubmit,
}) {
    const [product, setProduct] = useState(initialState);

    // Load existing product when editing
    useEffect(() => {
        if (initialData) {
            setProduct({
                name: initialData.name ?? "",
                brand: initialData.brand ?? "",
                category: initialData.category ?? "",
                price: initialData.price ?? "",
                oldPrice: initialData.oldPrice ?? "",
                stock: initialData.stock ?? "",
                sku: initialData.sku ?? "",
                description: initialData.description ?? "",
                ingredients: initialData.ingredients ?? "",
                benefits: initialData.benefits ?? "",
                nutrition: initialData.nutrition ?? "",
                featured: initialData.featured ?? false,
                bestSeller: initialData.bestSeller ?? false,
                image: initialData.image ?? "",
            });
        }
    }, [initialData]);

    const handleChange = (e) => {
        const {
            name,
            value,
            type,
            checked,
            files,
        } = e.target;

        // Image file
        if (type === "file") {
            setProduct((prev) => ({
                ...prev,
                image: files?.[0] || "",
            }));

            return;
        }

        setProduct((prev) => ({
            ...prev,
            [name]:
                type === "checkbox"
                    ? checked
                    : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Required validation
        if (
            !product.name ||
            !product.category ||
            product.price === "" ||
            product.stock === ""
        ) {
            alert("Please fill all required fields.");
            return;
        }

        // Make sure price and stock are valid numbers
        const price = Number(product.price);
        const stock = Number(product.stock);

        if (Number.isNaN(price)) {
            alert("Please enter a valid price.");
            return;
        }

        if (Number.isNaN(stock)) {
            alert("Please enter a valid stock quantity.");
            return;
        }

        const formData = new FormData();

        formData.append("name", product.name);
        formData.append("brand", product.brand);
        formData.append("category", product.category);

        // Numbers
        formData.append("price", price);

        if (
            product.oldPrice !== "" &&
            product.oldPrice !== undefined &&
            product.oldPrice !== null
        ) {
            formData.append(
                "oldPrice",
                Number(product.oldPrice)
            );
        }

        formData.append("stock", stock);

        formData.append("sku", product.sku);
        formData.append("description", product.description);
        formData.append("ingredients", product.ingredients);
        formData.append("benefits", product.benefits);
        formData.append("nutrition", product.nutrition);

        formData.append(
            "featured",
            product.featured
        );

        formData.append(
            "bestSeller",
            product.bestSeller
        );

        // Only send image if a NEW file was selected
        if (product.image instanceof File) {
            formData.append("image", product.image);
        }

        // Debug
        console.log("Submitting product:");
        for (const [key, value] of formData.entries()) {
            console.log(key, value);
        }

        onSubmit(formData);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow-lg p-8 space-y-8"
        >

            {/* PRODUCT INFORMATION */}

            <h2 className="text-3xl font-bold">
                Product Information
            </h2>

            <div className="grid md:grid-cols-2 gap-5">

                <input
                    type="text"
                    name="name"
                    placeholder="Product Name *"
                    value={product.name}
                    onChange={handleChange}
                    className="border rounded-xl p-3"
                />

                <input
                    type="text"
                    name="brand"
                    placeholder="Brand"
                    value={product.brand}
                    onChange={handleChange}
                    className="border rounded-xl p-3"
                />

                <select
                    name="category"
                    value={product.category}
                    onChange={handleChange}
                    className="border rounded-xl p-3"
                >

                    <option value="">
                        Select Category
                    </option>

                    <option value="Honey">
                        Honey
                    </option>

                    <option value="Protein">
                        Protein
                    </option>

                    <option value="Oats">
                        Oats
                    </option>

                    <option value="Tea">
                        Tea
                    </option>

                    <option value="Dry Fruits">
                        Dry Fruits
                    </option>

                    <option value="Supplements">
                        Supplements
                    </option>

                </select>

                <input
                    type="text"
                    name="sku"
                    placeholder="SKU"
                    value={product.sku}
                    onChange={handleChange}
                    className="border rounded-xl p-3"
                />

            </div>

            {/* PRICING */}

            <h2 className="text-2xl font-bold">
                Pricing
            </h2>

            <div className="grid md:grid-cols-3 gap-5">

                <input
                    type="number"
                    name="price"
                    placeholder="Selling Price *"
                    value={product.price}
                    onChange={handleChange}
                    className="border rounded-xl p-3"
                />

                <input
                    type="number"
                    name="oldPrice"
                    placeholder="Original Price"
                    value={product.oldPrice}
                    onChange={handleChange}
                    className="border rounded-xl p-3"
                />

                <input
                    type="number"
                    name="stock"
                    placeholder="Stock Quantity *"
                    value={product.stock}
                    onChange={handleChange}
                    className="border rounded-xl p-3"
                />

            </div>

            {/* IMAGE */}

            <h2 className="text-2xl font-bold">
                Product Image
            </h2>

            <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                    const file = e.target.files[0];

                    if (file) {
                        setProduct((prev) => ({
                            ...prev,
                            image: file,
                        }));
                    }
                }}
                className="border rounded-xl p-3 w-full"
            />

            {/* Image Preview */}

            {product.image && (
                <div className="mt-4">

                    <p className="text-sm text-gray-500 mb-2">
                        Image Preview
                    </p>

                    <img
                        src={
                            product.image instanceof File
                                ? URL.createObjectURL(product.image)
                                : product.image
                        }
                        alt={product.name || "Product"}
                        className="w-40 h-40 object-cover rounded-xl border"
                    />

                </div>
            )}

            {/* DESCRIPTION */}

            <h2 className="text-2xl font-bold">
                Description
            </h2>

            <textarea
                rows={4}
                name="description"
                placeholder="Product Description"
                value={product.description}
                onChange={handleChange}
                className="border rounded-xl p-3 w-full"
            />

            {/* INGREDIENTS */}

            <h2 className="text-2xl font-bold">
                Ingredients
            </h2>

            <textarea
                rows={3}
                name="ingredients"
                placeholder="Ingredients"
                value={product.ingredients}
                onChange={handleChange}
                className="border rounded-xl p-3 w-full"
            />

            {/* BENEFITS */}

            <h2 className="text-2xl font-bold">
                Benefits
            </h2>

            <textarea
                rows={3}
                name="benefits"
                placeholder="Benefits"
                value={product.benefits}
                onChange={handleChange}
                className="border rounded-xl p-3 w-full"
            />

            {/* NUTRITION */}

            <h2 className="text-2xl font-bold">
                Nutrition
            </h2>

            <textarea
                rows={3}
                name="nutrition"
                placeholder="Nutrition Facts"
                value={product.nutrition}
                onChange={handleChange}
                className="border rounded-xl p-3 w-full"
            />

            {/* OPTIONS */}

            <div className="flex flex-col md:flex-row gap-8">

                <label className="flex items-center gap-3">

                    <input
                        type="checkbox"
                        name="featured"
                        checked={product.featured}
                        onChange={handleChange}
                    />

                    Featured Product

                </label>

                <label className="flex items-center gap-3">

                    <input
                        type="checkbox"
                        name="bestSeller"
                        checked={product.bestSeller}
                        onChange={handleChange}
                    />

                    Best Seller

                </label>

            </div>

            {/* BUTTONS */}

            <div className="flex gap-4">

                <button
                    type="submit"
                    className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-xl"
                >
                    Save Product
                </button>

                <button
                    type="reset"
                    className="border px-8 py-3 rounded-xl hover:bg-gray-100"
                >
                    Reset
                </button>

            </div>

        </form>
    );
}

export default ProductForm;