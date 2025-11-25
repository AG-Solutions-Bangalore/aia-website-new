



import { HeroSlider } from "@/components/HeroSlider";
import { ImageCarousel } from "@/components/ImageCarousel";
import { DialogDrawerSection } from "@/components/DialogDrawerSection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CompanyMarquee } from "@/components/CompanyMarquee";
import { Testimonial } from "@/components/Testimonial";

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/20 to-background">
      {/* Hero Slider */}
      <section className="mb-16">
        <HeroSlider />
      </section>

      {/* Image Carousel */}
      <section className="mb-16">
        <ImageCarousel />
      </section>

      {/* Dialog & Drawer */}
      <section className="mb-16">
        <DialogDrawerSection />
      </section>

      {/* FAQ Accordion */}
      <section className="mb-16">
        <FAQAccordion />
      </section>

      {/* Company Marquee */}
      <section>
        <CompanyMarquee />
      </section>
      <section>
        <Testimonial />
      </section>
    </div>
  );
};

export default Login;
