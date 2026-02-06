// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import {
//   Autoplay,
//   EffectCoverflow,
//   Navigation,
//   Pagination,
// } from "swiper/modules";

// export const CardCarousel = ({
//   studentData,
//   autoplayDelay = 1500,
//   showPagination = true,
//   showNavigation = true,
//   className = "",
// }) => {
//   return (
//     <section className={`py-6 ${className}`}>
//       <div className="mx-auto px-4">
//         <div className="relative mx-auto flex w-full flex-col">
//           <div className="flex w-full items-center justify-center">
//             <div className="w-full max-w-6xl">
//               <Swiper
//                 autoplay={{
//                   delay: autoplayDelay,
//                   disableOnInteraction: false,
//                   pauseOnMouseEnter: true,
//                 }}
//                 effect={"coverflow"}
//                 grabCursor={true}
//                 centeredSlides={true}
//                 loop={true}
//                 slidesPerView={"auto"}
//                 speed={800}
//                 coverflowEffect={{
//                   rotate: 0,
//                   stretch: 0,
//                   depth: 100,
//                   modifier: 2.5,
//                   slideShadows: false,
//                 }}
//                 pagination={showPagination ? { clickable: true } : false}
//                 navigation={
//                   showNavigation
//                     ? {
//                         nextEl: `.${className} .swiper-button-next`,
//                         prevEl: `.${className} .swiper-button-prev`,
//                       }
//                     : false
//                 }
//                 modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
//                 watchSlidesProgress={true}
//                 resistanceRatio={0.85}
//                 threshold={15}
//                 updateOnWindowResize={true}
//                 breakpoints={{
//                   0: { spaceBetween: 10 },
//                   640: { spaceBetween: 50 },
//                 }}
//               >
//                 {studentData.map((student, index) => (
//                   <SwiperSlide key={index} className="max-w-xs">
//                     <div className="relative bg-white shadow-lg shadow-gray-200/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-gray-300/50">
//                       <div className=" border !rounded-none border-[#0F3652]">
//                         <img
//                           src={student.src}
//                           width={400}
//                           height={300}
//                           className="w-full h-48 object-cover !rounded-none "
//                           alt={student.alt}
//                           loading="lazy"
//                         />
//                       </div>

//                       <div className="bg-[#0F3652] px-4 py-3">
//                         <div className="flex flex-row items-start justify-between w-full">
//                           <div className="flex flex-col it space-y-1">
//                             <span className="text-white font-bold text-base">
//                               {student.name}
//                             </span>

//                             {student.marks &&
//                               student.marks.split(",").length > 0 && (
//                                 <div className="flex flex-wrap gap-1">
//                                   {student.marks.split(",").map((mark, idx) => (
//                                     <span
//                                       key={idx}
//                                       className="px-2 py-0.5 bg-[#F3831C] text-white text-xs font-medium rounded"
//                                     >
//                                       {mark.trim()}
//                                     </span>
//                                   ))}
//                                 </div>
//                               )}
//                           </div>

//                           <div className="flex-shrink-0 pt-1">
//                             <div className="w-12 h-12 flex items-center justify-center overflow-hidden ">
//                               <img
//                                 src={student.companyLogo}
//                                 alt={student.companyLogoAlt}
//                                 className="max-w-full border border-white !rounded-none  max-h-full object-contain"
//                               />
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// /* eslint-disable no-unused-vars */
// import { useQuery } from "@tanstack/react-query";
// import React from "react";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";

// import { BASE_URL } from "@/api/base-url";
// import SectionHeading from "@/components/SectionHeading/SectionHeading";
// import { CardCarousel } from "@/components/ui/card-carousel";
// import axios from "axios";

// const CourseTopStudent = ({
//   courseSlug,
//   title,
//   needPrefix,
//   subtitle = "Our successful graduates making a difference in the industry",
// }) => {
//   const {
//     data: camsPassoutData,
//     isLoading,
//     isError,
//     refetch,
//   } = useQuery({
//     queryKey: ["recent-passout-students"],
//     queryFn: async () => {
//       const res = await axios.get(
//         `${BASE_URL}/api/getTopStudentbyCourse/${courseSlug}`,
//       );
//       return res.data;
//     },
//   });

//   const studentData = React.useMemo(() => {
//     if (!camsPassoutData?.data) return [];

//     const studentImageUrlObj = camsPassoutData.image_url?.find(
//       (item) => item.image_for === "Student",
//     );
//     const studentImageUrl = studentImageUrlObj?.image_url || "";

