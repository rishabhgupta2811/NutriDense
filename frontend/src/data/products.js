import honey from "../assets/images/honey.jpg";
import protein from "../assets/images/protein.jpg";
import dryfruits from "../assets/images/dryfruits.jpg";
import oats from "../assets/images/oats.jpg";
import greentea from "../assets/images/greentea.jpg";
import supplements from "../assets/images/supplements.jpg";

export const products = [
  {
    id: 1,
    name: "Organic Honey",
    brand: "NutriDense",
    category: "Honey",
    price: 499,
    oldPrice: 699,
    discount: 29,
    rating: 4.8,
    reviews: 1245,
    stock: 120,
    weight: "500g",
    sku: "ND-HON-001",
    image: honey,

    description:
      "100% pure organic honey collected from natural bee farms. Rich in antioxidants, vitamins, and minerals. Perfect for boosting immunity and improving digestion.",

    ingredients: [
      "100% Pure Organic Honey"
    ],

    benefits: [
      "Boosts Immunity",
      "Rich in Antioxidants",
      "Improves Digestion",
      "Natural Energy Booster"
    ],

    nutrition: {
      calories: "304 kcal",
      protein: "0.3 g",
      carbs: "82 g",
      fat: "0 g",
    },

    featured: true,
    bestseller: true,
  },

  {
    id: 2,
    name: "Protein Powder",
    brand: "NutriDense",
    category: "Protein",
    price: 1499,
    oldPrice: 1799,
    discount: 17,
    rating: 4.7,
    reviews: 865,
    stock: 85,
    weight: "1kg",
    sku: "ND-PRO-002",
    image: protein,

    description:
      "Premium plant-based protein powder made from natural ingredients. Supports muscle growth, faster recovery, and overall fitness.",

    ingredients: [
      "Pea Protein",
      "Brown Rice Protein",
      "Natural Cocoa",
      "Stevia"
    ],

    benefits: [
      "Muscle Recovery",
      "High Protein",
      "Plant Based",
      "No Added Sugar"
    ],

    nutrition: {
      calories: "120 kcal",
      protein: "24 g",
      carbs: "3 g",
      fat: "2 g",
    },

    featured: true,
    bestseller: true,
  },

  {
    id: 3,
    name: "Organic Oats",
    brand: "NutriDense",
    category: "Oats",
    price: 299,
    oldPrice: 399,
    discount: 25,
    rating: 4.9,
    reviews: 1034,
    stock: 200,
    weight: "1kg",
    sku: "ND-OAT-003",
    image: oats,

    description:
      "High-fiber organic oats that provide long-lasting energy and support heart health. Perfect for breakfast and weight management.",

    ingredients: [
      "100% Whole Grain Oats"
    ],

    benefits: [
      "High Fiber",
      "Supports Heart Health",
      "Weight Management",
      "Long Lasting Energy"
    ],

    nutrition: {
      calories: "389 kcal",
      protein: "17 g",
      carbs: "66 g",
      fat: "7 g",
    },

    featured: true,
    bestseller: false,
  },

  {
    id: 4,
    name: "Green Tea",
    brand: "NutriDense",
    category: "Tea",
    price: 399,
    oldPrice: 499,
    discount: 20,
    rating: 4.6,
    reviews: 672,
    stock: 150,
    weight: "250g",
    sku: "ND-TEA-004",
    image: greentea,

    description:
      "Refreshing organic green tea packed with antioxidants. Supports metabolism, detoxification, and overall wellness.",

    ingredients: [
      "Organic Green Tea Leaves"
    ],

    benefits: [
      "Improves Metabolism",
      "Detoxifies Body",
      "Rich in Antioxidants",
      "Supports Weight Loss"
    ],

    nutrition: {
      calories: "2 kcal",
      protein: "0 g",
      carbs: "0 g",
      fat: "0 g",
    },

    featured: false,
    bestseller: true,
  },

  {
    id: 5,
    name: "Premium Dry Fruits",
    brand: "NutriDense",
    category: "Dry Fruits",
    price: 799,
    oldPrice: 999,
    discount: 20,
    rating: 4.9,
    reviews: 1843,
    stock: 95,
    weight: "500g",
    sku: "ND-DRY-005",
    image: dryfruits,

    description:
      "Premium mix of almonds, cashews, pistachios, and raisins packed with healthy fats, protein, and essential nutrients.",

    ingredients: [
      "Almonds",
      "Cashews",
      "Pistachios",
      "Raisins"
    ],

    benefits: [
      "Healthy Fats",
      "High Protein",
      "Brain Health",
      "Heart Friendly"
    ],

    nutrition: {
      calories: "607 kcal",
      protein: "20 g",
      carbs: "21 g",
      fat: "54 g",
    },

    featured: true,
    bestseller: true,
  },

  {
    id: 6,
    name: "Daily Multivitamins",
    brand: "NutriDense",
    category: "Supplements",
    price: 999,
    oldPrice: 1299,
    discount: 23,
    rating: 4.8,
    reviews: 956,
    stock: 75,
    weight: "60 Tablets",
    sku: "ND-MUL-006",
    image: supplements,

    description:
      "Complete multivitamin supplement with essential vitamins and minerals to support immunity, energy, and overall health.",

    ingredients: [
      "Vitamin A",
      "Vitamin C",
      "Vitamin D",
      "Vitamin E",
      "Zinc",
      "Iron"
    ],

    benefits: [
      "Boosts Immunity",
      "Supports Bone Health",
      "Increases Energy",
      "Daily Wellness"
    ],

    nutrition: {
      calories: "0 kcal",
      protein: "0 g",
      carbs: "0 g",
      fat: "0 g",
    },

    featured: false,
    bestseller: true,
  },
];
export default products;