import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";  
import Home from "./pages/home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MorningPage from "./pages/Menu/MorningPage";
import LunchPage from "./pages/Menu/LunchPage";
import DinnerPage from "./pages/Menu/DinnerPage";
import CateringServices from "./pages/CateringServices";
 

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Main content wrapper to push footer down and avoid navbar overlap */}
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<CateringServices/>}/>
          
          {/* Menu Routes */}
          <Route path="/menu/morning" element={<MorningPage />} />
          <Route path="/menu/lunch" element={<LunchPage />} />
          <Route path="/menu/dinner" element={<DinnerPage />} />
         
        </Routes>
       

      <Footer />
    </div>
  );
}

export default App;