//     const companyImageUrlObj = camsPassoutData.image_url?.find(
//       (item) => item.image_for === "Student Company",
//     );
//     const companyImageUrl = companyImageUrlObj?.image_url || "";

//     return camsPassoutData.data.map((student) => ({
//       src: `${studentImageUrl}${student.student_marks_image}`,
//       alt: student.student_marks_image_alt || "Marks Image",
//       name: student.student_name,
//       course: student.student_course,
//       designation: student.student_designation,
//       companyName: student.student_company_name,
//       companyLogo: `${companyImageUrl}${student.student_company_image}`,
//       companyLogoAlt: student.student_company_image_alt,
//       marks: student.student_marks,
//       country: student.country_name,
//       city: student.country_city,
//     }));
//   }, [camsPassoutData]);

//   if (isLoading) {
//     return (
//       <div className="relative w-full  py-8">
//         <div className="absolute inset-0 overflow-hidden">
//           <div
//             className="absolute inset-0 opacity-10"
//             style={{
//               backgroundImage:
//                 "linear-gradient(to right, #888 1px, transparent 1px), linear-gradient(to bottom, #888 1px, transparent 1px)",
//               backgroundSize: "50px 50px",
//             }}
//           ></div>
//           <div
//             className="absolute inset-0 opacity-20"
//             style={{
//               backgroundImage:
//                 "radial-gradient(circle at 70% 30%, #7c3aed 1px, transparent 1.5px), radial-gradient(circle at 30% 70%, #db2777 1px, transparent 1.5px)",
//               backgroundSize: "60px 60px",
//               animation: "moveBackground 20s infinite alternate",
//             }}
//           ></div>
//         </div>

//         <div className="max-w-340 mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
//           <div className="mb-8 text-center gap-4">
//             <div className="relative z-30">
//               <Skeleton height={40} width={400} className="mx-auto" />
//               <Skeleton height={20} width={200} className="mx-auto mt-2" />
//             </div>
//           </div>

//           <div className="flex justify-center gap-4">
//             {[...Array(4)].map((_, index) => (
//               <div key={index} className="w-64 h-80">
//                 <Skeleton height={320} width={256} />
//                 <Skeleton height={20} width={150} className="mt-2" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (isError) {
//     return (
//       <div className="relative w-full  py-8">
//         <div className="max-w-340 mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
//           <div className="text-red-500">
//             Error loading students. Please try again later.
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="relative w-full  py-8">
//       <div className="absolute inset-0 overflow-hidden">
//         <div
//           className="absolute inset-0 opacity-10"
//           style={{
//             backgroundImage:
//               "linear-gradient(to right, #888 1px, transparent 1px), linear-gradient(to bottom, #888 1px, transparent 1px)",
//             backgroundSize: "50px 50px",
//           }}
//         ></div>
//       </div>

//       <div className="max-w-340 mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
//         <SectionHeading title={title} description={subtitle} align="center" />

//         <CardCarousel
//           studentData={studentData}
//           autoplayDelay={3000}
//           showPagination={true}
//           showNavigation={true}
//           className="showcase-student-carousel relative z-0"
//         />
//       </div>
//       <style>{`
//         .showcase-student-carousel .swiper {
//           width: 100%;
//           padding-bottom: 50px;
//         }
        
//         .showcase-student-carousel .swiper-slide {
//           background-position: center;
//           background-size: cover;
//           width: 300px;
//           transform: translateZ(0);
//           backface-visibility: hidden;
//           perspective: 1000px;
//         }
        
//         .showcase-student-carousel .swiper-slide img {
//           display: block;
//           width: 100%;
//           height: 300px;
//           object-fit: cover;
//           border-radius: 8px;
//           transform: translateZ(0);
//           will-change: transform;
//         }
        
//         .showcase-student-carousel .swiper-3d .swiper-slide-shadow-left,
//         .showcase-student-carousel .swiper-3d .swiper-slide-shadow-right {
//           background-image: none;
//         }
        
//         .showcase-student-carousel .swiper-pagination {
//           display: none !important;
//         }
        
//         /* Animation for the background */
//         @keyframes moveBackground {
//           0% { background-position: 0% 0%; }
//           100% { background-position: 100% 100%; }
//         }
        
//         /* Reduced motion support */
//         @media (prefers-reduced-motion: reduce) {
//           .showcase-student-carousel .swiper {
//             transition: none;
//           }
//           .showcase-student-carousel .swiper-slide {
//             animation: none;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default CourseTopStudent;
