import Navbar from "@/components/layout/Navbar.jsx";
import BuiltForEveryone from "@/components/sections/BuiltForEveryone";
import CoreSolutions from "@/components/sections/CoreSolutions.jsx";
import Hero from "@/components/sections/Hero.jsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CoreSolutions />
        <BuiltForEveryone />
      </main>
    </>
  );
}
