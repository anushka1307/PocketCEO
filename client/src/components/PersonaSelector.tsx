import React, { useState } from "react";

type Persona = {
  name: string;
  tagline: string;
  emoji: string;
  colour: string;
};

const personas: Persona[] = [
  {
    name: "Ava",
    tagline: "Your strategic mastermind",
    emoji: "🧠",
    colour: "border-blue-500 hover:bg-blue-100",
  },
  {
    name: "Blaze",
    tagline: "Hype beast with hustle",
    emoji: "🔥",
    colour: "border-red-500 hover:bg-red-100",
  },
  {
    name: "Otis",
    tagline: "Your emotional support startup buddy",
    emoji: "🐾",
    colour: "border-emerald-500 hover:bg-emerald-100",
  },
];

const PersonaSelector: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-6">
      {/* Main cards container */}
      <div className="flex justify-center items-center gap-8 mb-12">
        {personas.map((persona, index) => (
          <div
            key={persona.name}
            className={`cursor-pointer bg-white rounded-3xl p-8 text-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
              selected === persona.name ? "ring-4 ring-blue-500 ring-opacity-50 scale-105" : ""
            }`}
            style={{
              width: "280px",
              height: "360px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
            onClick={() => setSelected(persona.name)}
          >
            {/* Emoji container with background */}
            <div className="flex-1 flex items-center justify-center">
              <div className="text-8xl mb-4 p-4 rounded-2xl bg-gray-50">
                {persona.emoji}
              </div>
            </div>
            
            {/* Content section */}
            <div className="flex-shrink-0">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">{persona.name}</h2>
              
              {/* Placeholder lines like in the image */}
              <div className="space-y-2 mb-4">
                <div className="h-2 bg-gray-200 rounded-full w-full"></div>
                <div className="h-2 bg-gray-200 rounded-full w-4/5 mx-auto"></div>
                <div className="h-2 bg-gray-200 rounded-full w-3/5 mx-auto"></div>
              </div>
              
              <p className="text-gray-600 text-sm font-medium">{persona.tagline}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center space-x-3 mb-8">
        {personas.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === 0 ? "bg-gray-600" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      {/* Selection feedback */}
      {selected && (
        <div className="mt-4 px-6 py-3 bg-white rounded-full shadow-md">
          <span className="text-lg text-gray-700 font-medium">
            ✅ You've selected <span className="font-bold text-blue-600">{selected}</span>!
          </span>
        </div>
      )}
    </div>
  );
};

export default PersonaSelector;