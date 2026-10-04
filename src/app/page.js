import Navbar from "@/components/layout/Navbar.jsx";
import BuiltForEveryone from "@/components/sections/BuiltForEveryone";
import CoreSolutions from "@/components/sections/CoreSolutions.jsx";
import Hero from "@/components/sections/Hero.jsx";
import Integration from "@/components/sections/Integration.jsx";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/sections/Footer.jsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CoreSolutions />
        <BuiltForEveryone />
        <Integration />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
}
