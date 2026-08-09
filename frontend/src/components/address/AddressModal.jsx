import AddressForm from "./AddressForm";

function AddressModal({
  isOpen,
  editingAddress,
  onSave,
  onClose,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">

      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl p-8 relative">

        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-2xl"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold mb-6">
          {editingAddress ? "Edit Address" : "Add New Address"}
        </h2>

        <AddressForm
          editingAddress={editingAddress}
          onSave={onSave}
          onCancel={onClose}
        />

      </div>

    </div>
  );
}

export default AddressModal;