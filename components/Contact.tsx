export default function Contact() {
  return (
    <section
      id="contact"
      className="section contactSection"
      aria-labelledby="contact-heading"
    >
      <div className="pageContainer">
        <div className="contactLayout">
          <span className="sectionLabel">Contact</span>

          <div className="contactMain">
            <h2 id="contact-heading">Let&apos;s build something useful.</h2>

            <p>
              I&apos;m open to graduate and early-career opportunities in
              software development, iOS and related technology roles. If
              you&apos;d like to discuss an opportunity or my work, feel free
              to get in touch.
            </p>

            <a
              className="contactEmail"
              href="mailto:khalifaabubakar39@gmail.com"
            >
              khalifaabubakar39@gmail.com
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <footer className="contactFooter">
            <span>© Khalifa Waziri</span>

            <div className="contactLinks">
              <a
                href="https://github.com/khaleefahwaziri"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>

              <a
                href="https://www.linkedin.com/in/khaleefah-waziri-369677235/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>

              <a href="#top">
                Back to top <span aria-hidden="true">↑</span>
              </a>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}