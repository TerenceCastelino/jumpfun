// dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './Index.css'


// pages
import Home from './pages/Home/Home';

// layout
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>



      <div className="body">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
        <div className='footerContainer'>

          <Footer />
        </div>
      </div>
    </Router>
  </React.StrictMode>
);
