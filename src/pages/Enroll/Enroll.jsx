import CourseMap from "@/components/courses/common/course-map";
import CourseTopStudent from "@/components/courses/common/course-top-student";
import EnrollFaq from "@/components/enroll/enroll-faq";
import EnrollHighlight from "@/components/enroll/enroll-highlight";
import EnrollReview from "@/components/enroll/enroll-review";
import EnroolMap from "@/components/enroll/enrool-map";
import EnroolTopStudent from "@/components/enroll/enrool-top-student";
import HomeAlumniWork from "@/components/home/home-alumini-work";
import HomeReview from "@/components/home/home-review";

const Enrool = () => {
  return (
    <div>
      <EnrollHighlight />
      {/* <CourseTopStudent
        courseSlug="Enroll-Now"
        needPrefix="true"
        title="From Enroll Course"
      /> */}
      <EnroolTopStudent />
      {/* getAllPassoutStudents */}
      <HomeAlumniWork />
      <EnroolMap />
      {/* <EnrollReview /> */}
      <HomeReview />
      <EnrollFaq />
    </div>
  );
};

export default Enrool;
