import React, { useState } from 'react';
import './CardCastle.css';

import logoDistance from '../../../assets/images/height.png'
import logoDirection from '../../../assets/images/right-arrow.png'

function CardCastle({ name, images, hauteur, longeur, largeur, genre }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className='containerCard'>
            <div className='titleContainer'>
                <h3>{name}</h3>
            </div>
            <div className='containerImg'>
                <button onClick={handlePrev}><img src={logoDirection} alt=""/></button>
                <img src={images[currentImageIndex]} alt={name} className='imageCurent' />
                <div></div>
                <button onClick={handleNext}><img src={logoDirection} alt="" /></button>
            </div>
            <div className='indication'>
                <div>
                    <img src={logoDistance} alt="" className='hauteur'/> 
                    <p>{hauteur}</p>   
                </div>
                <div>
                    <img src={logoDistance} alt="" className='longeur'/>
                    <p>{longeur}</p>
                </div>
                <div>
                    <img src={logoDistance} alt="" className='largeur'/>
                    <p>{largeur}</p>
                </div>
                
                
            </div>
        </div>
    );
}

export default CardCastle;
