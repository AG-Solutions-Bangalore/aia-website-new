import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";

import CAMS from "./pages/Courses/CAMS";
import CFECurriculam from "./pages/Courses/CFECurriculam";
import CIAChallenge from "./pages/Courses/CIAChallenge";
import CIACurriculam from "./pages/Courses/CIACurriculam";
import FreeResources from "./pages/free-resources/cfe-free-resources";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import OurPassout from "./pages/OurPassout/OurPassout";

import Enrool from "./pages/Enroll/Enroll";
import Contact from "./pages/contact/contact";
import BlogDetails from "./pages/Blog/blog-details";
import AboutPage from "./pages/About/About";
import NotificationPopup from "./components/notification/notification-popup";
import PassoutStoriesSlug from "./components/passout/passout-stories-slug";
import GoogleAnalytics from "./components/google-analytics/google-analytics";
import ScrollToTop from "./components/common/scroll-to-top";
import CorporateTraining from "./pages/corporate-training/corporate-training";
import Policies from "./pages/policies/policies";
import TermsAndConditions from "./pages/terms-and-conditions/terms-and-conditions";
import BlogCourse from "./pages/Blog/blog-course";
import CfePracticeQuestion from "./pages/free-resources/cfe-practice-question";
import Meta from "./components/seo/meta";
import FloatingContact from "./components/common/floating-contact";
import { Toaster } from "sonner";
import CanonicalTag from "./components/common/canonical-tag";
import NotFound from "./components/common/not-found";

