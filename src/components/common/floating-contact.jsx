// import { motion, AnimatePresence } from "framer-motion";
// import { Mail, Phone } from "lucide-react";
// import { FaWhatsapp } from "react-icons/fa";
// import { useEffect, useRef, useState } from "react";

// const FloatingContactRight = () => {
//   const [open, setOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const check = () => setIsMobile(window.innerWidth < 768);
//     check();
//     window.addEventListener("resize", check);
//     return () => window.removeEventListener("resize", check);
//   }, []);

//   useEffect(() => {
//     if (!isMobile) return;
//     const handleClickOutside = (e) => {
//       if (containerRef.current && !containerRef.current.contains(e.target)) {
//         setOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     document.addEventListener("touchstart", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//       document.removeEventListener("touchstart", handleClickOutside);
//     };
//   }, [isMobile]);

//   const items = [
//     {
//       icon: <Mail size={18} />,
//       bg: "bg-[#0F3652]",
//       link: "mailto:support@aia.in.net",
//       label: "Email Us",
//       glow: "shadow-[#0F3652]/40",
//     },
//     {
//       icon: <Phone size={18} />,
//       bg: "bg-[#F3831C]",
//       link: "tel:+919311320114",
//       label: "Call Us",
//       glow: "shadow-[#F3831C]/40",
//     },
//     {
//       icon: <FaWhatsapp size={20} />,
//       bg: "bg-[#25D366]",
//       link: "https://wa.me/919311320114?text=Hello,%20I%20am%20looking%20for%20Academy%20of%20Internal%20Audit",
//       label: "WhatsApp",
//       glow: "shadow-[#25D366]/40",
//     },
//   ];

//   const hoverProps = isMobile
//     ? {}
//     : {
//         onMouseEnter: () => setOpen(true),
//         onMouseLeave: () => setOpen(false),
//       };

//   return (
//     <div className="fixed bottom-40 right-4 z-[9999]" ref={containerRef}>
//       <div className="relative flex items-center gap-2.5" {...hoverProps}>
//         <AnimatePresence>
//           {open && (
//             <div className="flex items-center gap-2.5">
//               {items.map((item, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ x: 80, opacity: 0, scale: 0.8 }}
//                   animate={{ x: 0, opacity: 1, scale: 1 }}
//                   exit={{ x: 80, opacity: 0, scale: 0.8 }}
//                   transition={{
//                     duration: 0.3,
//                     delay: index * 0.06,
//                     ease: [0.4, 0, 0.2, 1],
//                   }}
//                   className="relative group"
//                 >
//                   {/* Tooltip */}
//                   <div
//                     className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2
//                       px-2.5 py-1 bg-slate-800 text-white text-xs font-medium
//                       rounded-md whitespace-nowrap pointer-events-none
//                       opacity-0 group-hover:opacity-100 transition-opacity duration-200"
//                   >
//                     {item.label}
//                   </div>

//                   <motion.a
//                     href={item.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     whileHover={{ scale: 1.1, y: -3 }}
//                     whileTap={{ scale: 0.95 }}
//                     className={`
//                       relative h-12 w-12 rounded-xl
//                       ${item.bg}
//                       flex items-center justify-center
//                       text-white shadow-md ${item.glow}
//                       transition-all duration-200
//                       hover:shadow-lg
//                       cursor-pointer
//                     `}
//                     aria-label={item.label}
//                   >
//                     {item.icon}
//                   </motion.a>
//                 </motion.div>
//               ))}
//             </div>
//           )}
//         </AnimatePresence>

//         <motion.button
//           onClick={() => isMobile && setOpen((prev) => !prev)}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="relative h-14 w-14 rounded-xl overflow-hidden cursor-pointer
//             shadow-lg transition-shadow duration-300 hover:shadow-xl"
//         >
//           <div className="absolute inset-0 bg-[#F3831C]" />

//           <motion.div
//             animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
//             transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
//             className="absolute inset-0 rounded-xl border-2 border-white/40"
//           />

