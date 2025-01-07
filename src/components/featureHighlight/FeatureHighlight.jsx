import React from 'react';
import './FeatureHighlight.css';

const FeatureHighlight = ({ title, description, imgSrc, imgAlt }) => {
    return (
        <div className='featureHighlight'>
            <h3>{title}</h3>
            <p>{description}</p>
            <img src={imgSrc} alt={imgAlt} />
        </div>
    );
}

export default FeatureHighlight;
