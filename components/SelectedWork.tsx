import styles from "./SelectedWork.module.css";
import ExpenseFlowShowcase from "./ExpenseFlowShowcase";
import RideSharingShowcase from "./RideSharingShowcase";

export default function SelectedWork() {
  return (
    <section
      className={styles.work}
      id="work"
      aria-labelledby="selected-work-heading"
    >
      <div className="pageContainer">
        <div className={styles.sectionHeader}>
          <p className="sectionLabel">01 / Selected Work</p>

          <p id="selected-work-heading" className={styles.sectionIntro}>
            A selection of academic and software projects across artificial
            intelligence, iOS development and full-stack web development.
          </p>
        </div>

        {/* Expense Flow */}
        <article
           className={`${styles.project} ${styles.expenseProject}`}
           aria-labelledby="expense-flow-heading"
          >
          <div className={styles.projectInformation}>
            <div className={styles.projectNumber} aria-hidden="true">
              01
            </div>

            <div>
              <p className={styles.projectType}>
                Independent Project · iOS Development
              </p>

              <h2
                id="expense-flow-heading"
                className={styles.projectTitle}
              >
                Expense Flow
              </h2>

              <p className={styles.projectDescription}>
                A SwiftUI project built as a personal expense-tracking
                application using Swift, SwiftUI and Xcode.
              </p>

              <div className={styles.metaGrid}>
                <div>
                  <span>Role</span>
                  <p>iOS Developer</p>
                </div>

                <div>
                  <span>Technology</span>
                  <p>Swift, SwiftUI, Xcode</p>
                </div>
              </div>
            </div>
          </div>

          <ExpenseFlowShowcase />
        </article>

        {/* Ride-Sharing Platform */}
        <article
          className={`${styles.project} ${styles.rideProject}`}
          aria-labelledby="ride-sharing-heading"
        > 
          <div className={styles.projectInformation}>
            <div className={styles.projectNumber} aria-hidden="true">
              02
            </div>

            <div>
              <p className={styles.projectType}>
                Group Project · Web Development
              </p>

              <h2
                id="ride-sharing-heading"
                className={styles.projectTitle}
              >
                Ride-Sharing Platform
              </h2>

              <p className={styles.projectDescription}>
                A university group project where I contributed to core driver
                and ride-management functionality across the application.
              </p>

              <div className={styles.metaGrid}>
                <div>
                  <span>My contribution</span>
                  <p>
                    Ride posting, confirmation, cancellation, driver dashboard
                    and ride listings
                  </p>
                </div>

                <div>
                  <span>Technology</span>
                  <p>
                    Prisma, Fastify, Vuetify, MySQL, Swagger, Azure DevOps,
                    GitHub
                  </p>
                </div>
              </div>
            </div>
          </div>

          <RideSharingShowcase />
        </article>

        {/* Dissertation */}
        <article
          className={styles.project}
          aria-labelledby="dissertation-heading"
        >
          <div className={styles.projectInformation}>
            <div className={styles.projectNumber} aria-hidden="true">
              03
            </div>

            <div>
              <p className={styles.projectType}>
                MSc Dissertation · Artificial Intelligence
              </p>

              <h2
                id="dissertation-heading"
                className={styles.projectTitle}
              >
                Detecting Hidden Bias in Automated CV Screening Systems
              </h2>

              <p className={styles.projectDescription}>
                An explainable AI research project investigating hidden bias in
                automated CV screening across 28 occupations using the Bias in
                Bios dataset.
              </p>

              <div className={styles.metaGrid}>
                <div>
                  <span>Role</span>
                  <p>Researcher / Developer</p>
                </div>

                <div>
                  <span>Methods</span>
                  <p>TF-IDF, Logistic Regression, BERT, SHAP, LIME</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`${styles.visual} ${styles.researchVisual}`}
            aria-label="Dissertation research summary"
          >
            <div className={styles.researchTop}>
              <div>
                <span className={styles.researchLabel}>
                  Research pipeline
                </span>

                <div className={styles.researchPipeline}>
                  <span>Bias in Bios</span>
                  <span className={styles.arrow} aria-hidden="true">
                    →
                  </span>
                  <span>ML Models</span>
                  <span className={styles.arrow} aria-hidden="true">
                    →
                  </span>
                  <span>SHAP + LIME</span>
                  <span className={styles.arrow} aria-hidden="true">
                    →
                  </span>
                  <span>Fairness Analysis</span>
                </div>
              </div>

              <span className={styles.researchCode}>MSc · 2026</span>
            </div>

            <div className={styles.researchFinding}>
              <span className={styles.findingLabel}>Key finding</span>

              <p>
                Bias can persist through seemingly neutral proxy terms even
                when explicit gender indicators are removed.
              </p>
            </div>

            <div className={styles.statGrid}>
              <div>
                <strong>396K</strong>
                <span>Biographies analysed</span>
              </div>

              <div>
                <strong>28</strong>
                <span>Occupations evaluated</span>
              </div>

              <div>
                <strong>94.4%</strong>
                <span>
                  Top SHAP features identified as neutral proxy terms
                </span>
              </div>

              <div>
                <strong>22/28</strong>
                <span>Occupations showing potential adverse impact</span>
              </div>
            </div>

            <div className={styles.researchFooter}>
              <span>TF-IDF</span>
              <span>Logistic Regression</span>
              <span>BERT</span>
              <span>SHAP</span>
              <span>LIME</span>
              <span>PBVF</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}