/* Components and organization based on whosbl33h: https://github.com/bl33h/whosbl33h--!>*/

import NavBar from "../Components/nav/NavBar";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Hero from "../Pages/Hero";
import Internships from "../Pages/Internships";
import Projects from "../Pages/Projects";
import Skills from "../Pages/Skills";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Internships />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
