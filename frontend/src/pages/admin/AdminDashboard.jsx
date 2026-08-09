import {
  FiBox,
  FiShoppingBag,
  FiUsers,
  FiDollarSign,
} from "react-icons/fi";

import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminHeader from "../../components/admin/AdminHeader";
import StatCard from "../../components/admin/StatCard";

function AdminDashboard() {
  return (
    <section className="bg-gray-100 min-h-screen p-8">
      <div className="grid lg:grid-cols-5 gap-8">

        <div className="lg:col-span-1">
          <AdminSidebar />
        </div>

        <div className="lg:col-span-4 space-y-8">

          <AdminHeader />

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

            <StatCard
              title="Products"
              value="120"
              icon={<FiBox />}
              color="bg-green-600"
            />

            <StatCard
              title="Orders"
              value="85"
              icon={<FiShoppingBag />}
              color="bg-blue-600"
            />

            <StatCard
              title="Customers"
              value="350"
              icon={<FiUsers />}
              color="bg-yellow-500"
            />

            <StatCard
              title="Revenue"
              value="₹1,25,000"
              icon={<FiDollarSign />}
              color="bg-red-500"
            />

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-2xl font-bold">
              Welcome to NutriDense Admin Dashboard
            </h2>

            <p className="text-gray-500 mt-4">
              From here you can manage products, orders, customers,
              reviews, coupons and analytics.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default AdminDashboard;