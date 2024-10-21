import React from 'react';
import './Home.css'

import LogoYouplaBoum from '../../assets/images/logoYouplaBoum.jpg'; 
import YouplaBoum from '../../assets/images/imageFond/fondYouplaBoum.jpg'; 

function Home(props) {
    return (
        <div className='homeContainer'>
            <div className='headerTitleContainer'>
                <div className='titleContainer'>
                      <h1>Youpla Boum</h1>
                      <h2>Location de chateaux gonflabe, jeux gonflabe et jeux en bois</h2>
                </div>
          
           <img src={LogoYouplaBoum} alt="" />

            </div>
            <div className='presentationContainer'>
                <div>

                <h3>
                Découvrez Youpla Boum : Faites Bondir la Joie dans Vos Événements !
                </h3>
                </div>
                <div className='contenuPresentationContainer'>
                    <div className='contenuPresentation'>
                        <p>Bienvenue chez Youpla Boum, votre partenaire de confiance pour transformer chaque fête en une aventure inoubliable !</p>
                        <p> Spécialisés dans la location de châteaux gonflables, de jeux gonflables et de grands jeux en bois, nous mettons tout en œuvre pour apporter du rire, du plaisir et des souvenirs impérissables à vos événements.</p>
                        <button>Contacte</button>
                    </div>
                    <img src={YouplaBoum} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Home;
