


import React from "react";

const CourseWhyAia = ({ heading, backgroundImage, items }) => {
  return (
    <div className="max-w-340 mx-auto">
      <div
        className="w-full py-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Heading */}
        <div className="text-center mb-1 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {heading}
          </h2>
        </div>

        {/* Cards */}
        <div className="md:flex justify-center">
          {items.map((item, i) => (
            <DiamondCard
              key={i}
              img={item.img}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseWhyAia;


const DiamondCard = ({ img, title }) => (
  <div className="group w-60 h-80 flex flex-col items-center justify-center">
    {/* Diamond Container */}
    <div className="relative w-40 h-40">
      <div
        className="
          absolute inset-0 rotate-45 rounded-xl
          border-2 border-gray-300
          transition-all duration-500
          group-hover:-translate-y-3 group-hover:border-blue-600 group-hover:shadow-lg
          group-hover:bg-linear-to-br group-hover:from-blue-50 group-hover:via-white group-hover:to-blue-50 
        "
      >
        {/* Content inside diamond */}
        <div className="absolute inset-0 -rotate-45 flex flex-col items-center justify-center p-4">
          <div className="w-20 h-20 bg-linear-to-br from-blue-50 to-indigo-100 rounded-full shadow flex items-center justify-center mb-3">
            <img
              src={img}
              alt={title}
              className="max-w-14 max-h-14 object-contain"
            />
          </div>
          <h3 className="text-sm font-semibold text-gray-900 text-center mb-1">{title}</h3>
      
        </div>
      </div>
    </div>
    
  
  </div>
);
