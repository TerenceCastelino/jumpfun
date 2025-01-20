import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

import headerLogos from "../../../datas/headerLogo/headerLogo";
import StripContact from "./stripContact/StripContact";
import HamburgerButton from "../../hamburgerButton/HamburgerButton/HamburgerButton";

function Header({ isMenuOpen, onToggleMenu }) {
  const { acceuil, castle, jeuxGonflabe, contactUs } = headerLogos;
  const [hoveredImage, setHoveredImage] = useState(null); // Gère l'état de l'image survolée
  const location = useLocation(); // Utilise la localisation actuelle pour savoir quelle page est active
  const [menuOpen, setMenuOpen] = useState(false); // Gère l'état d'ouverture/fermeture du menu
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Gère la largeur de la fenêtre
  const [navbarClass, setNavbarClass] = useState("header"); // Gère la classe CSS du navbar (pour animation)

  // Fonction pour basculer l'état d'ouverture/fermeture du menu
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Fonction pour fermer le menu et revenir à son état initial
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Fonction pour gérer le survol des images
  const handleMouseEnter = (image) => {
    setHoveredImage(image); // Change l'image affichée lors du survol
  };

  // Fonction pour remettre l'image à son état initial
  const handleMouseLeave = () => {
    setHoveredImage(null); // Remet l'image à l'état initial
  };

  // Fonction pour déterminer l'image affichée
  const getImage = (image, path) => {
    return hoveredImage === image || location.pathname === path ? image.Gold : image.Light;
  };

  // useEffect pour gérer la redimensionnement de la fenêtre
  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth); // Met à jour la largeur de la fenêtre

      // Met à jour la classe du navbar en fonction de la largeur de la fenêtre
      if (newWidth > 1000) {
        setNavbarClass("header"); // Réinitialise la classe sur les grands écrans
      } else {
        setNavbarClass(menuOpen ? "header slide-in" : "header slide-out"); // Applique l'animation sur petits écrans
      }
    };

    window.addEventListener("resize", handleResize); // Ajoute un écouteur d'événements pour la redimension du window
    handleResize(); // Appelle la fonction au montage du composant pour ajuster immédiatement la classe

    return () => {
      window.removeEventListener("resize", handleResize); // Nettoie l'écouteur lors du démontage du composant
    };
  }, [menuOpen]); // Déclenche l'effet chaque fois que le menu change d'état

  const links = [
    { to: "/", label: "Accueil", image: acceuil },
    { to: "/Chateaux_Gonflabe", label: "Chateaux", image: castle },
    { to: "/Jeux", label: "Jeux", image: jeuxGonflabe },
    { to: "/Contact_et_Devis", label: "Contact & Devis", image: contactUs }
  ];

  return (
    <div>
        {/* <HamburgerButton isOpen={isMenuOpen} onToggle={onToggleMenu} /> */}
      <StripContact isMenuOpen={menuOpen} onToggleMenu={toggleMenu} className='stripContact ' /> {/* Barre de contact en haut, avec le bouton de menu */}
      <div className="gg"></div>

        <div className={navbarClass}>
       
        {links.map(({ to, label, image }) => (
        <Link
            key={to}
            to={to}
            onMouseEnter={() => handleMouseEnter(image.Light)}
            onMouseLeave={handleMouseLeave}
            className={location.pathname === to ? "active" : "inactive"}
            onClick={closeMenu}
        >
            <div className={`b ${location.pathname === to ? "active" : "inactive"}`}>
            <img src={getImage(image, to)} alt={label} />
            <p>{label}</p>
            </div>
        </Link>
        ))}
        </div>
      
    </div>
  );
}

export default Header;

