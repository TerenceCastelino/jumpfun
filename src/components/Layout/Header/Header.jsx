// import React, { useState,useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import './Header.css'; // Importation du fichier CSS pour les styles du composant

// import headerLogos from '../../../datas/headerLogo/headerLogo';

// import StripContact from './stripContact/StripContact';



// function Header() {
//     const { acceuil, castle, jeuxGonflabe, contactUs } = headerLogos;  // Déstructuration des logos

//     const [hoveredImage, setHoveredImage] = useState(null);
//     const location = useLocation();
//     const [isNavbarVisible, setIsNavbarVisible] = useState(true);
//     const [isinnerWidth, setIsinnerWidth] = useState(window.innerWidth );

//     const handleMouseEnter = (image) => {
//         setHoveredImage(image);
//     };

//     const handleMouseLeave = () => {
//         setHoveredImage(null);
//     };

//     const getLinkClass = (path) => {
//         return location.pathname === path ? 'active' : 'inactive';
//     };
   

//     const toggleNavbar = () => {
//         console.log('eeeeeeeeeeeeeeee',isNavbarVisible);
        
//         setIsNavbarVisible((prev) => !prev); // Réactiver pour la visibilité de la navbar
//     };

//     useEffect(() => {
//         // Fonction pour vérifier la largeur de la fenêtre
//         const handleResize = () => {
//             console.log(window.innerWidth);
//             setIsinnerWidth(window.innerWidth)
//           setIsNavbarVisible(window.innerWidth > 1000);
//         };
    
//         // Appeler une fois au montage pour définir l'état initial
//         handleResize();
    
//         // Ajouter un écouteur pour les redimensionnements
//         window.addEventListener('resize', handleResize);
    
//         // Nettoyer l'écouteur lors du démontage
//         return () => {
//           window.removeEventListener('resize', handleResize);
//         };
//       }, []);


//     return (
//         <div>

//             <StripContact onImageClick={toggleNavbar}/>

          
//             <div className={isNavbarVisible ? 'header' : 'invisible'}>
        
//                 <h1 className={isinnerWidth > 1000 ? 'invisible': ''}
                    
//                     onClick={toggleNavbar}
//                     >@@@@@S</h1>

//                 <Link 
//                     to="/" 
//                     onMouseEnter={() => handleMouseEnter(acceuil.Light)} 
//                     onMouseLeave={handleMouseLeave} 
//                     className={getLinkClass('/')}
//                 >
//                     <div className={`b ${getLinkClass('/')}`}>
//                         <img src={hoveredImage === acceuil.Gold || location.pathname === '/' ? acceuil.Gold : acceuil.Light} alt="Accueil" />
//                         <p>Accueil</p>
//                     </div>
//                 </Link>
                


//                 <Link 
//                     to="/Chateaux_Gonflabe" 
//                     onMouseEnter={() => handleMouseEnter(castle.Light)} 
//                     onMouseLeave={handleMouseLeave} 
//                     className={getLinkClass('/Chateaux_Gonflabe')}
//                 >
//                     <div className={`b ${getLinkClass('/Chateaux_Gonflabe')}`}>
//                         <img src={hoveredImage === castle.Gold || location.pathname === '/Chateaux_Gonflabe' ? castle.Gold : castle.Light} alt="Chateaux" />
//                         <p>Chateaux</p>
//                     </div>
//                 </Link>

//                 <Link 
//                     to="/Jeux" 
//                     onMouseEnter={() => handleMouseEnter(jeuxGonflabe.Light)} 
//                     onMouseLeave={handleMouseLeave} 
//                     className={getLinkClass('/Jeux')}
//                 >
//                     <div className={`b ${getLinkClass('/Jeux')}`}>
//                         <img src={hoveredImage === jeuxGonflabe.Gold || location.pathname === '/Jeux' ? jeuxGonflabe.Gold : jeuxGonflabe.Light} alt="Jeux" />
//                         <p>Jeux</p>
//                     </div>
//                 </Link>

//                 <Link 
//                     to="/Contact_et_Devis" 
//                     onMouseEnter={() => handleMouseEnter(contactUs.Light)} 
//                     onMouseLeave={handleMouseLeave} 
//                     className={getLinkClass('/Contact_et_Devis')}
//                 >
//                     <div className={`b ${getLinkClass('/Contact_et_Devis')}`}>
//                         <img src={hoveredImage === contactUs.Gold || location.pathname === '/Contact_et_Devis' ? contactUs.Gold : contactUs.Light} alt="Contact & Devis" />
//                         <p>Contact & Devis</p>
//                     </div>
//                 </Link>

