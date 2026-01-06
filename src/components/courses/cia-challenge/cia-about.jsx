






import CourseAbout from "../common/course-about";



const CiaAbout=()=> {
 

  return (
    <>
      <CourseAbout
  badgeText="Best Prep Course For CIA Challenge Exam"
  heading="Join AIA Prep Course and Get 100% Success in CIA Challenge Exam"
  description={`
The globally recognized CIA Challenge exam is a fast track for qualified professionals to earn the prestigious CIA Certification by passing one exam.\n AIA supports your success with expert-led video lectures and concise learning notes designed for efficient, practical exam preparation`}
  aboutStats={[
    { display: "Recorded Video Classes", title: "Expert Mentoring Sessions" },
    { display: "Practice Questions", title: "Success Rate" },
    { display: "Experts Study Material", title: "Success Stories" },
    { display: "CIA Qualified Trainer", title: "Served" },
  ]}
/>

    </>
  );
}



export default CiaAbout