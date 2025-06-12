import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './page/About.jsx'
import Contact from './page/Contact';
import Footer from './components/Footer';
import Home from './page/Home';
import NavigationBar from './components/NavigationBar';
import Project from './page/Project';

function App() {
  return (
    <div className = "app">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;