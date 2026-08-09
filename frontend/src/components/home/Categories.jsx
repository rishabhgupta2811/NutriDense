import { Link } from "react-router-dom";

import honey from "../../assets/images/honey.jpg";
import protein from "../../assets/images/protein.jpg";
import dryfruits from "../../assets/images/dryfruits.jpg";
import oats from "../../assets/images/oats.jpg";
import greentea from "../../assets/images/greentea.jpg";
import supplements from "../../assets/images/supplements.jpg";

function Categories() {
  const categories = [
    {
      id: 1,
      name: "Organic Honey",
      image: honey,
    },
    {
      id: 2,
      name: "Protein",
      image: protein,
    },
    {
      id: 5,
      name: "Dry Fruits",
      image: dryfruits,
    },
    {
      id: 3,
      name: "Organic Oats",
      image: oats,
    },
    {
      id: 4,
      name: "Green Tea",
      image: greentea,
    },
    {
      id: 6,
      name: "Supplements",
      image: supplements,
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-white">

      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <div className="text-center mb-10">

          <h2 className="text-3xl md:text-4xl font-bold text-green-700">
            Shop by Categories
          </h2>

          <div className="w-20 h-1 bg-green-600 rounded-full mx-auto mt-4"></div>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Explore our carefully selected healthy products made for
            a nutritious and active lifestyle.
          </p>

        </div>

        {/* Categories */}

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">

          {categories.map((category, index) => (

            <Link
              key={category.id}
              to={`/products/${category.id}`}
              className="group"
            >


              <div className="bg-green-50 rounded-2xl p-5 text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-green-300">

                {/* Image */}

                <div className="flex justify-center">

                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-full border-4 border-white shadow-lg group-hover:scale-105 transition duration-300"
                  />

                </div>

                {/* Name */}

                <h3 className="mt-5 text-base md:text-lg font-semibold text-gray-900">
                  {category.name}
                </h3>

                {/* Explore */}

                <p className="mt-2 text-sm text-green-700 font-medium opacity-0 group-hover:opacity-100 transition">
                  Explore →
                </p>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Categories;