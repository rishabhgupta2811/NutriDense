import {
  FaLeaf,
  FaTruck,
  FaShieldAlt,
  FaHeartbeat,
  FaRecycle,
  FaStar,
} from "react-icons/fa";

function WhyChoose() {
  const features = [
    {
      icon: <FaLeaf />,
      title: "100% Organic",
      desc: "Fresh products sourced directly from trusted organic farms.",
    },
    {
      icon: <FaTruck />,
      title: "Fast Delivery",
      desc: "Quick, secure and doorstep delivery across India.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Premium Quality",
      desc: "Every product is carefully inspected before dispatch.",
    },
    {
      icon: <FaHeartbeat />,
      title: "Healthy Nutrition",
      desc: "Packed with vitamins, minerals and natural goodness.",
    },
    {
      icon: <FaRecycle />,
      title: "Eco Friendly",
      desc: "Sustainable packaging that protects nature.",
    },
    {
      icon: <FaStar />,
      title: "Trusted Brand",
      desc: "Loved by thousands of happy customers nationwide.",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-[#F8FAF5]">

      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <div className="text-center mb-10">

          <h2 className="text-3xl md:text-4xl font-bold text-green-700">
            Why Choose NutriDense?
          </h2>

          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            We combine premium quality, organic nutrition and exceptional
            customer service to help you live a healthier lifestyle.
          </p>

        </div>

        {/* Features */}

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">

          {features.map((feature, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl p-5 md:p-7 text-center shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >

              {/* Icon */}

              <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center">

                <div className="text-3xl text-green-700">
                  {feature.icon}
                </div>

              </div>

              {/* Title */}

              <h3 className="mt-5 text-lg md:text-xl font-bold text-gray-900">
                {feature.title}
              </h3>

              {/* Description */}

              <p className="mt-3 text-gray-600 text-sm md:text-base leading-6">
                {feature.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyChoose;