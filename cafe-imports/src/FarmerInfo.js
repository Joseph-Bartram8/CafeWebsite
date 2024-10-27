function FarmerInfo({ farmer }) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold">{farmer.name}</h2>
        <p>{farmer.story}</p>
        <img src={farmer.photo} alt={farmer.name} className="w-full h-auto my-4" />
        <a href={farmer.pdfLink} className="text-blue-500" download>Download Profile</a>
      </div>
    );
  }