import React from "react";

const verses = [
  {
    number: 1,
    sanskrit: "धृतराष्ट्र उवाच | धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः |\nमामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय ॥१॥",
    hindi: "धृतराष्ट्र बोले: हे संजय! धर्मभूमि कुरुक्षेत्र में एकत्र हुए मेरे और पांडु पुत्रों ने युद्ध की इच्छा से क्या किया?",
    english: "Dhritarashtra said: O Sanjaya, gathered on the holy field of Kurukshetra, eager to fight, what did my sons and the sons of Pandu do?",
    image: "https://via.placeholder.com/400",
    video: "https://www.youtube.com/embed/_9Gsy6c-UIA"
  },
  {
    number: 2,
    sanskrit: "सञ्जय उवाच | दृष्ट्वा तु पाण्डवानीकं व्यूढं दुर्योधनस्तदा |\nआचार्यमुपसंगम्य राजा वचनमब्रवीत् ॥२॥",
    hindi: "संजय बोले: तब राजा दुर्योधन ने पांडवों की सेना को व्यूहरचित देखकर अपने आचार्य के पास जाकर ये वचन कहे।",
    english: "Sanjaya said: Seeing the Pandava army arranged in military formation, King Duryodhana approached his teacher and spoke these words.",
    image: "https://via.placeholder.com/400",
    video: "https://www.youtube.com/embed/_9Gsy6c-UIA"
  },
  {
    number: 3,
    sanskrit: "पश्यैतां पाण्डुपुत्राणामाचार्य महतीं चमूम् |\nव्यूढां द्रुपदपुत्रेण तव शिष्येण धीमता ॥३॥",
    hindi: "हे आचार्य! देखिए पांडु पुत्रों की इस विशाल सेना को, जिसे आपके बुद्धिमान शिष्य द्रुपद के पुत्र ने व्यूहबद्ध किया है।",
    english: "O Teacher, behold this mighty army of the sons of Pandu, skillfully arranged by your intelligent disciple, the son of Drupada.",
    image: "https://via.placeholder.com/400",
    video: "https://www.youtube.com/embed/example3"
  }
];

const Chapter1 = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        Bhagavad Gita – Chapter 1: Arjuna Visada Yoga (All Verses)
      </h1>
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {verses.map((verse) => (
          <div key={verse.number} className="mb-6 border-b pb-4">
            <h2 className="text-lg font-semibold text-gray-800">Verse {verse.number}</h2>
            <p className="text-gray-700 italic">{verse.sanskrit}</p>
            <p className="text-gray-600 mt-2"><strong>Hindi:</strong> {verse.hindi}</p>
            <p className="text-gray-600 mt-1"><strong>English:</strong> {verse.english}</p>
            <img src={verse.image} alt={`Verse ${verse.number}`} className="w-full mt-4 rounded-lg" />
            <div className="mt-4">
              <iframe 
                width="100%" 
                height="250" 
                src={verse.video} 
                title={`Verse ${verse.number} Video`} 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chapter1;
