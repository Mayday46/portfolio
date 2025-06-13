import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';
import { ThemeProvider } from './context/ThemeContext.jsx';
import About from './page/About.jsx';
import Contact from './page/Contact';
import Home from './page/Home';
import Project from './page/Project';

function App() {
  return (

    // <div className = "app">
    //   <NavigationBar />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/projects" element={<Project />} />
    //     <Route path="/contact" element={<Contact />} />
    //   </Routes>
    //   <Footer />
    // </div>

    <ThemeProvider>
      <div className="app">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;