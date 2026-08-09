import { useState } from "react";

import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminHeader from "../../components/admin/AdminHeader";

import CustomerStats from "../../components/admin/CustomerStats";
import CustomerSearch from "../../components/admin/CustomerSearch";
import CustomerTable from "../../components/admin/CustomerTable";

function AdminCustomers() {
  const [search, setSearch] = useState("");

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
              Customer Management
            </h2>

            <p className="text-gray-500 mt-2">
              Manage customers, orders and account status.
            </p>
          </div>

          <CustomerStats />

          <div className="bg-white rounded-3xl shadow-lg p-6">

            <CustomerSearch
              search={search}
              setSearch={setSearch}
            />

            <div className="mt-6">
              <CustomerTable search={search} />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AdminCustomers;