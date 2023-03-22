import Hero from "../fragments/home-pages/Hero";
import Specials from "../fragments/home-pages/Specials";
import Testimonials from "../fragments/home-pages/Testimonials";
import About from "../fragments/home-pages/About";
export default function Home() {
  return (
    <>
      <Hero />
      <Specials />
      <Testimonials />
      <About />
    </>
  );
}