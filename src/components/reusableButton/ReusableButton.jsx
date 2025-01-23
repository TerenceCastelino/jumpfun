import React from 'react';
import './ReusableButton.css';

const ReusableButton = ({ text, onClick, link, preselectedData }) => {
  const handleClick = () => {
    // Vérification des données pré-sélectionnées
    if (preselectedData) {
      console.log('Données pré-sélectionnées reçues :', preselectedData);
    }

    if (link) {
      // Ajouter des données pré-sélectionnées à l'URL si elles existent
      const url = new URL(link, window.location.origin);
      if (preselectedData) {
        Object.keys(preselectedData).forEach(key => {
          url.searchParams.append(key, preselectedData[key]);
        });
      }
      // Redirection vers l'URL avec les paramètres
      window.location.href = url.toString();
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <div className='buttonContainer'>
      <button className="reusableButton" onClick={handleClick}>
        {text}
      </button>
    </div>
  );
};

export default ReusableButton;
