import locomotiveScroll from "locomotive-scroll";
import { createRef, useEffect } from "react";
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Services from "./components/Services";

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
      <div className="h-screen bg-white"></div>
    </main>
  )
}

export default App
