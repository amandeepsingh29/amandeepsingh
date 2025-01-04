import React, { useState, useEffect } from 'react';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    import Navbar from './components/Navigation/Navbar';
    import Home from './pages/Home';
    import About from './pages/About';
    import Projects from './pages/Projects';
    import Contact from './pages/Contact';
    import MatrixCursor from './components/Cursor/MatrixCursor';
    import Loader from './components/Loader';

    function App() {
      const [loading, setLoading] = useState(true);

      useEffect(() => {
        // Simulate loading time
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }, []);

      if (loading) {
        return (
          <div className="flex items-center justify-center h-screen bg-gray-800">
            <Loader />
          </div>
        );
      }

      return (
        <Router>
          <MatrixCursor />
          <div className="min-h-screen bg-gray-800">
            <Navbar />
            <main className="container mx-auto px-4 pt-20">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
          </div>
        </Router>
      );
    }

    export default App;
