export default function Contact() {
  return (
    <section id="contact" className="section contactSection">
      <div className="pageContainer">
        <div className="contactLayout">
          <span className="sectionLabel">Contact</span>

          <div className="contactMain">
            <h2>Let&apos;s build something useful.</h2>

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

          <div className="contactFooter">
            <span>© Khalifa Waziri</span>

            <div className="contactLinks">
              <a
                href="https://github.com/khaleefahwaziri"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/khaleefah-waziri-369677235/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>

              <a href="#top">Back to top ↑</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}