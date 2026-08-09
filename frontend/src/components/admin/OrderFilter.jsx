function OrderFilter({
  status,
  setStatus,
}) {
  return (
    <select
      value={status}
      onChange={(e) => setStatus(e.target.value)}
      className="border rounded-xl p-3 focus:ring-2 focus:ring-green-600 outline-none"
    >
      <option value="All">All Orders</option>
      <option value="Pending">Pending</option>
      <option value="Processing">Processing</option>
      <option value="Shipped">Shipped</option>
      <option value="Delivered">Delivered</option>
      <option value="Cancelled">Cancelled</option>
    </select>
  );
}

export default OrderFilter;