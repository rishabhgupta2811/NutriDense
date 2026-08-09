function Card({ children }) {
  return (
    <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
      {children}
    </div>
  );
}

export default Card;