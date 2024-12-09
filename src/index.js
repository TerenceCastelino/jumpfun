// dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './Index.css'


// pages
import Home from './pages/Home/Home';
import InflatableCastle from './pages/InflatableCastle/InflatableCastle';
import InflatableGame from './pages/InflatableGame/InflatableGame';
import RentalCondition from './pages/RentalCondition/RentalCondition';
import CastleDetail from './pages/CastleDetail/CastleDetail';

// layout
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>



      <Header />
      <div className="body">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Chateaux_Gonflabe" element={<InflatableCastle />} />
          <Route path="/Chateaux_Gonflable/:id" element={<CastleDetail />} /> {/* Nouvelle route */}
          <Route path="/Jeux" element={<InflatableGame />} />
          <Route path="/Contact_et_Devis" element={<RentalCondition />} />
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
        <div className='footerContainer'>

          <Footer />
        </div>
      </div>
    </Router>
  </React.StrictMode>
);
