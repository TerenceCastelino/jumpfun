
import React from 'react';
import './DeliveryZoneMap.css';

import belgique from '../../../../../assets//images/belgique.png';

function DeliveryZoneMap() {
    return (
        <div className="zoneLivraisonContainer">
            <div className="contenuContainer">
                <div className="texteContainer">
                    <h3>Livraison et installation gratuites dans un rayon de 20km autour de Trazegnies</h3>
                    <p>
                        Pour que votre événement soit un succès sans le moindre souci, la livraison est incluse pour toutes
                        les communes situées dans un rayon de 20 km autour de Trazegnies ! Vérifiez facilement si votre
                        commune est concernée grâce à{' '}
                        <a
                            href="https://www.google.com/maps/dir/Trazegnies,+6183+Courcelles//@50.4627727,4.2477752,12z/data=!4m9!4m8!1m5!1m1!1s0x47c2303826dda261:0x802ca33b29c61ee1!2m2!1d4.3301766!2d50.4626925!1m0!3e0?entry=ttu&g_ep=EgoyMDI1MDEwNi4xIKXMDSoASAFQAw%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Google Maps
                        </a>
                        .
                    </p>
                    <p>
                        Voici quelques communes où la livraison et l’installation sont incluses : Morlanwelz, Binche,
                        Louvière, Seneffe, Jolimont, Manage, Estinnes, Anderlues, Fleurus, Les Bons Villers, Lobbes,
                        Charleroi, Couillet, Dampremy, Gilly, Gosselies, Goutroux, Jumet, Lodelinsart, Marchienne-au-Pont,
                        Marcinelle, Monceau-sur-Sambre, Mont-sur-Marchienne, Montignies-sur-Sambre, Ransart, et Roux.
                    </p>
                </div>
                <div className="imageCarteContainer">
                    <img src={belgique} alt="Carte de Belgique" />
                </div>
            </div>
        </div>
    );
}

export default DeliveryZoneMap;
