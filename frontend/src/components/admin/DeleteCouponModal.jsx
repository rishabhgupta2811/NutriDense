function DeleteCouponModal({
  isOpen,
  onClose,
  onDelete,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

      <div className="bg-white rounded-3xl p-8 w-full max-w-md">

        <h2 className="text-2xl font-bold">
          Delete Coupon
        </h2>

        <p className="text-gray-500 mt-4">
          Are you sure you want to delete this coupon?
        </p>

        <div className="flex justify-end gap-3 mt-8">

          <button
            onClick={onClose}
            className="border px-5 py-2 rounded-xl"
          >
            Cancel
          </button>

          <button
            onClick={onDelete}
            className="bg-red-600 text-white px-5 py-2 rounded-xl"
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}

export default DeleteCouponModal;