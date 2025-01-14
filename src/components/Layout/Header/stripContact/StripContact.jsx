import React from 'react';
import './StripContact.css';

import generalInfo from '../../../../datas/generalInfo/generalInfo';

import facebook from '../../../../assets/images/logosReseaux/logosFacebook/facebook (2).png';
import instagram from '../../../../assets/images/logosReseaux/LogosInstagram/instagram.png';

function StripContact({ onImageClick }) { // Déstructuration des props
    return (
        <div className="stripContact">
            <a href={generalInfo.phone.link} className="phoneNumber">
                <div>
                    <img src={generalInfo.phone.iconPhone} alt="" />
                    <p>{generalInfo.phone.number}</p>
                </div>
            </a>
            <div className='btnActif'>
                <h1 onClick={onImageClick}>@</h1> {/* Passe la fonction correctement */}
            </div>
            <div className="socialIcons">
                <a href={generalInfo.facebook.link} target="_blank" rel="noopener noreferrer">
                    <img src={facebook} alt="Facebook" />
                </a>
                <a href={generalInfo.instagram.link} target="_blank" rel="noopener noreferrer">
                    <img src={instagram} alt="Instagram" />
                </a>
            </div>
        </div>
    );
}

export default StripContact;
