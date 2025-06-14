import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import { Layout } from './components/Layout.jsx';
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
      <Layout>
      <div className = "flex flex-col min-h-screen">
        <NavigationBar />
        <main className = "flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
      </Layout>
    </ThemeProvider>
  );
}

export default App;