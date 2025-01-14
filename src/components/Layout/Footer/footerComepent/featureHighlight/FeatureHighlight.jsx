import React from 'react';
import './FeatureHighlight.css';

const FeatureHighlight = ({ title, description, imgSrc, imgAlt }) => {
    return (
        <div className='featureHighlight'>

            <img src={imgSrc} alt={imgAlt}  />
            <div className='containerHighlight'>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default FeatureHighlight;
