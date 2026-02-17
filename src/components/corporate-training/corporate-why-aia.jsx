import React from "react";
import styles from "./corporate-why-aia.module.css";
import { IMAGE_PATH } from "@/api/base-url";

const CorporateWhyAia = () => {
  return (
    <section className="pt-0 my-16 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="mb-2 text-xl font-semibold text-gray-900">
            Why Choose AIA 
          </div>

          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            For <span className="text-orange-500">Corporate Training</span> 
          </h2>

          <p className="text-gray-600 leading-relaxed">
            We partner with organizations that want more than short-term
            training outcomes. Our corporate programs are designed to strengthen
            internal capability, improve professional standards, and deliver
            measurable business impact. By combining global certifications with
            practical learning, we help teams perform better, adapt faster, and
            contribute meaningfully to organizational goals
          </p>
        </div>
        <div className="relative w-full mx-auto">
          <div className={`${styles["work-flow-wrp"]}`} data-wow-delay="0.3s">
            <div className={styles["work-flow-box"]}>
              <div className={styles["work-flow-box-overlay"]}>
                <div className={styles["work-flow-wrp"]}>
                  <div className={styles["work-flow"]}>
                    <div className={styles["work-flow-outer"]}>
                      <div className={styles["work-flow-inner"]}>
                        <div className={styles["work-flow-logo"]}>
                          <img
                            // src="https://aia.in.net/webapi/public/assets/images/web_images/new_logo.webp"
                            src={`${IMAGE_PATH}/middle_logo.webp`}
                            alt="Web Design Company"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles["work-flow-oval-wrp"]}>
                    <div className={styles["work-flow-oval-item"]}>
                      <img
                        // src="https://www.matebiz.com/wp-content/themes/matebiz/matebiz-new/assests/images/ovel-1.png"
                        src={`${IMAGE_PATH}/ovel-1.png`}
                        className={styles["work-flow-oval"]}
                        alt="Web Design Company"
                        loading="lazy"
                      />

                      <span className={styles["work-flow-icon"]}>
                        <img
                          src={`${IMAGE_PATH}/corporation_icon_1.webp`}
                          alt="Web Design Company"
                          loading="lazy"
                        />
                      </span>
                    </div>

                    {[2, 3, 4, 5, 6].map((num) => (
                      <div key={num} className={styles["work-flow-oval-item"]}>
                        <img
                          src={`${IMAGE_PATH}/ovel-${num}.png`}
                          className={styles["work-flow-oval"]}
                          alt="Web Design Company"
                          loading="lazy"
                        />
                        <span className={styles["work-flow-icon"]}>
                          <img
                            src={`${IMAGE_PATH}/corporation_icon_${num}.webp`}
                            alt="Web Design Company"
                            loading="lazy"
                          />
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className={`${styles["workflow-content-list"]}`}>
                {[
                  "Proven Impact Across Corporate Teams",
                  "Trusted by Leading Institutions",
                  "Learning Built Around Real Outcomes",
                  "Training That Delivers Measurable ROI",
                  "Global Standards. Local Business Insight",
                  "Training That Is Tailored for Your Organization",
                ].map((title, index) => (
                  <div
                    key={index}
                    className={`${styles["workflow-content-list-item"]} `}
                  >
                    <div className={styles["workflow-content-wrap"]}>
                      <img
                        src={`${IMAGE_PATH}/ovel-lin${index + 1}.png`}
                        className={styles["workflow-icon"]}
                        alt="Workflow Icon"
                        loading="lazy"
                      />
                      <div className={styles["workflow-content-number"]}>
                        {`0${index + 1}`}
                      </div>
                      <h3 className={styles["workflow-content-title"]}>
                        {title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateWhyAia;
