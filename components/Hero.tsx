import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="pageContainer">
        <div className={styles.heroInner}>
          <div className={styles.intro}>
            <p className={styles.eyebrow}>Computer Science Graduate</p>

            <h1 className={styles.title}>
              Khalifa Waziri
              <span>Software, AI and iOS.</span>
            </h1>

            <p className={styles.description}>
              I build practical software and enjoy turning ideas into working
              products, with a particular interest in iOS development,
              artificial intelligence and modern software engineering.
            </p>

            <div className={styles.actions}>
              <Link className={styles.primaryButton} href="#work">
                View my work
              </Link>

              <a
                className={styles.textLink}
                href="https://github.com/khaleefahwaziri"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                className={styles.textLink}
                href="https://www.linkedin.com/in/khaleefah-waziri-369677235/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>

              <Link className={styles.textLink} href="#contact">
                Contact
              </Link>
            </div>
          </div>

          <div className={styles.sideNote}>
            <span>Based in the UK</span>
            <span>Open to graduate opportunities</span>
          </div>
        </div>
      </div>
    </section>
  );
}