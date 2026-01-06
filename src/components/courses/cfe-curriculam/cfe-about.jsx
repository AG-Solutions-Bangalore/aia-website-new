


import CourseAbout from "../common/course-about";



const CfeAbout=()=> {
 

  return (
    <>
      <CourseAbout
  badgeText="Best Prep Course For CFE Preparation"
  heading="Join AIA Prep Course and Get 100% Success in CFE Exam"
  description={`
CFE is a credential awarded by the ACFE, US. Academy of Internal Audit provides end to end Training sessions & study material for CFE Certification,\n which ensures you grab the CFE Certification and relevant knowledge, skills & confidence to excel in your professional career.`}
  aboutStats={[
    { display: "Recorded Video Classes", title: "Expert Mentoring Sessions" },
    { display: "Practice Questions", title: "Success Rate" },
    { display: "Customized Study Material", title: "Success Stories" },
    { display: "CFE Qualified Trainer", title: "Served" },
  ]}
/>

    </>
  );
}



export default CfeAbout