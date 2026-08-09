import { useState } from "react";

import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminHeader from "../../components/admin/AdminHeader";

import OrderStats from "../../components/admin/OrderStats";
import OrderSearch from "../../components/admin/OrderSearch";
import OrderFilter from "../../components/admin/OrderFilter";
import OrderTable from "../../components/admin/OrderTable";

function AdminOrders() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

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
              Order Management
            </h2>

            <p className="text-gray-500 mt-2">
              Manage customer orders, deliveries and payments.
            </p>
          </div>

          <OrderStats />

          <div className="bg-white rounded-3xl shadow-lg p-6 space-y-6">

            <div className="grid md:grid-cols-2 gap-4">

              <OrderSearch
                search={search}
                setSearch={setSearch}
              />

              <OrderFilter
                status={status}
                setStatus={setStatus}
              />

            </div>

            <OrderTable
              search={search}
              status={status}
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default AdminOrders;