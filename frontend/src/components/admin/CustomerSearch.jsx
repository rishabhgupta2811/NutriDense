import { FiSearch } from "react-icons/fi";

function CustomerSearch({
  search,
  setSearch,
}) {
  return (
    <div className="relative">

      <FiSearch
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        placeholder="Search customer..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-green-600 outline-none"
      />

    </div>
  );
}

export default CustomerSearch;