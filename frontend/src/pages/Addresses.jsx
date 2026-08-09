import { useContext, useState } from "react";
import { FiPlus } from "react-icons/fi";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import DashboardHeader from "../components/dashboard/DashboardHeader";

import AddressCard from "../components/address/AddressCard";
import AddressForm from "../components/address/AddressForm";

import { AddressContext } from "../context/AddressContext";

function Addresses() {
  const {
    addresses,
    addAddress,
    updateAddress,
    deleteAddress,
    setDefaultAddress,
  } = useContext(AddressContext);

  const [showForm, setShowForm] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);

  const handleSave = (address) => {
    if (editingAddress) {
      updateAddress(address);
    } else {
      addAddress(address);
    }

    setEditingAddress(null);
    setShowForm(false);
  };

  const handleEdit = (address) => {
    setEditingAddress(address);
    setShowForm(true);
  };

  const handleCancel = () => {
    setEditingAddress(null);
    setShowForm(false);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this address?"
    );

    if (confirmDelete) {
      deleteAddress(id);
    }
  };

  return (
    <>
      <Navbar />

      <section className="bg-gray-100 min-h-screen py-10">
        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-4 gap-8">

          <DashboardSidebar />

          <div className="lg:col-span-3 space-y-8">

            <DashboardHeader />

            <div className="bg-white rounded-3xl shadow-lg p-8">

              {/* Header */}

              <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">

                <div>
                  <h2 className="text-3xl font-bold">
                    Saved Addresses
                  </h2>

                  <p className="text-gray-500 mt-2">
                    Manage your delivery addresses.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setEditingAddress(null);
                    setShowForm(true);
                  }}
                  className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl flex items-center gap-2"
                >
                  <FiPlus />
                  Add Address
                </button>

              </div>

              {/* Address Form */}

              {showForm && (
                <div className="bg-gray-50 border rounded-2xl p-6 mb-8">

                  <h3 className="text-2xl font-bold mb-6">
                    {editingAddress ? "Edit Address" : "Add New Address"}
                  </h3>

                  <AddressForm
                    editingAddress={editingAddress}
                    onSave={handleSave}
                    onCancel={handleCancel}
                  />

                </div>
              )}

              {/* Address List */}

              {addresses.length === 0 ? (

                <div className="text-center py-20">

                  <h3 className="text-2xl font-bold text-gray-500">
                    No Saved Addresses
                  </h3>

                  <p className="mt-3 text-gray-400">
                    Click <strong>Add Address</strong> to save your first delivery address.
                  </p>

                </div>

              ) : (

                <div className="grid md:grid-cols-2 gap-6">

                  {addresses.map((address) => (

                    <AddressCard
                      key={address.id}
                      address={address}
                      onEdit={handleEdit}
                      onDelete={handleDelete}
                      onSetDefault={setDefaultAddress}
                    />

                  ))}

                </div>

              )}

            </div>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Addresses;