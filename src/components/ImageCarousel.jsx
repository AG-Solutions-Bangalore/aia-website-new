import { useState, useEffect, useCallback } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const ImageCarousel=() =>{
  const [api, setApi] = useState(null);

  const images = [
    { 
      src: 'https://aia.in.net/assets/images/new2/Jehan-Daruwala-CAMS.webp',
      name: 'Antumuri Sunil, CAMS',
      location: 'Hyderabad'
    },
    { 
      src: 'https://aia.in.net/assets/images/new2/Urmimala-Das-CFE.webp',
      name: 'Urmimala Das, CFE',
      location: 'Kolkata'
    },
    { 
      src: 'https://aia.in.net/assets/images/new2/Rohit-Chawla-CIA-Part3.webp',
      name: 'Rohit Chawla, CIA Part 3',
      location: 'Mumbai'
    },
    { 
      src: 'https://aia.in.net/assets/images/new2/Jehan-Daruwala-CAMS.webp',
      name: 'Jehan Daruwala, CAMS',
      location: 'Pune'
    },
    { 
      src: 'https://aia.in.net/assets/images/new2/Jehan-Daruwala-CAMS.webp',
      name: 'Jehan Daruwala, CAMS',
      location: 'Pune'
    },
    { 
      src: 'https://aia.in.net/assets/images/new2/Jehan-Daruwala-CAMS.webp',
      name: 'Jehan Daruwala, CAMS',
      location: 'Pune'
    },
    { 
      src: 'https://aia.in.net/assets/images/new2/Jehan-Daruwala-CAMS.webp',
      name: 'Jehan Daruwala, CAMS',
      location: 'Pune'
    },
    { 
      src: 'https://aia.in.net/assets/images/new2/Jehan-Daruwala-CAMS.webp',
      name: 'Jehan Daruwala, CAMS',
      location: 'Pune'
    },
  ];

  const scrollNext = useCallback(() => {
    if (api) {
      api.scrollNext();
    }
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(() => {
      scrollNext();
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(intervalId);
  }, [api, scrollNext]);

  return (
    <div className="w-full max-w-full mx-auto px-4 py-16">
    
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {images.map((image, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/5">
              <div className="p-1">
                <div className="overflow-hidden rounded-md  transition-shadow duration-300">
                  <img
                    src={image.src}
                    alt={image.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="p-4 bg-white">
                    <h3 className="font-semibold text-lg text-gray-900">{image.name}</h3>
                    <p className="text-sm text-gray-600">{image.location}</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
       
      </Carousel>
    </div>
  );
}