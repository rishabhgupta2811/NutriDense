import heroImage from "../../assets/images/hero.png";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-[#F8FAF5] py-10 md:py-16 lg:py-20">

      <div className="max-w-7xl mx-auto px-5 md:px-8">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left Side */}

          <div className="text-center lg:text-left">

            <p className="text-green-700 font-semibold uppercase tracking-[4px] text-sm md:text-base">
              Welcome to NutriDense
              
            </p>

            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
              Fresh Nutrition
              <br />
              Naturally Delicious.
            </h1>

            <p className="mt-6 text-gray-600 text-base md:text-lg leading-8 max-w-xl mx-auto lg:mx-0">
              Discover premium organic foods, natural supplements,
              proteins and healthy products carefully selected
              for your family's wellness.
            </p>

            {/* Buttons */}

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              <Link to="/products">
                <Button>
                  Shop Now
                </Button>
              </Link>

              <Link to="/products">
                <Button variant="outline">
                  Explore Products
                </Button>
              </Link>

            </div>

            {/* Statistics */}

            <div className="grid grid-cols-3 gap-4 md:gap-8 mt-10 text-center lg:text-left">

              <div>

                <h2 className="text-2xl md:text-3xl font-bold text-green-700">
                  10K+
                </h2>

                <p className="text-gray-500 text-sm md:text-base mt-1">
                  Happy Customers
                </p>

              </div>

              <div>

                <h2 className="text-2xl md:text-3xl font-bold text-green-700">
                  500+
                </h2>

                <p className="text-gray-500 text-sm md:text-base mt-1">
                  Organic Products
                </p>

              </div>

              <div>

                <h2 className="text-2xl md:text-3xl font-bold text-green-700">
                  4.9★
                </h2>

                <p className="text-gray-500 text-sm md:text-base mt-1">
                  Customer Rating
                </p>

              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">

            <img
              src={heroImage}
              alt="NutriDense Organic Products"
              className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl rounded-3xl shadow-2xl"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;