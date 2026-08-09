import { useState } from "react";
import { Link } from "react-router-dom";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const initialCoupons = [
  {
    id: 1,
    code: "WELCOME10",
    type: "Percentage",
    value: 10,
    minOrder: 500,
    used: 42,
    limit: 100,
    expiry: "31 Dec 2026",
    status: "Active",
  },
  {
    id: 2,
    code: "SAVE200",
    type: "Flat",
    value: 200,
    minOrder: 1000,
    used: 18,
    limit: 50,
    expiry: "15 Aug 2026",
    status: "Active",
  },
  {
    id: 3,
    code: "FESTIVE25",
    type: "Percentage",
    value: 25,
    minOrder: 1500,
    used: 50,
    limit: 50,
    expiry: "01 Jul 2026",
    status: "Expired",
  },
];

function CouponTable({ search }) {
  const [coupons] = useState(initialCoupons);

  const filteredCoupons = coupons.filter((coupon) =>
    coupon.code.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="overflow-x-auto rounded-2xl">

      <table className="w-full">

        <thead className="bg-gray-100">

          <tr>

            <th className="p-4 text-left">Code</th>
            <th>Type</th>
            <th>Discount</th>
            <th>Min Order</th>
            <th>Used</th>
            <th>Expiry</th>
            <th>Status</th>
            <th className="text-center">Actions</th>

          </tr>

        </thead>

        <tbody>

          {filteredCoupons.map((coupon) => (

            <tr
              key={coupon.id}
              className="border-b hover:bg-gray-50"
            >

              <td className="p-4 font-semibold">
                {coupon.code}
              </td>

              <td>{coupon.type}</td>

              <td>
                {coupon.type === "Percentage"
                  ? `${coupon.value}%`
                  : `₹${coupon.value}`}
              </td>

              <td>₹{coupon.minOrder}</td>

              <td>
                {coupon.used}/{coupon.limit}
              </td>

              <td>{coupon.expiry}</td>

              <td>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    coupon.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {coupon.status}
                </span>

              </td>

              <td>

                <div className="flex justify-center gap-4">

                  <Link
                    to={`/admin/coupons/edit/${coupon.id}`}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <FiEdit size={18} />
                  </Link>

                  <button className="text-red-600 hover:text-red-800">
                    <FiTrash2 size={18} />
                  </button>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

      {filteredCoupons.length === 0 && (
        <div className="text-center py-10 text-gray-500">
          No coupons found.
        </div>
      )}

    </div>
  );
}

export default CouponTable;