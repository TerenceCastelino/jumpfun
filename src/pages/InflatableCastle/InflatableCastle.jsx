import React from 'react';
import TopOfPage from '../../components/topOfPage/TopOfPage';
import CardCastle from '../../components/card/cardCastle/CardCastle';
import castelData from '../../datas/castelData/castelData';
import logoCastleLogo from '../../assets/images/logos/iconBouncyCastle/bouncy-castleGold.png';

import './InflatableCastle.css'

function InflatableCastle() {
    return (
        <div>
            <TopOfPage
                src={logoCastleLogo}
                alt="Placeholder Image"
                title="Chateaux Gonflable"
                message="Nos gammes de châteaux gonflables"
            />
            <div className='cards-container'>
                {castelData.map((castle) => (
                    <CardCastle
                        key={castle.id}
                        name={castle.name}
                        images={castle.images}
                        hauteur={castle.hauteur}
                        longeur={castle.longeur}
                        largeur={castle.largeur}
                        genre={castle.genre}
                        className='card'
                    />
                ))}
            </div>
        </div>
    );
}

export default InflatableCastle;
