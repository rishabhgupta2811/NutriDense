function SectionTitle({
  title,
  subtitle,
  center = true,
}) {
  return (
    <div className={center ? "text-center mb-12" : "mb-12"}>

      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
        {title}
      </h2>

      <p className="text-gray-500 mt-4 text-lg">
        {subtitle}
      </p>

    </div>
  );
}

export default SectionTitle;