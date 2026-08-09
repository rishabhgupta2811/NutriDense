import { FiAlertTriangle, FiTrash2, FiX } from "react-icons/fi";

function DeleteProductModal({
  isOpen,
  onClose,
  onConfirm,
  productName,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">

      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8">

        {/* Icon */}

        <div className="w-16 h-16 mx-auto rounded-full bg-red-100 flex items-center justify-center">

          <FiAlertTriangle
            className="text-red-600"
            size={30}
          />

        </div>

        {/* Title */}

        <h2 className="text-2xl font-bold text-center mt-6">
          Delete Product
        </h2>

        {/* Message */}

        <p className="text-gray-500 text-center mt-3">
          Are you sure you want to delete
        </p>

        <p className="text-center font-semibold text-red-600 mt-1">
          {productName}
        </p>

        <p className="text-gray-500 text-center mt-3">
          This action cannot be undone.
        </p>

        {/* Buttons */}

        <div className="flex gap-4 mt-8">

          <button
            onClick={onClose}
            className="flex-1 border rounded-xl py-3 hover:bg-gray-100 flex items-center justify-center gap-2"
          >
            <FiX />
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white rounded-xl py-3 flex items-center justify-center gap-2"
          >
            <FiTrash2 />
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}

export default DeleteProductModal;