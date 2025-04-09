import { Link } from "react-router-dom";
import gitaImage from "../assets/gita.avif";

const GitaPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Bhagavad Gita</h1>

      {/* Image */}
      <img src={gitaImage} alt="Bhagavad Gita" className="w-full max-w-lg rounded-lg shadow-md" />

      {/* Content Section */}
      <div className="bg-white p-6 mt-6 rounded-lg shadow-lg w-full max-w-2xl text-gray-700">
        <h2 className="text-xl font-semibold mb-2">About the Bhagavad Gita</h2>
        <p className="mb-4">
          The Bhagavad Gita is a 700-verse Hindu scripture that is part of the epic **Mahabharata**. 
          It is a conversation between Lord Krishna and Arjuna, teaching profound lessons on **duty, devotion, and righteousness**.
        </p>

        <h3 className="text-lg font-semibold mb-2">Key Teachings</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Karma Yoga:</strong> Perform your duty selflessly without attachment to results.</li>
          <li><strong>Bhakti Yoga:</strong> Devotion to God leads to liberation.</li>
          <li><strong>Jnana Yoga:</strong> Knowledge and wisdom guide the soul towards truth.</li>
        </ul>
      </div>

      {/* Back to Home */}
      <Link to="/" className="mt-6 text-blue-500 hover:underline">← Back to Home</Link>
    </div>
  );
};

export default GitaPage;
