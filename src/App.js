import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeroCard from './components/HeroCard';
import Features from './components/Features';
import About from './components/About';
import Tokens from './components/Tokens';
import Roadmap from './components/Roadmap';
import StackingDashboard from './components/StackingDashboard';
// import Disclaimer from './components/Disclaimer';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
   <div className='app'>
      <Navbar />
      <Hero />
      <HeroCard />
      <Features />
      <About />
      <Tokens />
      <Roadmap />
      <StackingDashboard />
      {/* <Disclaimer /> */}
      <ContactUs />
      <Footer />
   </div>
  );
}

export default App;
