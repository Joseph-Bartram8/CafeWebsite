function CoffeeOrigin({ origin }) {
    return (
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">{origin.country}</h2>
        <p>{origin.description}</p>
        {/* Include more details like region, profile, etc. */}
      </div>
    );
  }