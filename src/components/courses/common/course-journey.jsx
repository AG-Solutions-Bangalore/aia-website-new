import React from "react";

const CourseJourney = ({ heading, highlight, steps, connectorImage }) => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-340 mx-auto">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <h3 className="text-[36px] font-bold mb-4">
            {heading}{" "}
            <span className="text-[#7a00df]">{highlight}</span>
          </h3>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative bg-indigo-100 hover:bg-[#2d245d] text-indigo-900 hover:text-white rounded-xl min-h-65"
              >
                {/* Step number */}
                <div className="absolute -top-4 border left-[45%] w-10 h-10 bg-indigo-900 text-white rounded-full flex items-center justify-center text-xl font-bold italic">
                  {step.number}
                </div>

                <div className="p-8">
                  <h4 className="text-lg font-semibold mb-3">
                    {step.title}
                  </h4>

                  <ul className="text-sm leading-relaxed space-y-1 list-disc list-inside">
                    {step.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Connector image */}
          {connectorImage && (
            <div className="hidden lg:block absolute top-0 left-0 right-0 z-0 scale-105">
              <img
                src={connectorImage}
                alt="Step Connector"
                className="w-full"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CourseJourney;
