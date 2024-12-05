import React from "react";

const AwardsPagesRavindra = () => {
  const awards = [
    {
      title: "Astrologer Nikhil Sharma Receives Award From Actress Nora Fatehi",
      date: "January 30, 2024",
      points: [
        "Awarded the 'Champion of Change' Award 2023.",
        "Recognized for exceptional expertise in astrology and community service.",
        "Presented by actress Nora Fatehi at the Champions of Change Awards in Mumbai.",
        "Award celebrates his impact in providing guidance and helping many navigate life’s challenges.",
      ],
      imgSrc: "public/images/gettingAward.jpg",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-800",
    },
    {
      title: 'National Award for the "Best Astrologer in India" from Actor Sonu Sood',
      date: "October 1, 2022",
      points: [
        "Honored as the 'Best Astrologer in India'.",
        "Presented by actor Sonu Sood in a grand ceremony.",
        "Acknowledged for years of dedicated service and accurate predictions.",
        "Award celebrates his influence in helping individuals find clarity through astrology.",
      ],
      imgSrc: "public/images/gettingAwardFromSonu.jpg",
      bgColor: "bg-blue-100",
      textColor: "text-blue-800",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 my-8">
        Awards & Achievements
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {awards.map((award, index) => (
          <div
            key={index}
            className={`border rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ${award.bgColor}`}
          >
            <img
              src={award.imgSrc}
              alt={award.title}
              className="w-full h-48 object-cover"
            />
            <div className={`p-4 ${award.textColor}`}>
              <h2 className="text-xl font-bold mb-2">{award.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{award.date}</p>
              <ul className="list-disc list-inside space-y-2">
                {award.points.map((point, i) => (
                  <li key={i} className="text-gray-800">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardsPagesRavindra;
