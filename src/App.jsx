import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import AboutUs from "./components/aboutus/AboutUs";
import Home from "./components/home/Home";
import Service from "./components/service/Service";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Gallery from "./components/photo-gallery/gallery";
import Review from "./components/review/Review";
import Footer from "./components/footer/Footer";


function App() {

  return (
    <div className="App">
      <Router>
        <Header/>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/service" element={<Service/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/review" element={<Review />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
      <Footer />
    </div>
    
  );
}

export default App
