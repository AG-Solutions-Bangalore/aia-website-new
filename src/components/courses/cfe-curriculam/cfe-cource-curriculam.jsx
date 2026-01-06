import CourseCurriculum from "../common/course-curriculam";

const curriculumData = [
  {
    id: 1,
    title: "FINANCIAL TRANSACTIONS & FRAUD SCHEMES",
    content: [
      "Accounting Concepts",
      "Financial Statement Fraud",
      "Asset Misappropriation: Cash Receipts",
      "Fraudulent Disbursements",
      "Inventory and Other Assets",
      "Bribery and Corruption",
      "Theft of Data and Intellectual Property",
      "Identity Theft",
      "Financial Institution Fraud",
      "Payment Fraud",
      "Insurance Fraud",
      "Health Care Fraud",
      "Consumer Fraud",
      "Computer and Internet Fraud",
      "Contract and Procurement Fraud",
    ],
  },
  {
    id: 2,
    title: "LAW",
    content: [
      "Overview of The Legal System",
      "The Law Related to Fraud",
      "Bankruptcy (Insolvency) Fraud",
      "Securities Fraud",
      "Money Laundering",
      "Tax Fraud",
      "Individual Rights During Examinations",
      "The Criminal Justice System",
      "The Civil Justice System",
      "Basic Principles of Evidence",
      "Testifying",
    ],
  },
  {
    id: 3,
    title: "INVESTIGATION",
    content: [
      "Planning and Conducting a Fraud Examination",
      "Analyzing Documents",
      "Interview Theory and Application",
      "Interviewing Suspects and Signed Statements",
      "Covert Examinations",
      "Sources of Information",
      "Data Analysis and Reporting Tools",
      "Digital Forensics",
      "Tracing Illicit Transactions",
      "Report Writing",
    ],
  },
  {
    id: 4,
    title: "FRAUD PREVENTION & DETERRENCE",
    content: [
      "Understanding Criminal Behaviour",
      "White-collar Crime",
      "Corporate Governance",
      "Management’s Fraud – Related Responsibilities",
      "Auditors’ Fraud Related Responsibilities",
      "Fraud Prevention Programs",
      "Fraud Risk Assessment",
      "Fraud Risk Management",
      "Professional Code of Ethics",
    ],
  },
];

const CfeCourseCurriculum = () => {
  return (
    <CourseCurriculum
      title="CFE Curriculum"
      curriculumData={curriculumData}
    />
  );
};

export default CfeCourseCurriculum;
