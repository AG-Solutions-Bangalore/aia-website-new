import CourseCurriculum from "../common/course-curriculam";

const curriculumData = [
  {
    id: 1,
    title: "Internal Audit Fundamentals",
    content: [
      "CIA Part 1 - Internal Audit Fundamentals provides comprehensive coverage on fundamentals of Internal Auditing, ethical norms and professionalism, core concepts of governance, risk management, and control frameworks. It also provides exposure to potential fraud risks to help professionals stay prepared for evolving audit demands.",
      "Foundation of Internal Auditing (35%)",
      "Ethics & Professionalism (20%)",
      "Governance, Risk Management and Control (30%)",
      "Fraud Risks (15%)",
    ],
  },
  {
    id: 2,
    title: "Internal Audit Engagement",
    content: [
      "CIA Part 2 - Internal Audit Engagement focuses on applying internal audit processes in real-world scenarios. It covers audit engagement planning, information gathering, analysis, evaluation, and supervision best practices.",
      "Engagement Planning (50%)",
      "Information Gathering, Analysis & Evaluation (40%)",
      "Engagement Supervision & Communication (10%)",
    ],
  },
  {
    id: 3,
    title: "Internal Audit Function",
    content: [
      "CIA Part 3 focuses on the Internal Audit Function, emphasizing audit operations, departmental planning, quality assurance, engagement reporting, and monitoring. This part has significant curriculum updates in 2025.",
      "Internal Audit Operations (25%)",
      "Internal Audit Plan (15%)",
      "Quality of Internal Audit Functions (15%)",
      "Engagement Result & Monitoring (45%)",
    ],
  },
];

const CiaCurrCourseCurriculum = () => {
  return (
    <CourseCurriculum
      title="CIA Curriculum"
      curriculumData={curriculumData}
    />
  );
};

export default CiaCurrCourseCurriculum;
