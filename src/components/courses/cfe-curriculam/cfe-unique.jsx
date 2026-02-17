import React from "react";
import {
  Users,
  Calendar,
  Award,
  Building2,
  Handshake,
  ShoppingBag,
  Sparkles,
  CheckCircle,
  Star,
} from "lucide-react";
import CourseUnique from "../common/course-unique";

const CfeUnique = () => {
  return (
    <>
      <CourseUnique
        badgeText="WHAT MAKES US UNIQUE"
        heading="Why AIA is the Preferred Choice for "
        highlight="Professionals"
        description=""
        services={[
          {
            icon: <Users className="w-6 h-6" />,
            secondaryIcon: (
              <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-blue-400" />
            ),
            title: "Expert-Curated CFE Study Material",
            description:
              "AIA simplifies CFE prep with exam-focused 250-page notes derived from the ACFE manual. It covers relevant concepts only, helping professionals study effectively.",
            position: "left",
          },
          {
            icon: <Building2 className="w-6 h-6" />,
            secondaryIcon: (
              <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-blue-400" />
            ),
            title: "Structured & Practical Fraud-Focused Learning",
            description:
              "Our CFE prep follows a clear, structured learning path built around practical fraud scenarios. Each concept is explain learners in depth about how fraud actually occurs.",
            position: "left",
          },
          {
            icon: <Handshake className="w-6 h-6" />,
            secondaryIcon: (
              <Star className="w-4 h-4 absolute -top-1 -right-1 text-blue-400" />
            ),
            title: "Live Interactive Sessions with Faculty",
            description:
              "AIA conducts live sessions where learners actively discuss fraud cases, practical challenges, exchange perspectives & gain insights from experienced professionals.",
            position: "left",
          },
          {
            icon: <ShoppingBag className="w-6 h-6" />,
            secondaryIcon: (
              <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-blue-400" />
            ),
            title: "Mentorship & Enrolment Support",
            description:
              "From CFE registration guidance to final exam readiness, we support learners at every stage. At AIA, we simplify the ACFE process and ensure a smooth, stress-free journey.",
            position: "right",
          },
          {
            icon: <Award className="w-6 h-6" />,
            secondaryIcon: (
              <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-blue-400" />
            ),
            title: "Proven Exam-Oriented Training Methodology",
            description:
              "Our training aligns with the latest CFE exam framework & fraud risk practices, explaining concepts from a fraudster’s perspective for practical understanding.",
            position: "right",
          },
          {
            icon: <Calendar className="w-6 h-6" />,
            secondaryIcon: (
              <Star className="w-4 h-4 absolute -top-1 -right-1 text-blue-400" />
            ),
            title: "Trusted by Professionals Across Fraud, Audit & Risk Roles",
            description:
              "Professionals from different fields trust AIA because we respect their time, understand real-world challenges & consistently deliver clarity, confidence & exam results.",
            position: "right",
          },
        ]}
      />
    </>
  );
};

export default CfeUnique;
