import React from 'react';
import TopOfPage from '../../components/topOfPage/TopOfPage';
import CardCastle from '../../components/card/cardCastle/CardCastle';
import castelData from '../../datas/castelData/castelData';
import logoCastleLogo from '../../assets/images/logos/iconBouncyCastle/bouncy-castleGold.png';

import './InflatableCastle.css'

function InflatableCastle() {
    // Filtrer les données pour afficher uniquement les éléments avec genre 'fille'
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

            <div className='cards-container'>
                <div className='containerGirl'>
                    <h3>Châteaux pour Filles</h3> {/* Ajout du titre */}
                </div >
                <div className='display'>

                    {filteredCastlesGirle.map((castle) => (
                        <CardCastle
                            key={castle.id}
                            name={castle.name}
                            images={castle.images}
                            description={castle.description}
                            // hauteur={castle.hauteur}
                            // longeur={castle.longeur}
                            // largeur={castle.largeur}
                            genre={castle.genre}
                            className='card'
                        />
                    ))}
                </div>
                <div className='containerBoys'>
                    <h3>Châteaux pour Garçons</h3> {/* Ajout du titre */}
                </div>

                <div className='display'>

                    {filteredCastlesBoy.map((castle) => (
                        <CardCastle
                            key={castle.id}
                            name={castle.name}
                            images={castle.images}
                            description={castle.description}
                            // hauteur={castle.hauteur}
                            // longeur={castle.longeur}
                            // largeur={castle.largeur}
                            genre={castle.genre}
                            className='card'
                        />
                    ))}
                </div>
                <div className='containerMixte'>
                    <h3>Châteaux Mixtes</h3> {/* Ajout du titre */}
                </div>

                <div className='display'>

                    {filteredCastlesMixte.map((castle) => (
                        <CardCastle
                            key={castle.id}
                            name={castle.name}
                            images={castle.images}
                            description={castle.description}
                            // hauteur={castle.hauteur}
                            // longeur={castle.longeur}
                            // largeur={castle.largeur}
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

