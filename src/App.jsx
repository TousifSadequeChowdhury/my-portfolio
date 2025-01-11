import { useState, useEffect } from "react";
import "./App.css";
import Nav from "./assets/components/Nav";
import Hero from "./assets/components/Hero";
import About from "./assets/components/About";
import Projects from "./assets/components/Projects";
import Education from "./assets/components/Education";
import Contact from "./assets/components/Contact";
import Footer from "./assets/components/Footer";
import Skills from "./assets/components/Skills";
import Landing from "./assets/components/Landing"; // Import Landing
import Experience from "./assets/components/Experience ";

function App() {
  const [transitionComplete, setTransitionComplete] = useState(false);

  // Transition after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setTransitionComplete(true);
    }, 3000); // 3-second delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!transitionComplete ? (
        <Landing onComplete={() => setTransitionComplete(true)} />
      ) : (
<div
  className="font-lexend"
  style={{
    background: `
      radial-gradient(circle at 20% 30%, #08224E 20%, #f8fafb 30%) ,
      radial-gradient(circle at 70% 80%, #f8fafb 20%, #08224E 30%) ,
      radial-gradient(circle at 50% 50%, #08224E 10%, #f8fafb 40%)`,
    backgroundSize: "100% 100%",
  }}
>
  {/* Nav Bar Always Visible */}
          <Nav />

          {/* Responsive Layout */}
          <div className="flex flex-col  overflow-y-auto">
            {/* Main Content */}
            <Hero />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Contact />
          </div>

          {/* Footer Always Visible */}
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
