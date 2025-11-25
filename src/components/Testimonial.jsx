import * as React from "react";
import { TestimonialSlider } from "./ui/testimonial-slider-1";
import { StaggerTestimonials } from "./ui/stagger-testimonials";
import { TestimonialsColumn } from "./blocks/testimonials-columns-1";
import { TestimonialsSection } from "./blocks/testimonials-with-marquee";


export const Testimonial =()=>{

// 1. Define the review data
const reviews = [
    {
      id: 1,
      name: "Ashley Right",
      affiliation: "Pinterest",
      quote:
        "Professionals in their craft! All products were super amazing with strong attention to details, comps and overall vibe.",
      // Image from the provided screenshot
      imageSrc:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=600&fit=crop&q=80",
      thumbnailSrc:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=120&fit=crop&q=80",
    },
    {
      id: 2,
      name: "Jacob Jose",
      affiliation: "New York Times",
      quote:
        "Unlimited, instant access to hundreds of premium quality resources created by designers for designers.",
      // Image from the provided screenshot
      imageSrc:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&q=80",
      thumbnailSrc:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=120&fit=crop&q=80",
    },
    {
      id: 3,
      name: "Elara Sands",
      affiliation: "Behance",
      quote:
        "The attention to detail is immaculate. Every component feels polished and ready for production.",
      // Thumbnail from the provided screenshot
      imageSrc:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop&q=80",
      thumbnailSrc:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=120&fit=crop&q=80",
    },
    {
      id: 4,
      name: "Marcus Cole",
      affiliation: "Dribbble",
      quote:
        "A true time-saver. I can focus on my core logic instead of pixel-pushing. Highly recommended.",
      // Thumbnail from the provided screenshot
      imageSrc:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=600&fit=crop&q=80",
      thumbnailSrc:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=120&fit=crop&q=80",
    },
    {
      id: 5,
      name: "Serena V.",
      affiliation: "Figma",
      quote:
        "This is the design system I've been waiting for. It's flexible, accessible, and beautiful.",
      imageSrc:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop&q=80",
      thumbnailSrc:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=120&fit=crop&q=80",
    },
  ];
  


const testimonials = [
  {
    text: "This ERP revolutionized our operations, streamlining finance and inventory. The cloud-based platform keeps us productive, even remotely.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Briana Patton",
    role: "Operations Manager",
  },
  {
    text: "Implementing this ERP was smooth and quick. The customizable, user-friendly interface made team training effortless.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Bilal Ahmed",
    role: "IT Manager",
  },
  {
    text: "The support team is exceptional, guiding us through setup and providing ongoing assistance, ensuring our satisfaction.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Saman Malik",
    role: "Customer Support Lead",
  },
  {
    text: "This ERP's seamless integration enhanced our business operations and efficiency. Highly recommend for its intuitive interface.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Omar Raza",
    role: "CEO",
  },
  {
    text: "Its robust features and quick support have transformed our workflow, making us significantly more efficient.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Zainab Hussain",
    role: "Project Manager",
  },
  {
    text: "The smooth implementation exceeded expectations. It streamlined processes, improving overall business performance.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Aliza Khan",
    role: "Business Analyst",
  },
  {
    text: "Our business functions improved with a user-friendly design and positive customer feedback.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Farhan Siddiqui",
    role: "Marketing Director",
  },
  {
    text: "They delivered a solution that exceeded expectations, understanding our needs and enhancing our operations.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Sana Sheikh",
    role: "Sales Manager",
  },
  {
    text: "Using this ERP, our online presence and conversions significantly improved, boosting business performance.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Hassan Ali",
    role: "E-commerce Manager",
  },
];


const testimonialsconst = [
    {
      author: {
        name: "Emma Thompson",
        handle: "@emmaai",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
      },
      text: "Using this AI platform has transformed how we handle data analysis. The speed and accuracy are unprecedented.",
      href: "https://twitter.com/emmaai"
    },
    {
      author: {
        name: "David Park",
        handle: "@davidtech",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      text: "The API integration is flawless. We've reduced our development time by 60% since implementing this solution.",
      href: "https://twitter.com/davidtech"
    },
    {
      author: {
        name: "Sofia Rodriguez",
        handle: "@sofiaml",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
      },
      text: "Finally, an AI tool that actually understands context! The accuracy in natural language processing is impressive."
    }
  ]
  
  
const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

    return (
        <>
        Types of Testimonial 
        <div>
        <TestimonialSlider reviews={reviews} />
        </div>
  
        <div className="flex w-full h-screen justify-center items-center">
      <StaggerTestimonials />
    </div>
    <section className="bg-background my-20 relative">

<div className="container z-10 mx-auto">
 

  <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
    <TestimonialsColumn testimonials={firstColumn} duration={15} />
    <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
    <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
  </div>
</div>
</section>
<div>
<TestimonialsSection
      title=""
      description=""
      testimonials={testimonialsconst}
    />
</div>
        </>
    )
}




