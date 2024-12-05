import React from 'react';

const StatsSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-900 text-white py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold">Trusted by Clients Worldwide</h2>
        <p className="mt-4 max-w-md mx-auto text-gray-200">
          Explore how we’ve helped thousands align with their true paths through personalized astrology and guidance.
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-8">
        
        {/* Stat 1 */}
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 flex items-center justify-center bg-indigo-700 rounded-full mb-4 relative">
            <span 
              className="text-3xl font-bold absolute inset-0 flex items-center justify-center"
              style={{ backgroundImage: "url('https://kamleshyadav.com/wp/astrologer/demo3/wp-content/uploads/sites/4/2021/09/choose-1-01-1.png')" }}
            >
              80+
            </span>
          </div>
          <p className="text-lg font-medium">Expert Astrologers</p>
        </div>
        
        {/* Stat 2 */}
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 flex items-center justify-center bg-indigo-700 rounded-full mb-4 relative">
            <span 
              className="text-3xl font-bold absolute inset-0 flex items-center justify-center"
              style={{ backgroundImage: "url('https://kamleshyadav.com/wp/astrologer/demo3/wp-content/uploads/sites/4/2021/09/choose-1-01-1.png')" }}
            >
              50K+
            </span>
          </div>
          <p className="text-lg font-medium">Satisfied Clients</p>
        </div>
        
        {/* Stat 3 */}
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 flex items-center justify-center bg-indigo-700 rounded-full mb-4 relative">
            <span 
              className="text-3xl font-bold absolute inset-0 flex items-center justify-center"
              style={{ backgroundImage: "url('https://kamleshyadav.com/wp/astrologer/demo3/wp-content/uploads/sites/4/2021/09/choose-1-01-1.png')" }}
            >
              12+
            </span>
          </div>
          <p className="text-lg font-medium">Years of Experience</p>
        </div>
        
        {/* Stat 4 */}
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 flex items-center justify-center bg-indigo-700 rounded-full mb-4 relative">
            <span 
              className="text-3xl font-bold absolute inset-0 flex items-center justify-center"
              style={{ backgroundImage: "url('https://kamleshyadav.com/wp/astrologer/demo3/wp-content/uploads/sites/4/2021/09/choose-1-01-1.png')" }}
            >
              20+
            </span>
          </div>
          <p className="text-lg font-medium">Countries Served</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
