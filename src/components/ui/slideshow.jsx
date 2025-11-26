import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    img: "https://cdn.cosmos.so/8b0252bd-cb64-45f4-aef8-672c7f628f76?format=jpeg",
    text: ["BETWEEN SHADOW", "AND LIGHT"],
  },
  {
    img: "https://cdn.cosmos.so/7b3f4c48-ec63-4bac-b472-910c037a0eb4?format=jpeg",
    text: ["SILENCE SPEAKS", "THROUGH FORM"],
  },
  {
    img: "https://cdn.cosmos.so/444502b9-4cb9-4f14-a068-f0213df08729?format=jpeg",
    text: ["ESSENCE BEYOND", "PERCEPTION"],
  },
  {
    img: "https://cdn.cosmos.so/ef511e17-a35b-42e6-9122-2754bbd2ad7e?format=jpeg",
    text: ["TRUTH IN", "EMPTINESS"],
  },
  {
    img: "https://cdn.cosmos.so/cf68a397-080a-437a-994e-69dedd9e6e06?format=jpeg",
    text: ["SURRENDER TO", "THE VOID"],
  },
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    scale: 1.05,
    rotateY: direction > 0 ? 10 : -10,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
  },
  exit: (direction) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.95,
    rotateY: direction < 0 ? 10 : -10,
  }),
};

const textVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    filter: "blur(10px)"
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.3,
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94],
    }
  })
};

const imageVariants = {
  initial: {
    scale: 1.1,
    filter: "brightness(0.7) contrast(1.1)",
  },
  animate: {
    scale: 1,
    filter: "brightness(0.8) contrast(1.05)",
    transition: {
      scale: { duration: 8, ease: "easeOut" },
      filter: { duration: 2 }
    }
  }
};

export default function Component() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 400, damping: 40 },
            opacity: { duration: 0.4 },
            scale: { duration: 0.6 },
            rotateY: { duration: 0.6 }
          }}
          className="absolute inset-0 w-full h-full"
        >
         
          <motion.div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].img})` }}
            variants={imageVariants}
            initial="initial"
            animate="animate"
          >
           
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
            
          
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-center space-y-6">
                {slides[current].text.map((line, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-4xl md:text-7xl font-light tracking-widest uppercase"
                    style={{
                      textShadow: "0 4px 20px rgba(0,0,0,0.8)",
                      fontFamily: "system-ui, -apple-system, sans-serif"
                    }}
                  >
                    {line}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      
      <motion.button 
        className="absolute left-8 top-1/2 transform -translate-y-1/2 group z-10"
        onClick={prevSlide}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative w-12 h-12 flex items-center justify-center">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-full border border-white/30 group-hover:bg-white/20 group-hover:border-white/50 transition-all duration-300" />
          <motion.span
            className="text-white text-2xl font-light relative z-10"
            animate={{ x: [-1, 0, -1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            ‹
          </motion.span>
        </div>
      </motion.button>
      
      <motion.button 
        className="absolute right-8 top-1/2 transform -translate-y-1/2 group z-10"
        onClick={nextSlide}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative w-12 h-12 flex items-center justify-center">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-full border border-white/30 group-hover:bg-white/20 group-hover:border-white/50 transition-all duration-300" />
          <motion.span
            className="text-white text-2xl font-light relative z-10"
            animate={{ x: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            ›
          </motion.span>
        </div>
      </motion.button>

  
      <motion.div 
        className="absolute bottom-8 right-8 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/20" />
          <div className="relative px-5 py-2.5 text-white font-mono text-sm tracking-wider">
            <span className="text-white font-semibold">{String(current + 1).padStart(2, '0')}</span>
            <span className="opacity-40 mx-2">—</span>
            <span className="opacity-50 text-xs">{String(slides.length).padStart(2, '0')}</span>
          </div>
        </div>
      </motion.div>

     
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setDirection(index > current ? 1 : -1);
              setCurrent(index);
            }}
            className="relative group"
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className={`h-1 rounded-full transition-all duration-300 ${
                index === current 
                  ? 'w-12 bg-white' 
                  : 'w-8 bg-white/30 group-hover:bg-white/50'
              }`}
              animate={{
                width: index === current ? 48 : 32,
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        ))}
      </motion.div>

    
      <motion.div 
        className="absolute top-0 left-0 right-0 h-0.5 bg-white/10 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <motion.div 
          className="h-full bg-gradient-to-r from-white/60 via-white to-white/60"
          animate={{ width: `${((current + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        />
      </motion.div>
    </div>
  );
}