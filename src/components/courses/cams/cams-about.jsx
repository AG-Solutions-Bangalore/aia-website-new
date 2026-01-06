import CourseAbout from "../common/course-about";



const CamsAbout=()=> {
 

  return (
    <>
      <CourseAbout
  badgeText="Best Prep Course For CAMS Preparation"
  heading="Join AIA Prep Course and Get 100% Success in CAMS Exam"
  description={`CAMS is the global gold standard in the AML Certifications, with more than 40,000 CAMS graduates Worldwide.\nAcademy of Internal Audit Provides end-to-end training for CAMS Certification.`}
  aboutStats={[
    { display: "Recorded Video Classes", title: "Expert Mentoring Sessions" },
    { display: "Practice Questions", title: "Success Rate" },
    { display: "CAMS Version 7 Study Material", title: "Success Stories" },
    { display: "CAMS Qualified Trainer", title: "Served" },
  ]}
/>

    </>
  );
}



export default CamsAbout