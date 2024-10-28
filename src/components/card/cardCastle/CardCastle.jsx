import React, { useState} from 'react';
import './CardCastle.css';

function CardCastle({ name, images, description }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`containerCard ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="img-container">
                <img src={images[0]} alt={name} />
            </div>
            <div className='description'>
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default CardCastle;
