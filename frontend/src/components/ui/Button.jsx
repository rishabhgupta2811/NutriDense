function Button({
  children,
  variant = "primary",
  onClick,
  className = "",
}) {
  const base =
    "px-6 py-3 rounded-xl font-semibold transition duration-300";

  const styles = {
    primary:
      "bg-green-700 text-white hover:bg-green-800",

    outline:
      "border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white",

    secondary:
      "bg-gray-900 text-white hover:bg-gray-700",
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;