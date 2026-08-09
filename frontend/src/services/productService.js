import API from "../api/axios";

// Create Product
export const createProduct = (formData) =>
  API.post("/products", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

// Get All Products
export const getProducts = () =>
   API.get("/products");

// Get Single Product
export const getProductById = (id) =>
  API.get(`/products/${id}`);

// Update Product
export const updateProduct = (id, formData) =>
  API.put(`/products/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

// Delete Product
export const deleteProduct = (id) =>
  API.delete(`/products/${id}`);