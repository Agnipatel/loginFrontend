import React from "react";

const lifeTeachings = [
  {
    title: "Detachment",
    message: "You have the right to work, but never to the fruit of the work. – Bhagavad Gita 2.47"
  },
  {
    title: "Inner Peace",
    message: "Peace comes from within. Do not seek it without. – Bhagavad Gita 5.29"
  },
  {
    title: "Self-Realization",
    message: "The soul is neither born, and nor does it die. – Bhagavad Gita 2.20"
  },
  {
    title: "Equality",
    message: "One who sees inaction in action, and action in inaction, is intelligent among men. – Bhagavad Gita 4.18"
  },
];

const Life = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen p-6"
      style={{ backgroundImage: "url('https://d3cntrkybu93yz.cloudfront.net/production/default/cache/file/F177A34C-EA77-450F-BE3D18FBC46D8AA0.png')" }} // Make sure the image is in public/images/
    >
      <div className="max-w-3xl mx-auto space-y-6 bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-lg">
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
