import { Routes, Route } from "react-router-dom";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./ScrollToTop";
import "./App.css";
import Contact from "./Components/Contact/Contact";
import Service from "./Components/Service/Service";
import Social from "./Components/Social/Social";
import Gallery from "./Components/Gallery/Gallery";
import Seo from "./Components/Description/Seo";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/social" element={<Social />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/seo" element={<Seo />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
