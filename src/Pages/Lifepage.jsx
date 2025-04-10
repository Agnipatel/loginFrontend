import React from "react";

const lifeTeachings = [
  {
    title: "Clarity in Decision Making",
    message: "Teaches how to make the right choices in confusing or stressful situations."
  },
  {
    title: "Emotional Balance",
    message: "Guides us to stay calm and centered in both success and failure."
  },
  {
    title: "Purposeful Living",
    message: "Emphasizes discovering your duty (dharma) and living with intention."
  },
  {
    title: "Freedom from Attachment",
    message: "Helps overcome anxiety by letting go of excessive attachment to outcomes."
  },
];

const Life = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen p-6"
      style={{ backgroundImage: "url('https://img.freepik.com/free-photo/nature-landscape-with-hand-holding-frame_23-2149389968.jpg?t=st=1744267298~exp=1744270898~hmac=91b041eed93f3c0afdd28db14a8c2e4a9ff51469c0b67a93685a6a5717c8e25b&w=1380')" }} // Make sure the image is in public/images/
    >
      <div className="max-w-3xl mx-auto space-y-2  backdrop-blur-md rounded-xl p-2 shadow-lg">
        <h1 className="text-4xl font-bold text-center text-indigo-800 mb-6 drop-shadow">
          Life Teachings from the Bhagavad Gita
        </h1>
        {lifeTeachings.map((item, index) => (
          <div
            key={index}
            className="bg-white border-l-4 border-indigo-500 rounded-md p-4 shadow-sm transition-transform hover:scale-[1.01]"
          >
            <h2 className="text-xl font-semibold text-indigo-700">{item.title}</h2>
            <p className="mt-2 text-gray-700 italic">"{item.message}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Life;
