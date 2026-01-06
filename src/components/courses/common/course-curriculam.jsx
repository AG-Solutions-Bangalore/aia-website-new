import React, { useState } from "react";

const CourseCurriculum = ({ title, curriculumData }) => {
  const [activeTab, setActiveTab] = useState(curriculumData?.[0]?.id || null);

  const activeContent = curriculumData.find(
    (item) => item.id === activeTab
  );

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <div className="bg-[#0A2463] text-white text-center py-5 px-4 rounded-lg mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold">
              {title}
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-8">

          {/* Left Tabs */}
          <div className="w-full md:w-2/5 space-y-4">
            {curriculumData.map((item) => (
              <button
                key={item.id}
                onMouseEnter={() => setActiveTab(item.id)}
                className={`
                  w-full text-left p-5 rounded-bl-4xl rounded-tr-4xl transition-all duration-300
                  border
                  ${
                    activeTab === item.id
                      ? "bg-[#0A2463] text-white border-[#FF6B35]"
                      : "bg-white text-gray-800 border-gray-200 hover:bg-[#EFF6FF]"
                  }
                `}
              >
                <div className="flex items-center">
                  <div
                    className={`
                      w-10 h-10 rounded-full flex items-center justify-center mr-4 font-bold text-lg
                      ${
                        activeTab === item.id
                          ? "bg-[#0A2463] text-white"
                          : "bg-[#FF6B35] text-white"
                      }
                    `}
                  >
                    {item.id}
                  </div>
                  <span className="font-semibold text-base leading-tight">
                    {item.title}
                  </span>
                </div>

                <div
                  className={`
                    mt-3 h-1 rounded-full transition-all duration-300
                    ${
                      activeTab === item.id
                        ? "w-full bg-[#FF6B35]"
                        : "w-12 bg-[#0A2463]"
                    }
                  `}
                />
              </button>
            ))}
          </div>

          {/* Right Content */}
          <div className="w-full md:w-3/5">
            <div className="bg-white rounded-bl-4xl rounded-tr-4xl p-8 border border-gray-900 min-h-[400px] h-full">
              {activeContent?.content?.length ? (
                <div className="space-y-5">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Module {activeContent.id}: {activeContent.title}
                    </h3>
                    <div className="w-16 h-1 bg-[#0A2463] rounded-full" />
                  </div>

                  {activeContent.content.map((text, index) => (
                    <div
                      key={index}
                      className="flex items-start hover:bg-[#EFF6FF] p-3 rounded-lg transition-colors duration-200"
                    >
                      <div className="w-2 h-6 bg-[#FF6B35] mr-3 flex-shrink-0 rounded-full mt-1" />
                      <p className="text-gray-700 text-base leading-relaxed flex-1">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex items-center justify-center h-full py-12">
                  <p className="text-gray-400 text-lg text-center">
                    Hover over a module to view content
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CourseCurriculum;