export default function App() {
  const blogRedirects = {
    "/what-is-money-laundering": "/blog/what-is-money-laundering",
    "/academy-of-internal-audit-national-recognition":
      "/blog/academy-of-internal-audit-national-recognition",
    "/cfe-vs-cams": "/blog/cfe-vs-cams",
    "/cia-vs-cia-challenge-curriculum": "/blog/cia-vs-cia-challenge-curriculum",
    "/what-is-fraud": "/blog/what-is-fraud",
    "/anti-money-laundering-certificate":
      "/blog/anti-money-laundering-certificate",
    "/online-vs-offline-cfe-training": "/blog/online-vs-offline-cfe-training",
    "/cams-exam-format": "/blog/cams-exam-format",
    "/anti-money-laundering-jobs-salary":
      "/blog/anti-money-laundering-jobs-salary",
    "/certified-fraud-examiner-salary": "/blog/certified-fraud-examiner-salary",
    "/cia-certification": "/blog/cia-certification",
    "/cfe-module-4": "/blog/cfe-module-4",
    "/cia-certification-in-qatar": "/blog/cia-certification-in-qatar",
    "/cams-2025-syllabus-update-key-changes-and-preparation-guide":
      "/blog/cams-syllabus",
    "/cia-part-3-syllabus-2025": "/blog/cia-part-3-syllabus",
    "/cia-part-2-syllabus-2025": "/blog/cia-part-2-syllabus",
    "/internal-audit-101-everything-you-should-know": "/blog/internal-audit",
    "/cia-part1-syllabus-2025-update-internal-audit-fundamentals":
      "/blog/cia-part-1-syllabus",
    "/cfe-exam-home-test-center": "/blog/cfe-exam-home-test-center",
    "/cfe-exam-fees-and-retake-policy": "/blog/cfe-exam-fees-and-retake-policy",
    "/cia-exam-syllabus-2025-update": "/blog/cia-exam-syllabus",
    "/unlock-your-cfe-exam-success-with-these-proven-strategies":
      "/blog/cfe-exam-success",
    "/cia-exam-preparation-tips-for-cracking-exam-in-first-attempt":
      "/blog/cia-exam-preparation-tips",
    "/how-cams-certification-prepares-you-for-the-aml-career":
      "/blog/aml-career",
    "/curriculum-of-certified-fraud-examiner-module3-investigation":
      "/blog/cfe-module-3",
    "/the-impact-of-digital-tools-and-platforms-on-internal-audit-work":
      "/blog/internal-audit-work",
    "/how-cams-certification-equips-you-for-global-aml-challenges":
      "/blog/aml-challenges",
    "/curriculum-of-certified-fraud-examiner-module-2-law":
      "/blog/cfe-module-2",
    "/business-knowledge-for-internal-auditing-cia-part-3-curriculum":
      "/blog/cia-part-3-curriculum",
    "/job-opportunities-with-certified-fraud-examiner-certification":
      "/blog/cfe-job-opportunities",
    "/cfe-module-1-financial-transactions-and-fraud-schemes":
      "/blog/cfe-module-1",
    "/practice-of-internal-auditing-(cia-part-2-curriculum)":
      "/blog/cia-part-2-curriculum",
    "/essentials-of-internal-auditing-(cia-part-1-curriculum)":
      "/blog/cia-part-1-curriculum",
    "/your-guide-to-success-with-a-fraud-analyst-course":
      "/blog/fraud-analyst-course",
    "/a-step-by-step-guide-to-the-cia-exam-registration-process":
      "/blog/cia-exam-registration-process",
    "/essential-fraud-examiner-skills-to-avoid-and-spot-fraud":
      "/blog/cfe-fraud-skills",
    "/a-detailed-guide-on-certified-internal-auditor-functions":
      "/blog/certified-internal-auditor-functions",
    "/top-10-cams-exam-tips-to-pass-on-your-first-attempt":
      "/blog/cams-exam-tips",
    "/how-to-become-the-best-fraud-investigator": "/blog/fraud-investigator",
    "/what-are-the-cia-course-eligibility-criteria-in-india":
      "/blog/cia-course-eligibility-criteria",
    "/comprehensive-guide-to-understand-and-implement-kyc-compliance":
      "/blog/kyc-compliance",
    "/which-certifications-are-related-to-aml-compliance":
      "/blog/aml-compliance",
    "/what-is-the-cams-certification-cost-and-the-benefits":
      "/blog/cams-certification-cost",
    "/what-is-the-cia-certification-cost-and-duration-in-india":
      "/blog/cia-certification-cost-duration-india",
    "/internal-audits-role-in-fraud-prevention-and-detection":
      "/blog/role-of-internal-audit-fraud",
    "/understanding-the-role-of-a-certified-fraud-examiner-in-todays-business-landscape":
      "/blog/certified-fraud-examiner-role",
    "/what-are-the-practical-steps-in-an-internal-audit":
      "/blog/steps-of-internal-audit",
    "/certified-fraud-examiners-everything-you-need-to-know":
      "/blog/certified-fraud-examiner",
    "/what-are-the-benefits-of-becoming-cia": "/blog/benefits-of-becoming-cia",
    "/the-impact-of-cfe-in-corporate-world": "/blog/cfe-in-corporate-world",
    "/5-key-skills-required-to-pass-cia-exam": "/blog/cia-exam-key-skills",
    "/cfe-certification-cost-in-india": "/blog/cfe-certification-cost",
    "/how-to-achieve-cfe-certification-in-less-than-30-days":
      "/blog/achieve-cfe-certification",
    "/why-we-should-become-cfe": "/blog/benefits-of-becoming-cfe",
    "/steps-to-become-cfe": "/blog/steps-to-become-cfe",
    "/schedule-of-classes": "/blog/schedule-of-classes",
  };
  return (
    <div className="font-sans text-gray-800 min-h-screen flex flex-col">
      <ScrollToTop />
      <CanonicalTag />
      <GoogleAnalytics />
      <NotificationPopup />
      <FloatingContact />
      <Toaster position="top-right" richColors />
      <Layout>
        <Meta />
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-aia" element={<AboutPage />} />
            <Route
              path="/about-us"
              element={<Navigate to="/about-aia" replace />}
            />
            <Route path="/cfe-curriculum" element={<CFECurriculam />} />
            <Route path="/cia-curriculum" element={<CIACurriculam />} />
            <Route
              path="/cia-challenge-curriculum"
              element={<CIAChallenge />}
            />
            <Route path="/cams" element={<CAMS />} />
            <Route path="/cfe-free-resources" element={<FreeResources />} />
            <Route
              path="/cfe-free-resource/:questions_module"
              element={<CfePracticeQuestion />}
            />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />

            <Route path="/blogs/course/:courseName" element={<BlogCourse />} />
            <Route path="/our-passouts" element={<OurPassout />} />
            <Route path="/passed-out" element={<OurPassout />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/passout-stories/:slug"
              element={<PassoutStoriesSlug />}
            />
            <Route path="/enroll-now" element={<Enrool />} />
            <Route path="/corporate-training" element={<CorporateTraining />} />
            <Route path="/policies" element={<Policies />} />
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditions />}
            />
            <Route path="*" element={<NotFound />} />

            {/* ----------------BLOG ROUTES----------------------------- */}
            {Object.entries(blogRedirects).map(([oldPath, newPath]) => (
              <Route
                key={oldPath}
                path={oldPath}
                element={<Navigate to={newPath} replace />}
              />
            ))}
          </Routes>
        </main>
      </Layout>
    </div>
  );
}
