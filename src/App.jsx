import locomotiveScroll from "locomotive-scroll";
import { createRef, useEffect } from "react";
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Services from "./components/Services";
import TrackRecord from "./components/TrackRecord";
import WhyUs from "./components/WhyUs";

function App() {

  const scrollRef = createRef();

  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: scrollRef.current,
      smooth: true
    });
  });

  return (
    <main ref={scrollRef}>
      <Navbar />
      <Hero />
      <Services />
      <TrackRecord />
      <WhyUs />
    </main>
  )
}

export default App
