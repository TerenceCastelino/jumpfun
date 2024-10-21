// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Header.css';
// import logoCastleLogo from '../../../assets/images/logos/chateauGonflable.png';
// import jeuxEnBoisLogo from '../../../assets/images/logos/jeuxEnBois.png';
// import jeuxGonflabe from '../../../assets/images/logos/jeuxGonflabe.png';
// import acceuilLogo from '../../../assets/images/logos/bouncy-castle.png';
// import conctactUsLogo from '../../../assets/images/logos/conctactUs.png';

// function Header(props) {
//     return (
//         <div className="header">
//             {/* <div className="background-animation">
//                 <div className="bg-layer"></div>
//                 <div className="bg-layer"></div>
//             </div> */}
//             <Link to="/">
//                 <div className='b'>
//                     <img src={acceuilLogo} alt="" />
//                     <p>Accueil</p>
//                 </div>
//             </Link>
//             <Link to="/Chateaux_Gonflabe">
//                 <div className='b'>
//                     <img src={logoCastleLogo} alt="" />
//                     <p>Chateaux</p>
//                 </div>
//             </Link>
//             <Link to="/Jeux">
//                 <div className='b'>
//                     <img src={jeuxGonflabe} alt="" />
//                     <p>Jeux</p>
//                 </div>
//             </Link>
//             <Link to="/JeuxEnBois">
//                 <div className='b'>
//                     <img src={jeuxEnBoisLogo} alt="" />
//                     <p>Jeux en bois</p>
//                 </div>
//             </Link>
//             <Link to="/Contact_et_Devis">
//                 <div className='b'>
//                     <img src={conctactUsLogo} alt="" />
//                     <p>Contact & Devis</p>
//                 </div>
//             </Link>
//         </div>
//     );
// }

// export default Header;
///!!!!!!!!!!!
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logoCastleLogo from '../../../assets/images/logos/iconBouncyCastle/bouncy-castleWhite.png';
// import jeuxEnBoisLogo from '../../../assets/images/logos/jeuxEnBois.png';
import jeuxGonflabe from '../../../assets/images/logos/iconGame/puzzleWhite.png';
import acceuilLogo from '../../../assets/images/logos/iconHome/clean-houseWhite.png';
import conctactUsLogo from '../../../assets/images/logos/iconContact/mailboxWhite.png';

// Importez les logos pour l'état de survol
import logoCastleHover from '../../../assets/images/logos/iconBouncyCastle/bouncy-castleGold.png';
// import jeuxEnBoisHover from '../../../assets/images/logos/jeuxEnBoisHover.png';
import jeuxGonflabeHover from '../../../assets/images/logos/iconGame/puzzleGold.png';
import acceuilHover from '../../../assets/images/logos/iconHome/clean-houseGold.png';
import conctactUsHover from '../../../assets/images/logos/iconContact/mailboxGold.png';

function Header(props) {
    const [hoveredImage, setHoveredImage] = useState(null);

    const handleMouseEnter = (image) => {
        setHoveredImage(image);
    };

    const handleMouseLeave = () => {
        setHoveredImage(null);
    };

    return (
        <div className="header">
            <Link to="/" onMouseEnter={() => handleMouseEnter(acceuilHover)} onMouseLeave={handleMouseLeave}>
                <div className='b'>
                    <img src={hoveredImage === acceuilHover ? acceuilHover : acceuilLogo} alt="Accueil" />
                    <p>Accueil</p>
                </div>
            </Link>
            <Link to="/Chateaux_Gonflabe" onMouseEnter={() => handleMouseEnter(logoCastleHover)} onMouseLeave={handleMouseLeave}>
                <div className='b'>
                    <img src={hoveredImage === logoCastleHover ? logoCastleHover : logoCastleLogo} alt="Chateaux" />
                    <p>Chateaux</p>
                </div>
            </Link>
            <Link to="/Jeux" onMouseEnter={() => handleMouseEnter(jeuxGonflabeHover)} onMouseLeave={handleMouseLeave}>
                <div className='b'>
                    <img src={hoveredImage === jeuxGonflabeHover ? jeuxGonflabeHover : jeuxGonflabe} alt="Jeux" />
                    <p>Jeux</p>
                </div>
            </Link>
            {/* <Link to="/JeuxEnBois" onMouseEnter={() => handleMouseEnter(jeuxEnBoisHover)} onMouseLeave={handleMouseLeave}>
                <div className='b'>
                    <img src={hoveredImage === jeuxEnBoisHover ? jeuxEnBoisHover : jeuxEnBoisLogo} alt="Jeux en bois" />
                    <p>Jeux en bois</p>
                </div>
            </Link> */}
             <Link to="/Contact_et_Devis" onMouseEnter={() => handleMouseEnter(conctactUsHover)} onMouseLeave={handleMouseLeave}>
                <div className='b'>
                    <img src={hoveredImage === conctactUsHover ? conctactUsHover : conctactUsLogo} alt="Contact & Devis" />
                    <p>Contact & Devis</p>
                </div>
             </Link> 
        </div>
    );
}

export default Header;
