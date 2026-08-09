import { useState } from "react";

import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminHeader from "../../components/admin/AdminHeader";

import CouponStats from "../../components/admin/CouponStats";
import CouponSearch from "../../components/admin/CouponSearch";
import CouponTable from "../../components/admin/CouponTable";

function AdminCoupons() {
  const [search, setSearch] = useState("");

  return (
    <section className="bg-gray-100 min-h-screen p-8">
      <div className="grid lg:grid-cols-5 gap-8">

        <div className="lg:col-span-1">
          <AdminSidebar />
        </div>

        <div className="lg:col-span-4 space-y-6">

          <AdminHeader />

          <div className="flex justify-between items-center">

            <div>
              <h2 className="text-3xl font-bold">
                Coupon Management
              </h2>

              <p className="text-gray-500 mt-2">
                Create and manage discount coupons.
              </p>
            </div>

          </div>

          <CouponStats />

          <div className="bg-white rounded-3xl shadow-lg p-6">

            <CouponSearch
              search={search}
              setSearch={setSearch}
            />

            <div className="mt-6">
              <CouponTable search={search} />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AdminCoupons;