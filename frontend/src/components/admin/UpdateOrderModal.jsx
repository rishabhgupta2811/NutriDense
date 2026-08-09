import { useState } from "react";

function UpdateOrderModal({
  isOpen,
  onClose,
  currentStatus,
  onSave,
}) {
  const [status, setStatus] = useState(currentStatus);

  if (!isOpen) return null;

  const handleSave = () => {
    onSave(status);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-3xl w-full max-w-md p-8">

        <h2 className="text-2xl font-bold mb-6">
          Update Order Status
        </h2>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full border rounded-xl p-3 mb-6"
        >
          <option>Pending</option>
          <option>Processing</option>
          <option>Shipped</option>
          <option>Delivered</option>
          <option>Cancelled</option>
        </select>

        <div className="flex justify-end gap-3">

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl border"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="px-5 py-2 rounded-xl bg-green-600 text-white"
          >
            Save
          </button>

        </div>

      </div>

    </div>
  );
}

export default UpdateOrderModal;