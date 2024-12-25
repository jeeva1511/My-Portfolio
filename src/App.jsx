import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Project from "./components/Project";
import "./App.css";
import "./index.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";


const App = ()=>{
  return (
    <>
    <Navbar />
    <Home />
    <About />
    <Project />
    <Contact />
    <Footer />
    </>
    
  );
}

export default App;
