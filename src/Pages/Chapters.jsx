import React from "react";


const ArjunaVisadaYoga = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {/* Title Section */}
      <div className="text-center">
        <h1 className="text-5xl font-bold text-blue-700 mb-4">अर्जुन विषाद योग</h1>
        <h2 className="text-2xl text-gray-600 mb-6">(Chapter 1 - The Yoga of Arjuna’s Dilemma)</h2>
      </div>

      {/* Main Content Box */}
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-4xl w-full lg:w-3/4 xl:w-2/3">
        
        {/* Introduction */}
        <p className="text-gray-700 text-lg text-justify">
          <b>Arjuna Visada Yoga</b> is the first chapter of the Bhagavad Gita, where Arjuna, overwhelmed by sorrow and doubt on the battlefield of Kurukshetra, refuses to fight. This emotional crisis sets the stage for Lord Krishna’s teachings, leading to the rest of the Bhagavad Gita.
        </p>

        {/* Scrollable Verses Section */}
        <div className="mt-6 max-h-[400px] overflow-y-auto border rounded-lg p-4 bg-gray-50">
          {/* Verse 1 */}
          <h3 className="text-lg font-semibold text-blue-600 mt-4">1. धृतराष्ट्र उवाच</h3>
          <p className="text-gray-800 mt-2">
            धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः |<br />
            मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय || 1 ||
          </p>
          <p className="text-gray-700 mt-2">
            <b>Translation:</b> Dhṛtarāṣṭra said: O Sañjaya, after gathering on the holy land of Kurukṣetra, what did my sons and the sons of Pāṇḍu do, being eager to fight?
          </p>

          {/* Verse 2 */}
          <h3 className="text-lg font-semibold text-blue-600 mt-4">2. सञ्जय उवाच</h3>
          <p className="text-gray-800 mt-2">
            दृष्ट्वा तु पाण्डवानीकं व्यूढं दुर्योधनस्तदा |<br />
            आचार्यमुपसंगम्य राजा वचनमब्रवीत् || 2 ||
          </p>
          <p className="text-gray-700 mt-2">
            <b>Translation:</b> Sañjaya said: O King, after seeing the army of the Pāṇḍavas arranged in military formation, Duryodhana approached his teacher (Droṇa) and spoke these words.
          </p>

          {/* Verse 3 */}
          <h3 className="text-lg font-semibold text-blue-600 mt-4">3. दुर्योधन उवाच</h3>
          <p className="text-gray-800 mt-2">
            पश्यैतां पाण्डुपुत्राणामाचार्य महतीं चमूम् |<br />
            व्यूढां द्रुपदपुत्रेण तव शिष्येण धीमता || 3 ||
          </p>
          <p className="text-gray-700 mt-2">
            <b>Translation:</b> Behold, O master, this mighty army of the sons of Pāṇḍu, arrayed in military formation by your talented disciple, the son of Drupada.
          </p>

          {/* More verses can be added here in a similar format */}
        </div>

        {/* Summary Section */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-blue-600">🌟 Summary of Chapter 1:</h3>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li><b>Dhṛtarāṣṭra’s Question:</b> He asks about the battle.</li>
            <li><b>Duryodhana’s Strategy:</b> He lists mighty warriors.</li>
            <li><b>Bhīṣma’s Support:</b> He blows his conch.</li>
            <li><b>Arjuna’s Breakdown:</b> He sees loved ones on both sides and feels sorrow.</li>
            <li><b>Arjuna’s Surrender:</b> He refuses to fight and sits in despair.</li>
          </ul>
        </div>

        {/* Read More Button */}
        <div className="flex justify-center mt-6">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
            Read Full Bhagavad Gita
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArjunaVisadaYoga;
