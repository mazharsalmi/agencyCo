import "./App.css";
import About from "./Componants/About";
import Home from "./Componants/Home";
import Service from "./Componants/Service";
import Pricing from "./Componants/Pricing";
import Review from "./Componants/Review";
import Footer from "./Componants/Footer";
import Navbar from "./Componants/Navbar";
import Complete from "./Componants/Complete";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Componants/ScrollBar";


function App() {
  return (
    <div className="App">

    <ScrollToTop/>
      <Navbar />
      
      
      <Routes>
        <Route exact path="/" element={<Complete/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/service" element={<Service/>} />
        <Route exact path="/pricing" element={<Pricing/>} />
        <Route exact path="/review" element={<Review/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
