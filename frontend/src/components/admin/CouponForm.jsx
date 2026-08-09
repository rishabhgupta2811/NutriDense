import { useState, useEffect } from "react";

function CouponForm({ initialData, onSubmit }) {
  const [coupon, setCoupon] = useState({
    code: "",
    type: "Percentage",
    value: "",
    minOrder: "",
    usageLimit: "",
    expiry: "",
    status: "Active",
  });

  useEffect(() => {
    if (initialData) {
      setCoupon(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    setCoupon({
      ...coupon,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!coupon.code || !coupon.value || !coupon.expiry) {
      alert("Please fill all required fields");
      return;
    }

    onSubmit(coupon);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl shadow-lg p-8 space-y-6"
    >
      <div className="grid md:grid-cols-2 gap-6">

        <div>
          <label className="font-medium">
            Coupon Code
          </label>

          <input
            type="text"
            name="code"
            value={coupon.code}
            onChange={handleChange}
            className="w-full border rounded-xl p-3 mt-2"
          />
        </div>

        <div>
          <label className="font-medium">
            Discount Type
          </label>

          <select
            name="type"
            value={coupon.type}
            onChange={handleChange}
            className="w-full border rounded-xl p-3 mt-2"
          >
            <option>Percentage</option>
            <option>Flat</option>
          </select>
        </div>

        <div>
          <label className="font-medium">
            Discount Value
          </label>

          <input
            type="number"
            name="value"
            value={coupon.value}
            onChange={handleChange}
            className="w-full border rounded-xl p-3 mt-2"
          />
        </div>

        <div>
          <label className="font-medium">
            Minimum Order
          </label>

          <input
            type="number"
            name="minOrder"
            value={coupon.minOrder}
            onChange={handleChange}
            className="w-full border rounded-xl p-3 mt-2"
          />
        </div>

        <div>
          <label className="font-medium">
            Usage Limit
          </label>

          <input
            type="number"
            name="usageLimit"
            value={coupon.usageLimit}
            onChange={handleChange}
            className="w-full border rounded-xl p-3 mt-2"
          />
        </div>

        <div>
          <label className="font-medium">
            Expiry Date
          </label>

          <input
            type="date"
            name="expiry"
            value={coupon.expiry}
            onChange={handleChange}
            className="w-full border rounded-xl p-3 mt-2"
          />
        </div>

      </div>

      <div>
        <label className="font-medium">
          Status
        </label>

        <select
          name="status"
          value={coupon.status}
          onChange={handleChange}
          className="w-full border rounded-xl p-3 mt-2"
        >
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-green-600 text-white px-8 py-3 rounded-xl hover:bg-green-700"
      >
        Save Coupon
      </button>
    </form>
  );
}

export default CouponForm;