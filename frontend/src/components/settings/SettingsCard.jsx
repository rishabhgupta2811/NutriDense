function SettingsCard({ title, description, children }) {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">

      <h2 className="text-2xl font-bold text-gray-800">
        {title}
      </h2>

      <p className="text-gray-500 mt-2 mb-6">
        {description}
      </p>

      {children}

    </div>
  );
}

export default SettingsCard;