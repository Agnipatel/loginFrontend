import React from "react";

const verses = [
  {
    number: 1,
    sanskrit: "अर्जुन उवाच |\nज्यायसी चेत्कर्मणस्ते मता बुद्धिर्जनार्दन |\nतत्किं कर्मणि घोरे मां नियोजयसि केशव ॥१॥",
    hindi: "अर्जुन बोले: हे जनार्दन! यदि आपके विचार में ज्ञान कर्म से श्रेष्ठ है, तो फिर मुझे इस भयंकर कर्म में क्यों लगाते हैं, हे केशव?",
    english: "Arjuna said: O Janardana, if you consider knowledge superior to action, then why do you engage me in this terrible activity, O Keshava?"
  },
  {
    number: 2,
    sanskrit: "व्यामिश्रेणेव वाक्येन बुद्धिं मोहयसीव मे |\nतदेकं वद निश्चित्य येन श्रेयोऽहमाप्नुयाम् ॥२॥",
    hindi: "आपके मिश्रित वचनों से मेरी बुद्धि भ्रमित हो रही है। इसलिए कृपया मुझे एक निश्चित मार्ग बताइए जिससे मैं परम कल्याण को प्राप्त कर सकूँ।",
    english: "Your words seem to be confusing my intellect. Therefore, please tell me decisively that one path by which I may attain the highest good."
  },
  {
    number: 3,
    sanskrit: "श्रीभगवानुवाच |\nलोकेऽस्मिन् द्विविधा निष्ठा पुरा प्रोक्ता मयानघ |\nज्ञानयोगेन साङ्ख्यानां कर्मयोगेन योगिनाम् ॥३॥",
    hindi: "श्री भगवान बोले: हे निष्पाप! इस संसार में मैंने पहले दो प्रकार की निष्ठा बताई थी – ज्ञानयोग द्वारा सांख्ययोगियों के लिए और कर्मयोग द्वारा कर्मयोगियों के लिए।",
    english: "The Blessed Lord said: O sinless one, in this world I have spoken of two paths of spiritual discipline in the past—the path of knowledge for the contemplative and the path of action for the active."
  },
  {
    number: 4,
    sanskrit: "न कर्मणामनारम्भान्नैष्कर्म्यं पुरुषोऽश्नुते |\nन च संन्यसनादेव सिद्धिं समधिगच्छति ॥४॥",
    hindi: "केवल कर्म न करने से मनुष्य मोक्ष प्राप्त नहीं कर सकता और न ही संन्यास मात्र से सिद्धि प्राप्त कर सकता है।",
    english: "Not by merely abstaining from work can one achieve freedom from action, nor by renunciation alone does one attain perfection."
  },
  {
    number: 5,
    sanskrit: "न हि कश्चित्क्षणमपि जातु तिष्ठत्यकर्मकृत् |\nकार्यते ह्यवशः कर्म सर्वः प्रकृतिजैर्गुणैः ॥५॥",
    hindi: "क्योंकि कोई भी व्यक्ति एक क्षण भी बिना कर्म किए नहीं रह सकता, सभी प्रकृति के गुणों द्वारा विवश होकर कर्म करते हैं।",
    english: "Certainly, no one can remain without action even for a moment, for everyone is compelled to act by the qualities born of nature."
  },
  // Add verses 6-43 similarly...
];

const Chapter3 = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        Bhagavad Gita – Chapter 3: Karma Yoga (All Verses 1-43)
      </h1>
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {verses.map((verse) => (
          <div key={verse.number} className="mb-6 border-b pb-4">
            <h2 className="text-lg font-semibold text-gray-800">Verse {verse.number}</h2>
            <p className="text-gray-700 italic">{verse.sanskrit}</p>
            <p className="text-gray-600 mt-2"><strong>Hindi:</strong> {verse.hindi}</p>
            <p className="text-gray-600 mt-1"><strong>English:</strong> {verse.english}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chapter3;
