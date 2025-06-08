import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home'; // your home page component
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Contact />
            <Footer />
        </Router>
    );
}

export default App;