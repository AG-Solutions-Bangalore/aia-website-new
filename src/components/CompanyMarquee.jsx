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
      <div className="w-full bg-muted py-16 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Trusted By Leading Organizations
          </h2>
        </div>
        
        {/* Added fixed height to the marquee container */}
        <div className="relative flex overflow-hidden h-24"> {/* Changed this line */}
          
          <div className="flex animate-marquee whitespace-nowrap items-center"> {/* Added items-center */}
            {companies.map((c, i) => (
              <div key={`first-${i}`} className="mx-8 flex items-center justify-center">
                {/* Added fixed height and max-width to images */}
                <img 
                  src={c.src} 
                  alt={c.alt} 
                  className="h-16 w-auto object-contain max-w-[120px]" // Changed this line
                />
              </div>
            ))}
          </div>
  
          <div className="flex animate-marquee whitespace-nowrap items-center" aria-hidden="true"> {/* Added items-center */}
            {companies.map((c, i) => (
              <div key={`second-${i}`} className="mx-8 flex items-center justify-center">
                {/* Added fixed height and max-width to images */}
                <img 
                  src={c.src} 
                  alt={c.alt} 
                  className="h-16 w-auto object-contain max-w-[120px]" // Changed this line
                />
              </div>
            ))}
          </div>
  
        </div>
      </div>
    );
  };