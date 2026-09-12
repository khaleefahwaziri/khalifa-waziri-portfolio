import styles from "./SelectedWork.module.css";

export default function SelectedWork() {
  return (
    <section className={styles.work} id="work">
      <div className="pageContainer">
        <div className={styles.sectionHeader}>
          <p className="sectionLabel">01 / Selected Work</p>

          <p className={styles.sectionIntro}>
            A selection of academic and software projects across artificial
            intelligence, iOS development and full-stack web development.
          </p>
        </div>

        <article className={styles.project}>
          <div className={styles.projectInformation}>
            <div className={styles.projectNumber}>01</div>

            <div>
              <p className={styles.projectType}>
                MSc Dissertation · Artificial Intelligence
              </p>

              <h2 className={styles.projectTitle}>
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

          <div className={`${styles.visual} ${styles.researchVisual}`}>
            <div className={styles.researchPipeline}>
              <span>Dataset</span>
              <span className={styles.arrow}>→</span>
              <span>Models</span>
              <span className={styles.arrow}>→</span>
              <span>Explainability</span>
              <span className={styles.arrow}>→</span>
              <span>Bias Analysis</span>
            </div>

            <div className={styles.statGrid}>
              <div>
                <strong>396K</strong>
                <span>Biographies</span>
              </div>

              <div>
                <strong>28</strong>
                <span>Occupations</span>
              </div>

              <div>
                <strong>94.4%</strong>
                <span>Neutral proxy terms</span>
              </div>

              <div>
                <strong>22/28</strong>
                <span>Potential adverse impact</span>
              </div>
            </div>
          </div>
        </article>

        <article className={`${styles.project} ${styles.reverse}`}>
          <div className={styles.projectInformation}>
            <div className={styles.projectNumber}>02</div>

            <div>
              <p className={styles.projectType}>
                Independent Project · iOS Development
              </p>

              <h2 className={styles.projectTitle}>Expense Flow</h2>

              <p className={styles.projectDescription}>
                My first independent SwiftUI project, built as a personal
                expense-tracking application using Swift, SwiftUI and Xcode.
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

          <div className={`${styles.visual} ${styles.productVisual}`}>
            <div className={styles.phoneBack}>
              <span>Expense Flow</span>
            </div>

            <div className={styles.phoneFront}>
              <div className={styles.phoneNotch} />
              <div className={styles.screenPlaceholder}>
                <span>Expense Flow</span>
                <small>Real app screen coming next</small>
              </div>
            </div>
          </div>
        </article>

        <article className={styles.project}>
          <div className={styles.projectInformation}>
            <div className={styles.projectNumber}>03</div>

            <div>
              <p className={styles.projectType}>
                University Group Project · Web Development
              </p>

              <h2 className={styles.projectTitle}>Ride-Sharing Platform</h2>

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

          <div className={`${styles.visual} ${styles.browserVisual}`}>
            <div className={styles.browserBar}>
              <div className={styles.browserDots}>
                <span />
                <span />
                <span />
              </div>

              <span className={styles.browserLabel}>Ride-Sharing Platform</span>
            </div>

            <div className={styles.browserContent}>
              <span>Real application screenshot coming next</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}