//           <motion.div
//             animate={{ rotate: open ? 45 : 0 }}
//             transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
//             className="relative z-10 h-full flex items-center justify-center"
//           >
//             <svg
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="white"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               {open ? (
//                 <path d="M18 6L6 18M6 6l12 12" />
//               ) : (
//                 <>
//                   <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
//                   <path d="M8 10h.01M12 10h.01M16 10h.01" />
//                 </>
//               )}
//             </svg>
//           </motion.div>
//         </motion.button>
//       </div>
//     </div>
//   );
// };

// export default FloatingContactRight;
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

const FloatingContactRight = () => {
  const [open, setOpen] = useState(false);
  /*
    FIX 1: Don't default isMobile to false then flip it in useEffect.
    That causes a second render after hydration where hover vs click
    behaviour switches, which can shift adjacent elements.
    Use null as sentinel — render nothing until we know the viewport.
  */
  const [isMobile, setIsMobile] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    /*
      FIX 2: Use matchMedia instead of resize listener.
      resize fires on every pixel change and forces layout reads.
      matchMedia only fires when the breakpoint threshold is crossed.
    */
    const mq = window.matchMedia("(max-width: 767px)");
    mq.addEventListener("change", (e) => setIsMobile(e.matches));
    return () =>
      mq.removeEventListener("change", (e) => setIsMobile(e.matches));
  }, []);

  // Close on outside click (mobile only)
  useEffect(() => {
    if (!isMobile) return;
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside, {
      passive: true,
    });
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMobile]);

  const items = [
    {
      icon: <Mail size={18} />,
      bg: "bg-[#0F3652]",
      link: "mailto:support@aia.in.net",
      label: "Email Us",
      glow: "shadow-[#0F3652]/40",
    },
    {
      icon: <Phone size={18} />,
      bg: "bg-[#F3831C]",
      link: "tel:+919311320114",
      label: "Call Us",
      glow: "shadow-[#F3831C]/40",
    },
    {
      icon: <FaWhatsapp size={20} />,
      bg: "bg-[#25D366]",
      link: "https://wa.me/919311320114?text=Hello,%20I%20am%20looking%20for%20Academy%20of%20Internal%20Audit",
      label: "WhatsApp",
      glow: "shadow-[#25D366]/40",
    },
  ];

  /*
    FIX 3: Don't spread hoverProps as an object built conditionally every render.
    Use stable handlers that check isMobile internally — avoids re-attaching
    event listeners on every isMobile change.
  */
  const handleMouseEnter = () => {
    if (!isMobile) setOpen(true);
  };
  const handleMouseLeave = () => {
    if (!isMobile) setOpen(false);
  };
  const handleClick = () => {
    if (isMobile) setOpen((prev) => !prev);
  };

  /*
    FIX 4: Don't render until isMobile is resolved (null check).
    Rendering with the wrong interaction model then swapping causes
    a layout recalculation and potential CLS on first load.
  */
  if (isMobile === null) return null;

  return (
    /*
      FIX 5: Remove aria-hidden from the root — this widget is interactive
      and must be accessible. The aria-hidden="true" you're seeing is being
      applied externally (likely by a modal/dialog). If you're using a modal
      library, ensure it targets only the page content div, not #root entirely.

      Also: fixed elements don't cause CLS themselves (they're out of flow),
      but their open/close animation expanding leftward CAN shift the trigger
      button position if the container doesn't have a stable anchor point.
      We fix this by reversing the flex direction so items expand left from
      a fixed right anchor.
    */
    <div
      className="fixed bottom-40 right-4 z-[9999]"
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/*
        FIX 6: flex-row-reverse keeps the trigger button anchored at right.
        Items expand leftward without pushing the button, so bottom-40 right-4
        position never shifts.
      */}
      <div className="relative flex flex-row-reverse items-center gap-2.5">
        {/* Trigger button — always rendered first in DOM, visually rightmost */}
        <motion.button
          onClick={handleClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={open ? "Close contact options" : "Open contact options"}
          aria-expanded={open}
          className="relative h-14 w-14 rounded-xl overflow-hidden cursor-pointer
            shadow-lg transition-shadow duration-300 hover:shadow-xl shrink-0"
        >
          <div className="absolute inset-0 bg-[#F3831C]" />

          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
            className="absolute inset-0 rounded-xl border-2 border-white/40"
          />

          <motion.div
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="relative z-10 h-full flex items-center justify-center"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  <path d="M8 10h.01M12 10h.01M16 10h.01" />
                </>
              )}
            </svg>
          </motion.div>
        </motion.button>

        {/* Contact items — animate in from right, expand leftward */}
        <AnimatePresence>
          {open && (
            <div className="flex flex-row-reverse items-center gap-2.5">
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: 60, opacity: 0, scale: 0.8 }}
                  animate={{ x: 0, opacity: 1, scale: 1 }}
                  exit={{ x: 60, opacity: 0, scale: 0.8 }}
                  transition={{
                    duration: 0.3,
                    /*
                      Reverse delay so the leftmost item (index 2) animates
                      in first — feels more natural expanding left-to-right.
                    */
                    delay: (items.length - 1 - index) * 0.06,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="relative group"
                >
                  {/* Tooltip */}
                  <div
                    className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 
                      px-2.5 py-1 bg-slate-800 text-white text-xs font-medium
                      rounded-md whitespace-nowrap pointer-events-none
                      opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    role="tooltip"
                  >
                    {item.label}
                  </div>

                  <motion.a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`
                      relative h-12 w-12 rounded-xl
                      ${item.bg}
                      flex items-center justify-center
                      text-white shadow-md ${item.glow}
                      transition-all duration-200
                      hover:shadow-lg
                      cursor-pointer
                    `}
                    aria-label={item.label}
                  >
                    <span aria-hidden="true">{item.icon}</span>
                  </motion.a>
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FloatingContactRight;
