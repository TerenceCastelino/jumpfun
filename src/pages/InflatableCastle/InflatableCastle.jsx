import React from 'react';
import TopOfPage from '../../components/topOfPage/TopOfPage';
import CardCastle from '../../components/card/cardCastle/CardCastle';
import castelData from '../../datas/castelData/castelData';
import logoCastleLogo from '../../assets/images/logos/iconBouncyCastle/bouncy-castleGold.png';

import './InflatableCastle.css'

import fondBoy from '../../assets/images/fondCard/580.jpg'
import fondGirl from '../../assets/images/fondCard/4994981.jpg'
import fondMixte from '../../assets/images/fondCard/13104.jpg'

function InflatableCastle() {
    const filteredCastlesGirle = castelData.filter(castle => castle.genre === 'fille');
    const filteredCastlesBoy = castelData.filter(castle => castle.genre === 'garcon');
    const filteredCastlesMixte = castelData.filter(castle => castle.genre === 'mixte');

    return (
        <div>
            <TopOfPage
                src={logoCastleLogo}
                alt="Placeholder Image"
                title="Chateaux Gonflable"
                message="Nos gammes de châteaux gonflables"
            />
            
            <div className='introductionContainer'>
                <div className='introduction'>
                    <h2>
                    Location de châteaux gonflables : Souvenir et amusement et sécurité !
                    </h2>
                    <p>
                    Vous cherchez à divertir les enfants lors d'une fête ou d'un événement public ? Youplaboum est là pour vous ! Nos fantastiques châteaux gonflables, disponibles à la location tous les jours de la semaine, apporteront joie et rires à vos petits invités. Peu importe le thème de votre fête, nous avons le château idéal pour filles, garçons et même des options mixtes !
                    </p>
                    <p>
                    Chez Youplaboum, la sécurité est primordiale. Tous nos châteaux sont certifiés et inspectés par Vincotte pour garantir des heures de jeu en toute tranquillité. Chaque location comprend une soufflerie et une bâche de protection pour une installation facile.
                    </p>
                    <p>
                    Besoin d'une rallonge électrique ? Nous en louons aussi pour seulement 10€. Nos devis sont personnalisés en fonction de la distance, vous assurant un service adapté et économique. Avec Youplaboum, transformez votre événement en un moment magique et inoubliable !
                    </p>
                </div>
                <div className='choisContainer'>
                    <a href="#girls" className="anchor" style={{ backgroundImage: `url(${fondGirl})` }}>
                        <span>Filles</span>
                    </a>
                    <a href="#boys" className="anchor" style={{ backgroundImage: `url(${fondBoy})` }}>
                        <span>Garçons</span>
                    </a>
                    <a href="#mixte" className="anchor" style={{ backgroundImage: `url(${fondMixte})` }}>
                        <span>Mixte</span>
                    </a>
                </div>
            </div>


            <div className='cards-container'>
                <div id="girls" className='containerGirl'>
                    <h3>Châteaux pour Filles</h3>
                </div>
                <div className='display'>
                    {filteredCastlesGirle.map((castle) => (
                        <CardCastle
                            key={castle.id}
                            id={castle.id} // Ajout de l'identifiant
                            name={castle.name}
                            images={castle.images}
                            description={castle.description}
                            genre={castle.genre}
                            className='card'
                        />
                    ))}
                </div>
                <div id="boys" className='containerBoys'>
                    <h3>Châteaux pour Garçons</h3>
                </div>
                <div className='display'>
                    {filteredCastlesBoy.map((castle) => (
                        <CardCastle
                            key={castle.id}
                            id={castle.id} // Ajout de l'identifiant
                            name={castle.name}
                            images={castle.images}
                            description={castle.description}
                            genre={castle.genre}
                            className='card'
                        />
                    ))}
                </div>
                <div id="mixte" className='containerMixte'>
                    <h3>Châteaux Mixtes</h3>
                </div>
                <div className='display'>
                    {filteredCastlesMixte.map((castle) => (
                        <CardCastle
                            key={castle.id}
                            id={castle.id} 
                            name={castle.name}
                            images={castle.images}
                            description={castle.description}
                            genre={castle.genre}
                            className='card'
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default InflatableCastle;