//             </div>

//         </div>
//     );
// }

// export default Header;

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css'; // Importation du fichier CSS pour les styles du composant

import headerLogos from '../../../datas/headerLogo/headerLogo';
import StripContact from './stripContact/StripContact';

function Header() {
    const { acceuil, castle, jeuxGonflabe, contactUs } = headerLogos; // Déstructuration des logos

    const [hoveredImage, setHoveredImage] = useState(null);
    const location = useLocation();
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [navbarClass, setNavbarClass] = useState('header');

    const handleMouseEnter = (image) => {
        setHoveredImage(image);
    };

    const handleMouseLeave = () => {
        setHoveredImage(null);
    };

    const getLinkClass = (path) => {
        return location.pathname === path ? 'active' : 'inactive';
    };

    const toggleNavbar = () => {
        setIsNavbarVisible((prev) => !prev);
    };

    useEffect(() => {
        const handleResize = () => {
            const newWidth = window.innerWidth;
            setWindowWidth(newWidth);

            if (newWidth > 1000) {
                setIsNavbarVisible(true);
                setNavbarClass('header'); // Réinitialiser les animations pour les grands écrans
            } else {
                setNavbarClass(isNavbarVisible ? 'header slide-in' : 'header slide-out');
            }
        };

        window.addEventListener('resize', handleResize);

        // Initial check on mount
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isNavbarVisible]);

    useEffect(() => {
        if (windowWidth <= 1000) {
            setNavbarClass(isNavbarVisible ? 'header slide-in' : 'header slide-out');
        }
    }, [isNavbarVisible, windowWidth]);

    return (
        <div>
            <StripContact onImageClick={toggleNavbar} />

            <div className={navbarClass}>
                <h1 className={windowWidth > 1000 ? 'invisible' : ''} onClick={toggleNavbar}>
                    @@@@@S
                </h1>

                <Link
                    to="/"
                    onMouseEnter={() => handleMouseEnter(acceuil.Light)}
                    onMouseLeave={handleMouseLeave}
                    className={getLinkClass('/')}
                >
                    <div className={`b ${getLinkClass('/')}`}>
                        <img
                            src={hoveredImage === acceuil.Gold || location.pathname === '/' ? acceuil.Gold : acceuil.Light}
                            alt="Accueil"
                        />
                        <p>Accueil</p>
                    </div>
                </Link>

                <Link
                    to="/Chateaux_Gonflabe"
                    onMouseEnter={() => handleMouseEnter(castle.Light)}
                    onMouseLeave={handleMouseLeave}
                    className={getLinkClass('/Chateaux_Gonflabe')}
                >
                    <div className={`b ${getLinkClass('/Chateaux_Gonflabe')}`}>
                        <img
                            src={hoveredImage === castle.Gold || location.pathname === '/Chateaux_Gonflabe' ? castle.Gold : castle.Light}
                            alt="Chateaux"
                        />
                        <p>Chateaux</p>
                    </div>
                </Link>

                <Link
                    to="/Jeux"
                    onMouseEnter={() => handleMouseEnter(jeuxGonflabe.Light)}
                    onMouseLeave={handleMouseLeave}
                    className={getLinkClass('/Jeux')}
                >
                    <div className={`b ${getLinkClass('/Jeux')}`}>
                        <img
                            src={hoveredImage === jeuxGonflabe.Gold || location.pathname === '/Jeux' ? jeuxGonflabe.Gold : jeuxGonflabe.Light}
                            alt="Jeux"
                        />
                        <p>Jeux</p>
                    </div>
                </Link>

                <Link
                    to="/Contact_et_Devis"
                    onMouseEnter={() => handleMouseEnter(contactUs.Light)}
                    onMouseLeave={handleMouseLeave}
                    className={getLinkClass('/Contact_et_Devis')}
                >
                    <div className={`b ${getLinkClass('/Contact_et_Devis')}`}>
                        <img
                            src={hoveredImage === contactUs.Gold || location.pathname === '/Contact_et_Devis' ? contactUs.Gold : contactUs.Light}
                            alt="Contact & Devis"
                        />
                        <p>Contact & Devis</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;
