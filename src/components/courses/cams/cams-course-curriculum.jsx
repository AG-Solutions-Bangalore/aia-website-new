import CourseCurriculum from "../common/course-curriculam";


const curriculumData = [
  {
    id: 1,
    title: "Understanding the Risks and Methods of Financial Crime",
    content: [
      "Money Laundering and Financial Crime",
      "Money Laundering Risks in Financial Services",
      "Money Laundering Risks in Nonbank Financial Institutions",
      "Money Laundering Risks in DNFBPs and Other High-Risk Sectors",
    ],
  },
  {
    id: 2,
    title: "Global AFC Frameworks, Governance, and Regulations",
    content: [
      "Global AFC Standards and Guidance",
      "AFC Regulations and Regimes",
      "Use of Guidance and AFC Cooperation",
    ],
  },
  {
    id: 3,
    title: "Building an AFC Compliance Program",
    content: [
      "Components of an AFC Program",
      "Risk Assessment",
      "Design your AFC Program and Controls",
      "Transaction Monitoring and Investigation",
      "Concluding Investigations and Coordinating with Law Enforcement",
    ],
  },
  {
    id: 4,
    title: "Tools and Technologies to Fight Financial Crimes",
    content: [
      "Technology for AFC Compliance",
      "Technology for Customer Onboarding",
      "Technology for Ongoing Monitoring and Investigations",
      "Data Collection and Preparation",
    ],
  },
];

const CamsCourseCurriculum=()=> {
  return (
    <CourseCurriculum
      title="CAMS Version 7 Curriculum"
      curriculumData={curriculumData}
    />
  );
}


export default CamsCourseCurriculum;