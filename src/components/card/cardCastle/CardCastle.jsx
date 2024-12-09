import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './CardCastle.css';

function CardCastle({  id, name, images, description, genre, className }) {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        navigate(`/Chateaux_Gonflable/${id}`);
      };

    return (
        <div
            className={`containerCard ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleClick}
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
