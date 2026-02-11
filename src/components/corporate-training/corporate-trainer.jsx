import { IMAGE_PATH } from "@/api/base-url";
import React from "react";

const CorporateTrainer = () => {
  return (
    <div className="bg-linear-to-r from-slate-700 via-slate-600 to-blue-950 ">
      <div className="max-w-340 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-x-12 items-center">
          <div className="relative px-4 shadow-[4px_0_15px_rgba(0,0,0,0.15)]">
            <img
              src={`${IMAGE_PATH}/faculty_cfe.webp`}
              alt="Puneet Garg - Trainer"
              className="w-full h-auto relative z-0"
            />
          </div>

          <div className="text-white">
            <div className="text-center">
              <h2 className="text-2xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-white via-[#F3831C] to-[#F3831C] italic block">
                Know Your Trainer
              </h2>
              <p className="text-xl md:text-2xl mb-4 font-medium">
                Not Just a Trainer, But Your Success Coach
              </p>
            </div>

            <div className="space-y-2 text-base leading-relaxed">
              <p>
                <span className="font-bold text-3xl italic text-justify">
                  Puneet Garg
                </span>{" "}
                is a distinguished professional with over 22 years of leadership
                experience in Internal Audit, Risk Management, Compliance,
                Forensics, and Financial Advisory. A Chartered Accountant (CA),
                Company Secretary (CS), and globally certified expert holding
                the CIA, CFE, and CAMS credentials.
              </p>

              <p className="text-justify">
                Puneet represents a rare blend of technical depth and strategic
                insight in the governance and assurance domain. He has worked
                with leading multinational organizations, including Samsung,
                Hyundai, Panasonic and Alchemist, while served as Head of
                Internal Audit at DCM Shriram Industries Ltd.
              </p>
              <p className="text-justify">
                His strong foundation in corporate governance, risk controls,
                and fraud investigation has established him as a trusted
                authority in the audit and compliance landscape. An Authorized
                Trainer with the National Stock Exchange (NSE) Academy, he has
                been instrumental in advancing professional excellence and
                capacity building for finance and audit professionals across
                India.
              </p>
              <p className="text-justify">
                As the CEO and Lead Faculty at the Academy of Internal Audit
                (AIA), he has designed and delivered specialized training
                programs for both public and private sector organizations —
                including regulatory and investigative bodies.
              </p>
              <p className="text-justify">
                His programs go beyond certification, equipping professionals
                with practical forensic insights, robust control frameworks, and
                global compliance standards that directly strengthen an
                organization’s internal audit effectiveness, risk management
                maturity, and fraud resilience.
              </p>
              <p className="text-justify">
                Puneet’s initiatives to train corporate teams are not limited to
                helping them earn global credentials, but also to ensure they
                acquire real-world analytical and auditing skills that
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateTrainer;
