import { Link } from "react-router-dom";

import honey from "../../assets/images/honey.jpg";
import protein from "../../assets/images/protein.jpg";
import supplements from "../../assets/images/supplements.jpg";

function Collection() {
  const collections = [
    {
      id: 1,
      title: "Organic Honey",
      desc: "100% pure forest honey collected from trusted organic farms.",
      image: honey,
      price: "₹499",
    },
    {
      id: 2,
      title: "Protein Powder",
      desc: "Plant-based protein to support strength and healthy living.",
      image: protein,
      price: "₹1499",
    },
    {
      id: 3,
      title: "Healthy Supplements",
      desc: "Daily vitamins and minerals for a healthier lifestyle.",
      image: supplements,
      price: "₹999",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-white">

      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <div className="text-center mb-10">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Collection
          </h2>

          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Explore our carefully selected healthy products crafted
            with premium ingredients for your everyday wellness.
          </p>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {collections.map((item) => (

            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2"
            >

              <div className="overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-52 object-cover hover:scale-105 transition duration-500"
                />

              </div>

              <div className="p-5">

                <h3 className="text-xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm mt-3 leading-6">
                  {item.desc}
                </p>

                <div className="flex items-center justify-between mt-5">

                  <div>

                    <p className="text-green-700 text-2xl font-bold">
                      {item.price}
                    </p>

                    <p className="text-yellow-500 text-sm">
                      ★★★★★
                    </p>

                  </div>

                  <Link
                    to="/products"
                    className="bg-green-700 text-white px-4 py-2 rounded-xl hover:bg-green-800 transition"
                  >
                    View →
                  </Link>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Collection;