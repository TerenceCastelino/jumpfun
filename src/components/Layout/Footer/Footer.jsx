import React from 'react';
// import { Link } from 'react-router-dom';
import './Footer.css';

// Importation des composants 
// Import of main components
import FeatureHighlight from './footerComepent/featureHighlight/FeatureHighlight';
import DeliveryZoneMap from './footerComepent/LocalDeliveryMap/DeliveryZoneMap'
import FooterElement from './footerComepent/footerElement/FooterElement';

// Import des images utilisées dans le composant FeatureHighlight 
// Import of images used in the FeatureHighlight component
import souvenir from '../../../assets/images/Souvenir.png'
import gammeVariée from '../../../assets/images/variétéeGame.png'
import vincotte from '../../../assets/images/approverVincotte.png'



function Footer(props) {
    return (

        <div>


            <div className='FeatureHighlight'>
    
  
                <FeatureHighlight 
                                 title="Des Souvenirs Éternels" 
                                 description="Chaque saut et éclat de rire devient un souvenir inoubliable. Nous créons des moments mémorables pour des fêtes inoubliables." 
                                 imgSrc={souvenir} 
                                 imgAlt="Souvenirs Éternels"/>
         
                <FeatureHighlight 
                                 title="Une Gamme Variée" 
                                 description="Châteaux et jeux gonflables, jeux ludiques pour petits et grands : tout pour des moments magiques et des instants de joie !" 
                                 imgSrc={gammeVariée} 
                                 imgAlt="Une Gamme Variée"/>
         
                <FeatureHighlight 
                                 title="Qualité et Sécurité" 
                                 description="Chez Youpla Boum, la sécurité avant tout ! Nos jeux, certifiés par Vinçotte." 
                                 imgSrc={vincotte} 
                                 imgAlt="Qualité et Sécurité"/>
            </div>   

            <DeliveryZoneMap/>

           
            <FooterElement/>

        </div>
    );
}

export default Footer;
