import CourseAbout from "../courses/common/course-about";


















const HomeAbout=()=> {
 

  return (
    <>
      <CourseAbout
  badgeText="Academy of Internal Audit"
  heading="Excellence in Professional Education"
  description={`
AIA is an online training institute to secure success in international certification courses. With the proven study material, we are committed towards success in professional courses for our students and help them grow in their professional journey.
\n
We are pleased to say that our faculty has always been our greatest strength who is always ready to assist students with his knowledge theoretically and practically. We help aspirants not only how to obtain international certifications, but also how to have them in the real sense so that they can demonstrate the same skills and competence in relevant areas as well.
\n
Since 15 years, AIA has been teaching commerce students under the name of Perfect Coaching Centre and now providing guidance for Top Certification Courses as well.`}
  aboutStats={[
    { display: "50,000+ Hours", title: "Expert Mentoring Sessions" ,show:'true' },
    { display: "99.6% Success", title: "Success Rate" ,show:'true'},
    { display: "1,000+", title: "Success Stories",show:'true' },
    { display: "32+ Countries", title: "Served",show:'true' },
  ]}
/>

    </>
  );
}



export default HomeAbout