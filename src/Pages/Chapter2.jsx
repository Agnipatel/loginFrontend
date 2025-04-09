import React, { useEffect, useState } from "react";
import axios from "axios";

const ChapterTwo = () => {
  const [verse1, setVerse1] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log("hello");

  useEffect(() => {
    const fetchVerse1 = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/chapter2");
        setVerse1(res.data);
      } catch (error) {
        console.error("Error fetching Chapter 2 verses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVerse1();
  }, []);

  if (loading) {
    return <div className="p-4 text-lg">Loading verses...</div>;
  }

  return (
    <div className="p-4 space-y-6">
      {verse1.map((verse) => (
        <div key={verse.number} className="border p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Verse {verse.number}</h2>
          <p className="text-lg font-sanskrit mt-2">{verse.sanskrit}</p>
          <p className="text-base mt-2 text-gray-700"><strong>Hindi:</strong> {verse.hindi}</p>
          <p className="text-base mt-1 text-gray-700"><strong>English:</strong> {verse.english}</p>
        </div>
      ))}
    </div>
  );
};

export default ChapterTwo;
