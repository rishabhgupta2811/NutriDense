import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import DashboardCard from "../components/dashboard/DashboardCard";

import {
  FiPackage,
  FiHeart,
  FiMapPin,
  FiShoppingCart,
} from "react-icons/fi";

function Dashboard() {
  return (
    <>
      <Navbar />

      <section className="bg-gray-100 min-h-screen py-10">

        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-4 gap-8">

          <DashboardSidebar />

          <div className="lg:col-span-3 space-y-8">

            <DashboardHeader />

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

              <DashboardCard
                title="Orders"
                value="12"
                icon={<FiPackage />}
                color="bg-green-700"
              />

              <DashboardCard
                title="Wishlist"
                value="8"
                icon={<FiHeart />}
                color="bg-red-500"
              />

              <DashboardCard
                title="Addresses"
                value="3"
                icon={<FiMapPin />}
                color="bg-blue-500"
              />

              <DashboardCard
                title="Cart Items"
                value="5"
                icon={<FiShoppingCart />}
                color="bg-yellow-500"
              />

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <h2 className="text-2xl font-bold mb-6">
                Recent Orders
              </h2>

              <div className="overflow-x-auto">

                <table className="w-full">

                  <thead>

                    <tr className="border-b">

                      <th className="text-left py-3">
                        Order ID
                      </th>

                      <th className="text-left">
                        Product
                      </th>

                      <th className="text-left">
                        Status
                      </th>

                      <th className="text-left">
                        Amount
                      </th>

                    </tr>

                  </thead>

                  <tbody>

                    <tr className="border-b">

                      <td className="py-4">
                        #ND1025
                      </td>

                      <td>
                        Organic Honey
                      </td>

                      <td className="text-green-700 font-semibold">
                        Delivered
                      </td>

                      <td>
                        ₹599
                      </td>

                    </tr>

                    <tr>

                      <td className="py-4">
                        #ND1026
                      </td>

                      <td>
                        Protein Powder
                      </td>

                      <td className="text-yellow-600 font-semibold">
                        Shipping
                      </td>

                      <td>
                        ₹1,999
                      </td>

                    </tr>

                  </tbody>

                </table>

              </div>

            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Dashboard;