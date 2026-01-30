


import CourseAbout from "../common/course-about";



const CfeAbout=()=> {
 

  return (
    <>
      <CourseAbout
  badgeText="Prepare for the CFE Exam with Confidence - Guided by AIA"
  heading="CFE Preparation That Builds Real Fraud Expertise in You"
  description={`
Certified Fraud Examiner (CFE) is a globally respected credential awarded by the ACFE, USA.\n At AIA, we help you understand fraud by learning how fraud schemes are planned, executed, detected, and investigated in real organisational settings. Our CFE preparation program combines structured learning, exam-focused practice, and expert guidance to help you build a practical fraud examiner’s mindset. \n This course is ideal for professionals from audit, finance, compliance, risk, or consulting who aim to clear the CFE exam and strengthen their credibility in fraud examination.`}
  aboutStats={[
    { display: "Recorded Video Sessions", title: "Expert Mentoring Sessions" },
    { display: "Expert Curated Practice Questions", title: "Success Rate" },
    { display: "Simplified Quick Study Notes", title: "Success Stories" },
    { display: "CFE-Qualified Faculty", title: "Served" },
  ]}
/>

    </>
  );
}



export default CfeAbout