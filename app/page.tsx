import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import About from "@/components/About";
import Currently from "@/components/Currently";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navigation />

      <main id="top">
        <Hero />

        <SelectedWork />

        <About />

        <Currently />

        <Contact />
      </main>
    </>
  );
}