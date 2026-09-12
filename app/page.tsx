import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Navigation />

      <main>
        <Hero />

        <section className="section" id="work">
          <div className="pageContainer">
            <p className="sectionLabel">01 / Selected Work</p>
            <h2 className="placeholderTitle">Projects will live here.</h2>
          </div>
        </section>

        <section className="section" id="about">
          <div className="pageContainer">
            <p className="sectionLabel">02 / About</p>
            <h2 className="placeholderTitle">About section.</h2>
          </div>
        </section>

        <section className="section" id="currently">
          <div className="pageContainer">
            <p className="sectionLabel">03 / Currently</p>
            <h2 className="placeholderTitle">Currently section.</h2>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="pageContainer">
            <p className="sectionLabel">04 / Contact</p>
            <h2 className="placeholderTitle">Contact section.</h2>
          </div>
        </section>
      </main>
    </>
  );
}