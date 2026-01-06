import CourseCurriculum from "../common/course-curriculam";

const curriculumData = [
  {
    id: 1,
    title: "Essentials of Internal Auditing 35%",
    content: [
      "Foundations of Internal Auditing",
      "Independence and Objectivity",
      "Proficiency and Due Professional Care",
      "Quality Assurance and Improvement Program",
      "Governance, Risk Management, and Control",
      "Fraud Risks",
    ],
  },
  {
    id: 2,
    title: "Practice of Internal Auditing 43%",
    content: [
      "Managing the Internal Audit Activity",
      "Planning the Engagement",
      "Performing the Engagement",
      "Communicating Engagement Results and Monitoring Progress",
    ],
  },
  {
    id: 3,
    title: "Business Knowledge for Internal Auditing for CA, CPA, ACCA, etc 22%",
    content: [
      "Business Acumen",
      "Data Analytics",
      "Information Technology and Security",
    ],
  },
];

const CiaCourseCurriculum = () => {
  return (
    <CourseCurriculum
      title="CIA Challenge Curriculum"
      curriculumData={curriculumData}
    />
  );
};

export default CiaCourseCurriculum;
