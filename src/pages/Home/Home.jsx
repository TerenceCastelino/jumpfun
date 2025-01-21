import React from 'react';
import './Home.css';

import YouplaBoum from '../../assets/images/logos/logoYouplaTrans.png'; 

import CardRedirection from '../../components/card/cardRedirection/CardRedirection';
import castleLogo  from '../../assets/images/logos/iconBouncyCastle/bouncy-castleGold.png'
import gameLogo  from '../../assets/images/logos/iconGame/puzzleGold.png'
import TopOfPage from '../../components/topOfPage/TopOfPage';
import IntroBanner from '../../components/IntroBanner/IntroBanner';
import ReusableButton from '../../components/reusableButton/ReusableButton';
import Spacer from '../../components/Spacer/Spacer'


function Home(props) {

    let messageOne = 'Châteaux Gonflables : Transformez votre jardin en un royaume magique où les enfants peuvent rebondir, sauter et s\'amuser sans fin.'
    let messageTwo ='Jeux Gonflables : Offrez des défis palpitants avec nos parcours d\'obstacles et autres structures gonflables passionnantes.'
    
    return (
        <div className="containerHome">

            <div>
                <IntroBanner/>
            </div>

            <div>
            <TopOfPage /* src={YouplaBoum} alt="Placeholder Image" */ title='Acceuil'/* message={'Bienvenu chez YouplaBoum !!!'}*/ />
            </div>

            {/* src={YouplaBoum} alt="Placeholder Image" */}
                
            <div className='descriptionContainer'>
                <div className='titleDescription'>
                    <h2>Découvrez Youpla Boum : Faites Bondir la Joie dans Vos Événements !</h2>
                </div>
                <div className='descriptionTexteImgContainer'>
                    <div className='texteDescription'>
                        <p>Bienvenue chez Youpla Boum, votre partenaire de confiance pour transformer chaque fête en une aventure inoubliable ! Spécialisés dans la location de châteaux gonflables, de jeux gonflables et de grands jeux en bois, nous mettons tout en œuvre pour apporter du rire, du plaisir et des souvenirs impérissables à vos événements.</p>
                        
                        
                        <ReusableButton text="Contactez nous" link="/Contact_et_Devis" />

                       
                        

                    </div>
                    <div className='imgHomeContainer'>
                        <img src={YouplaBoum} alt="Youpla Boum Logo" className='styleLogo'/>
                    </div>
                </div>
            </div>


            <div className='valueContainer'>
                <div className='valeurTitle'>
                    <h2>Pourquoi Choisir Youpla Boum ?</h2>
                </div>

                <div className='value'>        
                             
                                       
                       

                        
                        
                        
                    
                </div>
                
            </div>

                        <div>
                            <CardRedirection img={castleLogo} message={messageOne} title={'Chateau Gonflabe'} link="/Chateaux_Gonflabe" />
                        </div>

                        <div>
                            <CardRedirection img={gameLogo} message={messageTwo} title={'Jeu Gonflabe'} link="/Jeux" />
                        </div>

                        <div>
                            <CardRedirection img={gameLogo} message={'Prochainement sur chez nous et potentiellement chez vous'} title={'Jeu En Bois'} link="/#" />
                        </div>

            
                
          

            
            <Spacer/>
         

        </div>
    );
}

export default Home;
