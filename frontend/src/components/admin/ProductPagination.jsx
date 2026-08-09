import {
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

function ProductPagination({
  page,
  setPage,
  totalPages,
}) {
  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const nextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6">

      <p className="text-gray-500">
        Page <span className="font-semibold">{page}</span> of{" "}
        <span className="font-semibold">{totalPages}</span>
      </p>

      <div className="flex items-center gap-2">

        <button
          onClick={previousPage}
          disabled={page === 1}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition
          ${
            page === 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-100"
          }`}
        >
          <FiChevronLeft />
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setPage(index + 1)}
            className={`w-10 h-10 rounded-xl transition
            ${
              page === index + 1
                ? "bg-green-700 text-white"
                : "border hover:bg-gray-100"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={nextPage}
          disabled={page === totalPages}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition
          ${
            page === totalPages
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-100"
          }`}
        >
          Next
          <FiChevronRight />
        </button>

      </div>

    </div>
  );
}

export default ProductPagination;