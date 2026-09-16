export default function About() {
  return (
    <section id="about" className="section">
      <div className="pageContainer">
        <div className="aboutLayout">
          <div className="aboutHeading">
            <span className="sectionLabel">About</span>
            <h2>A little about me.</h2>
          </div>

          <div className="aboutContent">
            <p className="aboutLead">
              I&apos;m Khalifa, a Computer Science graduate from Coventry
              University with an interest in building useful software and
              understanding the technology behind it.
            </p>

            <p>
              My work so far has taken me across different areas of computing,
              from developing iOS applications with Swift and SwiftUI to
              exploring machine learning, explainable AI and algorithmic
              fairness through my academic research.
            </p>

            <p>
              I enjoy the process of taking a problem, breaking it down and
              turning it into something that works. I&apos;m particularly
              interested in opportunities where I can keep developing as an
              engineer while contributing to real products and technical
              problems.
            </p>

            <div className="aboutDetails">
              <div>
                <span>Education</span>
                <p>BSc & MSc Computer Science</p>
                <p>Coventry University</p>
              </div>

              <div>
                <span>Interests</span>
                <p>Software Engineering</p>
                <p>AI · iOS · IT</p>
              </div>

              <div>
                <span>Location</span>
                <p>United Kingdom</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}