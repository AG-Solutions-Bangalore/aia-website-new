// components/CompanyMarquee.jsx
const CompanyMarquee = ({ title, subtitle, companies }) => {
    if (!companies?.length) return null;
  
    return (
      <>
        <style>
          {`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-100%); }
            }
            .marquee {
              animation: marquee 25s linear infinite;
            }
          `}
        </style>
  
        <div className="w-full bg-linear-to-b from-black to-blue-400/80 py-20 overflow-hidden">
          <div className="max-w-340 mx-auto px-6 mb-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {title}
            </h2>
            <p className="text-gray-300 text-sm md:text-base max-w-3xl">
              {subtitle}
            </p>
          </div>
  
          <div className="relative flex overflow-hidden py-8">
            {[1, 2].map((loop) => (
              <div
                key={loop}
                className="flex marquee whitespace-nowrap items-center"
                aria-hidden={loop === 2}
              >
                {companies.map((c, i) => (
                  <div key={`${loop}-${i}`} className="mx-12 flex items-center">
                    <img
                      src={c.src}
                      alt={c.alt}
                      className="h-12 w-auto object-contain"
                      style={{ maxWidth: "140px" }}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };
  
  export default CompanyMarquee;
  