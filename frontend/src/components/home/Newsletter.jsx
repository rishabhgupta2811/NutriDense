import { FiMail } from "react-icons/fi";

function Newsletter() {
  return (
    <section className="py-16 bg-gradient-to-r from-green-700 to-green-600 relative overflow-hidden">

      {/* Background Decoration */}

      <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full"></div>

      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-white/10 rounded-full"></div>

      <div className="relative max-w-5xl mx-auto px-5">

        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 text-center shadow-2xl">

          {/* Icon */}

          <div className="w-20 h-20 mx-auto rounded-full bg-white flex items-center justify-center shadow-lg">

            <FiMail className="text-green-700 text-4xl" />

          </div>

          {/* Heading */}

          <h2 className="mt-6 text-3xl md:text-4xl font-bold text-white">
            Stay Healthy With NutriDense
          </h2>

          <p className="mt-4 text-green-100 max-w-2xl mx-auto leading-7">
            Subscribe to receive healthy lifestyle tips, exclusive discounts,
            new product launches and special offers directly in your inbox.
          </p>

          {/* Form */}

          <div className="mt-8 flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">

            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-5 py-4 rounded-xl bg-transparent border border-white text-white placeholder:text-white/70 outline-none focus:ring-2 focus:ring-white"
            />

            <button
              className="bg-white text-green-700 font-semibold px-8 py-4 rounded-xl hover:bg-green-100 transition duration-300 shadow-lg"
            >
              Subscribe
            </button>

          </div>

          {/* Bottom Text */}

          <p className="mt-6 text-sm text-green-100">
            ✅ No Spam &nbsp; • &nbsp; ✅ Weekly Health Tips &nbsp; • &nbsp; ✅ Exclusive Offers
          </p>

        </div>

      </div>

    </section>
  );
}

export default Newsletter;