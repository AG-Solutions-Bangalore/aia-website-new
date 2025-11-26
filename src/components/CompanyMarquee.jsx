export const CompanyMarquee = () => {
    const companies = [
      { src: 'https://aia.in.net/assets/images/alumnis/alumni%20(1).jpg', alt: "Company 1" },
      { src: 'https://aia.in.net/assets/images/alumnis/alumni%20(13).jpg', alt: "Company 2" },
      { src: 'https://aia.in.net/assets/images/alumnis/alumni%20(14).jpg', alt: "Company 3" },
      { src: 'https://aia.in.net/assets/images/alumnis/alumni%20(15).jpg', alt: "Company 4" },
      { src: 'https://aia.in.net/assets/images/alumnis/alumni%20(16).jpg', alt: "Company 5" },
      { src: 'https://aia.in.net/assets/images/alumnis/alumni%20(17).jpg', alt: "Company 6" },
    ];
  
    return (
      <>
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }

          .marquee {
            animation: marquee 20s linear infinite;
          }
        `}
      </style>

      <div className="w-full bg-muted py-16 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Trusted By Leading Organizations
          </h2>
        </div>
        

        <div className="relative flex overflow-hidden h-24"> 
          
          <div className="flex marquee whitespace-nowrap items-center">
            {companies.map((c, i) => (
              <div key={`first-${i}`} className="mx-8 flex items-center justify-center">
          
                <img 
                  src={c.src} 
                  alt={c.alt} 
                  className="h-16 w-auto object-contain max-w-[120px]"
                />
              </div>
            ))}
          </div>
  
          <div className="flex marquee whitespace-nowrap items-center" aria-hidden="true"> 
            {companies.map((c, i) => (
              <div key={`second-${i}`} className="mx-8 flex items-center justify-center">
           
                <img 
                  src={c.src} 
                  alt={c.alt} 
                  className="h-16 w-auto object-contain max-w-[120px]" 
                />
              </div>
            ))}
          </div>
  
        </div>
      </div>
      </>
    );
  };