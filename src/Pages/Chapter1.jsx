import React, { useState, useEffect } from "react";

const Chapter1 = () => {
  const [verses, setVerses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVerses = async () => {
      try {
        const response = await fetch("http://localhost:5000/verses"); // Adjust to your actual API URL
        if (!response.ok) {
          throw new Error("Failed to fetch verses");
        }
        const data = await response.json();
        setVerses(data);
      } catch (err) {3
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    

    fetchVerses();
  }, []);

  if (loading) return <p className="text-center mt-6 text-blue-600">Loading verses...</p>;
  if (error) return <p className="text-center mt-6 text-red-600">Error: {error}</p>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        Bhagavad Gita – Chapter 1: Arjuna Visada Yoga
      </h1>

      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {verses.map((verse) => (
          <div key={verse.number || verse._id} className="mb-6 border-b pb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Verse {verse.number || "N/A"}
            </h2>

            <p className="text-gray-700 italic whitespace-pre-line">{verse.sanskrit}</p>
            <p className="text-gray-600 mt-2">
              <strong>Hindi:</strong> {verse.hindi}
            </p>
            <p className="text-gray-600 mt-1">
              <strong>English:</strong> {verse.english}
            </p>

            {verse.image && (
              <img
                src={verse.image}
                alt={`Image for Verse ${verse.number || "N/A"}`}
                className="w-full mt-4 rounded-lg object-cover"
              />
            )}

            {verse.video && (
              <div className="mt-4">
                <iframe
                  className="w-full h-64 rounded-lg"
                  src={verse.video}
                  title={`Verse ${verse.number || "N/A"} Video`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chapter1;
