import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import AboutUs from "./components/aboutus/AboutUs";
import Home from "./components/home/Home";
import Service from "./components/service/Service";
import PropertyMaintenance from "./components/propertymaintenance/PropertyMaintenance";
import Contact from "./components/contactAndReviewPage/Contact";
import Header from "./components/header/Header";
import Gallery from "./components/photo-gallery/gallery";



function App() {

  return (
    <div className="App">
      <Router>
        <Header/>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/service" element={<Service/>} />
          <Route path="/maintenance" element={<PropertyMaintenance/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/gallery" element={<Gallery/>} />
        </Routes>
      </Router>
    </div>
    
  );
}

export default App
