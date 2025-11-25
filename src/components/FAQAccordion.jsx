import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  export const FAQAccordion = () => {
    const faqs = [
      {
        question: "What certifications do you offer?",
        answer:
          "We offer a comprehensive range of professional certifications including Certified Financial Examiner (CFE), Chartered Financial Analyst (CFA), and various specialized industry certifications. All our programs are internationally recognized and designed to enhance your career prospects.",
      },
      {
        question: "How long does it take to complete a program?",
        answer:
          "Program duration varies depending on the certification you choose. Most programs range from 3 to 12 months. We offer flexible learning schedules including full-time, part-time, and weekend batches to accommodate working professionals.",
      },
      {
        question: "Are the courses available online?",
        answer:
          "Yes! We offer both online and offline learning modes. Our online platform provides live interactive sessions, recorded lectures, study materials, and dedicated support. You can learn at your own pace while getting the same quality education as our classroom programs.",
      },
      {
        question: "What is the admission process?",
        answer:
          "Our admission process is simple and straightforward. Submit your application online, appear for a brief assessment (if required), and once approved, you can enroll in your chosen program. Our admission team is available to guide you through each step.",
      },
      {
        question: "Do you provide placement assistance?",
        answer:
          "Absolutely! We have strong industry connections and provide comprehensive placement assistance to all our students. This includes resume building, interview preparation, job placement support, and access to our extensive alumni network across various industries.",
      },
    ];
  
    return (
      <div className="w-full max-w-4xl mx-auto px-4 py-16 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Find answers to common questions about our programs
        </p>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    );
  };
  