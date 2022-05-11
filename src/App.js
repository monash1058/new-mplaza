/* eslint-disable no-unused-vars */
// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeroCard from "./components/HeroCard";
import Features from "./components/Features";
import About from "./components/About";
import Tokens from "./components/Tokens";
import Roadmap from "./components/Roadmap";
import StackingDashboard from "./components/StackingDashboard";
import Disclaimer from "./components/Disclaimer";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Terms from "./screens/terms";
import Privacy from "./screens/terms";
import Aos from 'aos';
function App() {
  Aos.init();
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <div className="bg-div">
                  <HeroCard />
                  <Features />
                  <About />
                  <Tokens />
                  <Roadmap />
                  {/* <StackingDashboard /> */}
                  {/* <Disclaimer /> */}
                  <br />
                  <br />
                  <ContactUs />
                </div>
                <Footer />
              </>
            }
          />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy-policy" element={<Privacy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
