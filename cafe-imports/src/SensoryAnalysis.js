function SensoryAnalysis({ analysis }) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold">Sensory Analysis</h2>
        <ul>
          {analysis.map(attr => (
            <li key={attr.name}>
              <strong>{attr.name}</strong>: {attr.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }