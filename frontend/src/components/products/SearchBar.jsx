import { FiSearch } from "react-icons/fi";

function SearchBar({ search, setSearch }) {
  return (
    <div className="relative mb-8">
      <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />

      <input
        type="text"
        placeholder="Search products, brands..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full pl-12 pr-4 py-4 border rounded-2xl shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-green-600"
      />
    </div>
  );
}

export default SearchBar;