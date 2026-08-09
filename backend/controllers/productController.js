const Product = require("../models/Product");

// Create Product
const createProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      oldPrice,
      category,
      brand,
      stock,
      sku,
      ingredients,
      benefits,
      nutrition,
      featured,
      bestSeller,
    } = req.body;

    const product = await Product.create({
      name,
      description,
      price,
      oldPrice,
      category,
      brand,
      stock,
      sku,
      ingredients,
      benefits,
      nutrition,
      featured,
      bestSeller,
      image: req.file ? req.file.path : "",
    });

    res.status(201).json(product);

  } catch (error) {
    console.error("Create Product Error:", error);

    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Products
const getProducts = async (req, res) => {
  try {

    const products = await Product.find();

    res.json(products);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

// Get Single Product
const getProductById = async (req, res) => {
  try {

    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.json(product);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

/// Update Product
const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    // Basic information
    product.name = req.body.name ?? product.name;
    product.description =
      req.body.description ?? product.description;
    product.price = req.body.price ?? product.price;
    product.category =
      req.body.category ?? product.category;

    // Additional information
    product.brand = req.body.brand ?? product.brand;
    product.oldPrice =
      req.body.oldPrice ?? product.oldPrice;
    product.stock = req.body.stock ?? product.stock;
    product.sku = req.body.sku ?? product.sku;
    product.ingredients =
      req.body.ingredients ?? product.ingredients;
    product.benefits =
      req.body.benefits ?? product.benefits;
    product.nutrition =
      req.body.nutrition ?? product.nutrition;
    product.featured =
      req.body.featured ?? product.featured;
    product.bestSeller =
      req.body.bestSeller ?? product.bestSeller;

    // New image
    if (req.file) {
      product.image = req.file.path;
    }

    const updatedProduct = await product.save();

    res.json(updatedProduct);

  } catch (error) {
    console.error("Update Product Error:", error);

    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Product
const deleteProduct = async (req, res) => {
  try {

    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    await product.deleteOne();

    res.json({
      message: "Product deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};