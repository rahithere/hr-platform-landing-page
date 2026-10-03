import Navbar from "./component/layout/Navbar";
import CoreSolutions from "./component/sections/CoreSolutions";
import Hero from "./component/sections/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CoreSolutions />
      </main>
    </>
  );
}
