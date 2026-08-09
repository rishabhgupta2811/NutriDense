function Testimonials() {
  const reviews = [
    {
      name: "Rishabh Kumar",
      review:
        "Absolutely loved the quality of the products. Fresh, organic and delivered on time. Highly recommended!",
      rating: 5,
    },
    {
      name: "Ankit Singh",
      review:
        "The protein powder mixes perfectly and tastes great. Excellent quality and value for money.",
      rating: 5,
    },
    {
      name: "Aayushi Sharma",
      review:
        "Healthy products at affordable prices. Customer support was also very helpful.",
      rating: 5,
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-[#F8FAF5]">

      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <div className="text-center mb-10">

          <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold">
            💬 Customer Reviews
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
            What Our Customers Say
          </h2>

          <div className="w-20 h-1 bg-green-600 rounded-full mx-auto mt-4"></div>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Trusted by thousands of happy customers who choose NutriDense
            for a healthier lifestyle.
          </p>

        </div>

        {/* Reviews */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {reviews.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              {/* Top */}

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-full bg-green-700 text-white flex items-center justify-center text-xl font-bold">
                  {item.name.charAt(0)}
                </div>

                <div>

                  <h3 className="font-bold text-lg text-gray-900">
                    {item.name}
                  </h3>

                  

                </div>

              </div>

              {/* Rating */}

              <div className="mt-5 text-yellow-500 text-lg">
                ⭐⭐⭐⭐⭐
              </div>

              {/* Review */}

              <p className="mt-4 text-gray-600 leading-7 italic">
                "{item.review}"
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;