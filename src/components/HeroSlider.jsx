import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Slider 1: Modern Card Carousel with Ken Burns Effect
const ModernCardSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const slides = [
    {
      image: 'https://aia.in.net/assets/images/banner/banner12.jpg',
      title: 'Innovation & Technology',
      subtitle: 'Building the future together',
      cta: 'Learn More'
    },
    {
      image: 'https://aia.in.net/assets/images/banner/test.webp',
      title: 'Team Collaboration',
      subtitle: 'Empowering teams worldwide',
      cta: 'Get Started'
    }
  ];

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prev = () => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(next, 4000);
      return () => clearInterval(timer);
    }
  }, [isHovered, next]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 mb-16">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center md:text-left">Modern Card Carousel</h2>
      <div 
        className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-all duration-700 ${
              idx === current 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
            
            <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-24">
              <div className={`max-w-2xl transition-all duration-700 delay-200 ${
                idx === current ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
              }`}>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4">
                  {slide.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-4 sm:mb-6 md:mb-8">
                  {slide.subtitle}
                </p>
                <button className="bg-white text-gray-900 px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base">
                  {slide.cta}
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={prev}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-2 sm:p-3 transition-all"
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={next}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-2 sm:p-3 transition-all"
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`transition-all ${
                idx === current 
                  ? 'w-6 sm:w-8 bg-white' 
                  : 'w-2 bg-white/50 hover:bg-white/70'
              } h-2 rounded-full`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};


// Slider 3: Full-Screen Cinematic Slider
const FullScreenSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [progressKey, setProgressKey] = useState(0); // Key to reset animation

  const slides = [
    {
      image: 'https://aia.in.net/assets/images/banner/banner12.jpg',
      title: 'Excellence in Education',
    },
    {
      image: 'https://aia.in.net/assets/images/banner/test.webp',
      title: 'Global Recognition',
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      const nextIndex = (prev + 1) % slides.length;
      // Reset progress animation key when changing slides
      setProgressKey(prevKey => prevKey + 1);
      return nextIndex;
    });
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const prevIndex = (prev - 1 + slides.length) % slides.length;
      setProgressKey(prevKey => prevKey + 1);
      return prevIndex;
    });
  };

  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(nextSlide, 4000);
      return () => clearInterval(interval);
    }
  }, [isHovering, nextSlide]);

  // Reset progress animation when slide changes
  useEffect(() => {
    setProgressKey(prev => prev + 1);
  }, [currentSlide]);

  return (
    <div className="w-full mb-16">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 px-4 max-w-7xl mx-auto text-center md:text-left">Full-Screen Cinematic Slider</h2>
      <div 
        className="relative w-full h-[50vh] sm:h-[60vh] md:h-screen"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-fit"
            />
            
            {/* Content */}
            
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full p-2 sm:p-3 md:p-4 transition-all hover:scale-110 z-10"
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full p-2 sm:p-3 md:p-4 transition-all hover:scale-110 z-10"
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 sm:bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setProgressKey(prev => prev + 1);
              }}
              className="group relative"
            >
              <div className={`transition-all ${
                index === currentSlide 
                  ? 'w-8 sm:w-12 md:w-16 bg-white' 
                  : 'w-4 sm:w-6 md:w-12 bg-white/40 hover:bg-white/60'
              } h-1 rounded-full`} />
              {index === currentSlide && (
                <div 
                  key={progressKey}
                  className="absolute inset-0 w-full h-1 bg-blue-500 rounded-full animate-slide-progress" 
                />
              )}
            </button>
          ))}
        </div>

        {/* Scroll Indicator - Hidden on mobile */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/60 animate-bounce">
          <span className="text-sm font-medium">Scroll Down</span>
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5 rotate-90" />
        </div>
      </div>
    </div>
  );
};

// Main App Component
export const HeroSlider = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <FullScreenSlider />
      
      <div className="py-8 sm:py-12">
        <div className="max-w-full mx-auto px-4">
          <ModernCardSlider />
       
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
        .animate-slide-progress {
          animation: slide-progress 6000ms linear;
        }
      `}</style>
    </div>
  );
};