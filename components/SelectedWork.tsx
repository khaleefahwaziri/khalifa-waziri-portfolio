import Image from "next/image";
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
                <div className={`${styles.appScreen} ${styles.leftScreen}`}>
                <Image
                src="/images/expense-flow/expense-add.png"
                alt="Expense Flow screen for adding a new expense"
                fill
                sizes="(max-width: 700px) 150px, 190px"
                className={styles.appScreenshot}
                />
            </div>

            <div className={`${styles.appScreen} ${styles.mainScreen}`}>
                <Image
                src="/images/expense-flow/expense-home.png"
                alt="Expense Flow main application screen"
                fill
                sizes="(max-width: 700px) 170px, 215px"
                className={styles.appScreenshot}
                priority
                />
            </div>

            <div className={`${styles.appScreen} ${styles.rightScreen}`}>
                <Image
                src="/images/expense-flow/expense-breakdown.png"
                alt="Expense Flow spending breakdown screen"
                fill
                sizes="(max-width: 700px) 150px, 190px"
                className={styles.appScreenshot}
                />
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

  <div className={styles.browserShowcase}>
    <div className={`${styles.browserScreen} ${styles.browserScreenMain}`}>
      <Image
        src="/images/ride-sharing/ride-dashboard.png"
        alt="Ride-Sharing driver dashboard"
        fill
        sizes="(max-width: 700px) 90vw, 640px"
        className={styles.browserScreenshot}
      />
    </div>

    <div className={styles.browserSecondaryRow}>
      <div className={styles.browserScreen}>
        <Image
          src="/images/ride-sharing/ride-post.png"
          alt="Ride-Sharing ride posting screen"
          fill
          sizes="(max-width: 700px) 44vw, 300px"
          className={styles.browserScreenshot}
        />
      </div>

      <div className={styles.browserScreen}>
           <Image
               src="/images/ride-sharing/ride-listings.png"
               alt="Ride-Sharing ride listings screen"
               fill
               sizes="(max-width: 700px) 44vw, 300px"
               className={styles.browserScreenshot}
                />
            </div>
         </div>
       </div>
      </div>
        </article>
      </div>
    </section>
  );
}