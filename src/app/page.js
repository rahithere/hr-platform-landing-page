import Navbar from "./component/layout/Navbar";
import BuiltForEveryone from "./component/sections/BuiltForEveryone";
import CoreSolutions from "./component/sections/CoreSolutions";
import Hero from "./component/sections/Hero";

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
