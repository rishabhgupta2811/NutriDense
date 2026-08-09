import { useState, useEffect } from "react";

const initialForm = {
  fullName: "",
  phone: "",
  alternatePhone: "",
  house: "",
  area: "",
  landmark: "",
  city: "",
  state: "",
  pincode: "",
  type: "Home",
  isDefault: false,
};

function AddressForm({ onSave, editingAddress, onCancel }) {
  const [formData, setFormData] = useState(initialForm);

  useEffect(() => {
    if (editingAddress) {
      setFormData(editingAddress);
    } else {
      setFormData(initialForm);
    }
  }, [editingAddress]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.phone ||
      !formData.house ||
      !formData.area ||
      !formData.city ||
      !formData.state ||
      !formData.pincode
    ) {
      alert("Please fill all required fields.");
      return;
    }

    onSave(formData);

    setFormData(initialForm);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      <div className="grid md:grid-cols-2 gap-5">

        <input
          type="text"
          name="fullName"
          placeholder="Full Name *"
          value={formData.fullName}
          onChange={handleChange}
          className="border rounded-xl p-3 focus:ring-2 focus:ring-green-600 outline-none"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number *"
          value={formData.phone}
          onChange={handleChange}
          className="border rounded-xl p-3 focus:ring-2 focus:ring-green-600 outline-none"
        />

        <input
          type="tel"
          name="alternatePhone"
          placeholder="Alternate Phone Number"
          value={formData.alternatePhone}
          onChange={handleChange}
          className="border rounded-xl p-3 focus:ring-2 focus:ring-green-600 outline-none"
        />

        <input
          type="text"
          name="house"
          placeholder="House / Flat No. *"
          value={formData.house}
          onChange={handleChange}
          className="border rounded-xl p-3 focus:ring-2 focus:ring-green-600 outline-none"
        />

        <input
          type="text"
          name="area"
          placeholder="Area / Street *"
          value={formData.area}
          onChange={handleChange}
          className="border rounded-xl p-3 focus:ring-2 focus:ring-green-600 outline-none"
        />

        <input
          type="text"
          name="landmark"
          placeholder="Landmark"
          value={formData.landmark}
          onChange={handleChange}
          className="border rounded-xl p-3 focus:ring-2 focus:ring-green-600 outline-none"
        />

        <input
          type="text"
          name="city"
          placeholder="City *"
          value={formData.city}
          onChange={handleChange}
          className="border rounded-xl p-3 focus:ring-2 focus:ring-green-600 outline-none"
        />

        <input
          type="text"
          name="state"
          placeholder="State *"
          value={formData.state}
          onChange={handleChange}
          className="border rounded-xl p-3 focus:ring-2 focus:ring-green-600 outline-none"
        />

        <input
          type="text"
          name="pincode"
          placeholder="PIN Code *"
          value={formData.pincode}
          onChange={handleChange}
          className="border rounded-xl p-3 focus:ring-2 focus:ring-green-600 outline-none"
        />

        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="border rounded-xl p-3 focus:ring-2 focus:ring-green-600 outline-none"
        >
          <option>Home</option>
          <option>Work</option>
          <option>Other</option>
        </select>

      </div>

      <label className="flex items-center gap-3">

        <input
          type="checkbox"
          name="isDefault"
          checked={formData.isDefault}
          onChange={handleChange}
        />

        Set as Default Address

      </label>

      <div className="flex gap-4">

        <button
          type="submit"
          className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl"
        >
          {editingAddress ? "Update Address" : "Save Address"}
        </button>

        <button
          type="button"
          onClick={onCancel}
          className="border px-6 py-3 rounded-xl hover:bg-gray-100"
        >
          Cancel
        </button>

      </div>

    </form>
  );
}

export default AddressForm;