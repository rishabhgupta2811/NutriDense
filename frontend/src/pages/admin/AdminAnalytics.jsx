import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminHeader from "../../components/admin/AdminHeader";

import AnalyticsStats from "../../components/admin/AnalyticsStats";
import SalesChart from "../../components/admin/SalesChart";
import RevenueChart from "../../components/admin/RevenueChart";
import TopProducts from "../../components/admin/TopProducts";
import RecentTransactions from "../../components/admin/RecentTransactions";

function AdminAnalytics() {
  return (
    <section className="bg-gray-100 min-h-screen p-8">
      <div className="grid lg:grid-cols-5 gap-8">

        <div className="lg:col-span-1">
          <AdminSidebar />
        </div>

        <div className="lg:col-span-4 space-y-6">

          <AdminHeader />

          <div>
            <h2 className="text-3xl font-bold">
              Analytics Dashboard
            </h2>

            <p className="text-gray-500 mt-2">
              Track your store performance, sales and revenue.
            </p>
          </div>

          <AnalyticsStats />

          <div className="grid xl:grid-cols-2 gap-6">

            <SalesChart />

            <RevenueChart />

          </div>

          <div className="grid xl:grid-cols-2 gap-6">

            <TopProducts />

            <RecentTransactions />

          </div>

        </div>

      </div>
    </section>
  );
}

export default AdminAnalytics;