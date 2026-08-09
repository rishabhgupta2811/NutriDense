import {
  FiEdit2,
  FiTrash2,
  FiCheckCircle,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";

function AddressCard({
  address,
  onEdit,
  onDelete,
  onSetDefault,
}) {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 border hover:shadow-xl transition">

      {/* Header */}

      <div className="flex justify-between items-start">

        <div>

          <h2 className="text-xl font-bold">
            {address.fullName}
          </h2>

          <div className="flex items-center gap-2 mt-2 text-gray-600">

            <FiPhone />

            {address.phone}

          </div>

        </div>

        {address.isDefault && (
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
            Default
          </span>
        )}

      </div>

      {/* Address */}

      <div className="flex gap-3 mt-5">

        <FiMapPin className="text-green-700 mt-1" />

        <p className="text-gray-600 leading-7">
          {address.house}, {address.area}
          <br />
          {address.landmark && (
            <>
              {address.landmark}
              <br />
            </>
          )}
          {address.city}, {address.state} - {address.pincode}
        </p>

      </div>

      {/* Address Type */}

      <div className="mt-5">

        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
          {address.type}
        </span>

      </div>

      {/* Actions */}

      <div className="grid grid-cols-3 gap-3 mt-6">

        <button
          onClick={() => onEdit(address)}
          className="border rounded-xl py-3 flex justify-center items-center gap-2 hover:bg-gray-100"
        >
          <FiEdit2 />
          Edit
        </button>

        <button
          onClick={() => onDelete(address.id)}
          className="border rounded-xl py-3 flex justify-center items-center gap-2 text-red-600 hover:bg-red-50"
        >
          <FiTrash2 />
          Delete
        </button>

        {!address.isDefault && (
          <button
            onClick={() => onSetDefault(address.id)}
            className="bg-green-700 hover:bg-green-800 text-white rounded-xl py-3 flex justify-center items-center gap-2"
          >
            <FiCheckCircle />
            Default
          </button>
        )}

      </div>

    </div>
  );
}

export default AddressCard;