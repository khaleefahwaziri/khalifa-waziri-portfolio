import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";

export default function Home() {
  return (
    <>
      <Navigation />

      <main>
        <Hero />

        <SelectedWork />

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