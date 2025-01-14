import React from 'react';
import { Link } from 'react-router-dom';
import './FooterElement.css';

// Déclaration des variables "generalInfo" contenant des informations générales
// Declaration of "generalInfo" variables containing general information
import generalInfo from '../../../../../datas/generalInfo/generalInfo'

function FooterElement(props) {
    return (



            <div className='footerContainer'>

                <div className='socialMediaContainer'>
                
                    <Link to="/" className='footerLogo'>
                        <img src={generalInfo.logoMain} alt="Youpla Boum Logo" />
                    </Link>

                    <h3>Réseaux sociaux</h3>

                    <div className='socialMediaIcons'>

                        <a href={generalInfo.facebook.link} target="_blank" rel="noreferrer">
                            <div className='displayElement'>
                                <img src={generalInfo.facebook.logo.dark} alt="Facebook Logo" /> 
                                <p>Facebook</p> 
                            </div>
                        </a>

                        <a href={generalInfo.instagram.link} target="_blank" rel="noreferrer">
                            <div className='displayElement'>
                                <img src={generalInfo.instagram.logo.dark} alt="Instagram Logo" /> 
                                <p>Instagram</p> 
                            </div>
                        </a>

                    </div>

                </div>

                
                <div className='servicesAndAddressContainer'>

                    <div className='servicesContainer'>
                        <div>
                            <h3>Nos services</h3>
                        </div>

                        <div>
                            <a href="/Chateaux_Gonflabe"><p>Chateaux Gonflabe</p></a>
                            <a href="/Jeux"><p>jeux Gonflabe</p></a>
                            <a href="/Jeux"><p>Jeux en Bois</p></a>
                            <a href="/Jeux"><p>Animations gourmandes et ludiques</p></a>
                        </div>

                    </div>

                    <div className='addressContainer'>

                        <div>
                            <h3>Youpla Boum</h3>
                        </div>

                        <div>

                            <a href={generalInfo.address.googleMap}>
                                <div className='displayElement'> 
                                    <img src={generalInfo.address.logolocalisation} alt="Email Icon" /> 
                                    <p>{generalInfo.address.commune}</p> 
                                </div>
                            </a>

                            <a href={`mailto:${generalInfo.mail}?subject=Demande%20de%20renseignements&body=Bonjour,%0A%0AJe%20souhaite%20avoir%20plus%20d'informations%20sur%20votre%20produit.`}>
                                <div className='displayElement'> 

                                    <img src={generalInfo.mail.logoMail} alt="Email Icon" /> 
                                    <p>{generalInfo.mail.link}</p> 
                                </div>
                            </a>

                            <a href={generalInfo.phone.link}>
                                <div className="displayElement">
                                    <img src={generalInfo.phone.iconPhone} alt="Phone Icon" />
                                    <p>{generalInfo.phone.number}</p>
                                </div>
                            </a>
                        </div>

                    </div>

                </div>
                

            </div>

    );
}

export default FooterElement;
