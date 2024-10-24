import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css'; // Importation du fichier CSS pour les styles du composant
import logoCastleLogo from '../../../assets/images/logos/iconBouncyCastle/bouncy-castleWhite.png';
import jeuxGonflabe from '../../../assets/images/logos/iconGame/puzzleWhite.png';
import acceuilLogo from '../../../assets/images/logos/iconHome/clean-houseWhite.png';
import conctactUsLogo from '../../../assets/images/logos/iconContact/mailboxWhite.png';

// Importez les logos pour l'état de survol
import logoCastleHover from '../../../assets/images/logos/iconBouncyCastle/bouncy-castleGold.png';
import jeuxGonflabeHover from '../../../assets/images/logos/iconGame/puzzleGold.png';
import acceuilHover from '../../../assets/images/logos/iconHome/clean-houseGold.png';
import conctactUsHover from '../../../assets/images/logos/iconContact/mailboxGold.png';

function Header() {
    const [hoveredImage, setHoveredImage] = useState(null);
    const location = useLocation();

    const handleMouseEnter = (image) => {
        setHoveredImage(image);
    };

    const handleMouseLeave = () => {
        setHoveredImage(null);
    };

    const getLinkClass = (path) => {
        return location.pathname === path ? 'selection' : '';
    };

    return (
        <div className="header">
            <Link 
                to="/" 
                onMouseEnter={() => handleMouseEnter(acceuilLogo)} 
                onMouseLeave={handleMouseLeave} 
                className={getLinkClass('/')}
            >
                <div className={`b ${getLinkClass('/')}`}>
                    <img src={hoveredImage === acceuilHover || location.pathname === '/' ? acceuilHover : acceuilLogo} alt="Accueil" />
                    <p>Accueil</p>
                </div>
            </Link>
            <Link 
                to="/Chateaux_Gonflabe" 
                onMouseEnter={() => handleMouseEnter(logoCastleLogo)} 
                onMouseLeave={handleMouseLeave} 
                className={getLinkClass('/Chateaux_Gonflabe')}
            >
                <div className={`b ${getLinkClass('/Chateaux_Gonflabe')}`}>
                    <img src={hoveredImage === logoCastleHover || location.pathname === '/Chateaux_Gonflabe' ? logoCastleHover : logoCastleLogo} alt="Chateaux" />
                    <p>Chateaux</p>
                </div>
            </Link>
            <Link 
                to="/Jeux" 
                onMouseEnter={() => handleMouseEnter(jeuxGonflabe)} 
                onMouseLeave={handleMouseLeave} 
                className={getLinkClass('/Jeux')}
            >
                <div className={`b ${getLinkClass('/Jeux')}`}>
                    <img src={hoveredImage === jeuxGonflabeHover || location.pathname === '/Jeux' ? jeuxGonflabeHover : jeuxGonflabe} alt="Jeux" />
                    <p>Jeux</p>
                </div>
            </Link>
            <Link 
                to="/Contact_et_Devis" 
                onMouseEnter={() => handleMouseEnter(conctactUsLogo)} 
                onMouseLeave={handleMouseLeave} 
                className={getLinkClass('/Contact_et_Devis')}
            >
                <div className={`b ${getLinkClass('/Contact_et_Devis')}`}>
                    <img src={hoveredImage === conctactUsHover || location.pathname === '/Contact_et_Devis' ? conctactUsHover : conctactUsLogo} alt="Contact & Devis" />
                    <p>Contact & Devis</p>
                </div>
            </Link>
        </div>
    );
}

export default Header;
