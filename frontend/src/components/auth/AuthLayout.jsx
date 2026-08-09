import { Link } from "react-router-dom";
import { FaLeaf } from "react-icons/fa";

function AuthLayout({
  title,
  subtitle,
  children,
  footerText,
  footerLinkText,
  footerLink,
}) {
  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex items-center justify-center px-5 py-10">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">

        {/* Left Side */}

        <div className="hidden lg:flex flex-col justify-center bg-green-700 text-white p-12">

          <div className="flex items-center gap-3 mb-8">
            <div className="bg-white text-green-700 p-3 rounded-full">
              <FaLeaf className="text-2xl" />
            </div>

            <div>
              <h1 className="text-4xl font-bold">
                NutriDense
              </h1>

              <p className="tracking-[6px] text-green-200 text-sm mt-1">
                NATURALS
              </p>
            </div>
          </div>

          <h2 className="text-4xl font-bold leading-tight">
            Healthy Living <br /> Starts Here.
          </h2>

          <p className="mt-6 text-green-100 leading-7">
            Discover premium organic foods, natural supplements,
            proteins and wellness products carefully selected
            for your family's health.
          </p>

          <div className="grid grid-cols-3 gap-5 mt-12">

            <div className="text-center">
              <h3 className="text-3xl font-bold">10K+</h3>
              <p className="text-green-200 text-sm">
                Happy Customers
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold">100+</h3>
              <p className="text-green-200 text-sm">
                Organic Products
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold">24/7</h3>
              <p className="text-green-200 text-sm">
                Customer Support
              </p>
            </div>

          </div>
        </div>

        {/* Right Side */}

        <div className="p-8 sm:p-12 flex flex-col justify-center">

          <div className="lg:hidden text-center mb-10">

            <h1 className="text-4xl font-bold text-green-700">
              NutriDense
            </h1>

            <p className="tracking-[6px] text-green-700 text-sm mt-1">
              NATURALS
            </p>

          </div>

          <h2 className="text-3xl font-bold text-gray-800">
            {title}
          </h2>

          <p className="text-gray-500 mt-2 mb-8">
            {subtitle}
          </p>

          {children}

          <p className="text-center mt-8 text-gray-600">

            {footerText}{" "}

            <Link
              to={footerLink}
              className="text-green-700 font-semibold hover:underline"
            >
              {footerLinkText}
            </Link>

          </p>

        </div>

      </div>
    </section>
  );
}

export default AuthLayout;