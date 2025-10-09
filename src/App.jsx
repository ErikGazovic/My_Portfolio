import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Introduction from "./components/About/Introduction";
import About from "./components/About";
import MySkills from "./components/About/MySkills";
import Projects from "./components/Projects.jsx";
import DownloadCV from "./components/DownloadCV.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <main className="scroll-smooth">
      <Navbar />
      <Home />
      <About>
        <Introduction forWhat={"about"} />
        <MySkills />
      </About>
      <div className="h-15 w-full bg-[#222831] relative top-15"></div>
      <Projects />
      <DownloadCV />
      <Contact />
      <Footer />
    </main>
  );
}
