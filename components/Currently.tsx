export default function Currently() {
  return (
    <section id="currently" className="section">
      <div className="pageContainer">
        <div className="currentlyLayout">
          <div>
            <span className="sectionLabel">Currently</span>
            <h2>What I&apos;m focused on.</h2>
          </div>

          <div className="currentlyGrid">
            <div className="currentlyItem">
              <span>01</span>
              <h3>Building</h3>
              <p>
                Developing my skills through practical software projects, with
                a particular focus on iOS development using Swift and SwiftUI.
              </p>
            </div>

            <div className="currentlyItem">
              <span>02</span>
              <h3>Looking for</h3>
              <p>
                Graduate and early career opportunities where I can contribute,
                learn from experienced teams and continue developing as a
                software engineer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}