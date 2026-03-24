import Navbar from "./components/Navbar";

import Footer from "./components/footer";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/home";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
