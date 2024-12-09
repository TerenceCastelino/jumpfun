import React from 'react';
import './Home.css';

import YouplaBoum from '../../assets/images/logos/logoYouplaTrans.png'; 
import closeup from '../../assets/images/vecteezy_closeup-of-hand-putting-to-assemble-quality-assurance-icon_6932770.jpg'; 
import closeup2 from '../../assets/images/vecteezy_motivational-quote-things-end-but-memories-last-forever_7971351.jpg'; 
import closeup3 from '../../assets/images/vecteezy_wool-balls-that-form-the-heart-of-diversity-on-white-background_18730685.jpg'; 
import CardRedirection from '../../components/card/cardRedirection/CardRedirection';
import castleLogo  from '../../assets/images/logos/iconBouncyCastle/bouncy-castleGold.png'
import gameLogo  from '../../assets/images/logos/iconGame/puzzleGold.png'
import TopOfPage from '../../components/topOfPage/TopOfPage';


function Home(props) {

    let messageOne = 'Châteaux Gonflables : Transformez votre jardin en un royaume magique où les enfants peuvent rebondir, sauter et s\'amuser sans fin.'
    let messageTwo ='Jeux Gonflables : Offrez des défis palpitants avec nos parcours d\'obstacles et autres structures gonflables passionnantes.'
    
    return (
        <div className="containerHome">
            <div className='headerTitleContainer'>
                <div className='image3' />
                <div className='titleContainer'>
                    <h1>Youpla Boum</h1>
                    <h2>Location de chateaux gonflabe, jeux gonflabe et jeux en bois</h2>
                </div>
                <img src={YouplaBoum} alt="Youpla Boum Logo" className='styleLogo'/>
            </div>

        <div>
            <TopOfPage src={YouplaBoum} alt="Placeholder Image" title='Acceuil' message={'Bienvenu chez YouplaBoum !!!'} />
        </div>

            <div className='a'>

                <div className='descriptionContainer'>
                    <div className='titleDescription'>
                        <h2>Découvrez Youpla Boum : Faites Bondir la Joie dans Vos Événements !</h2>
                    </div>
                    <div className='descriptionTexteImgContainer'>
                        <div className='texteDescription'>
                            <p>Bienvenue chez Youpla Boum, votre partenaire de confiance pour transformer chaque fête en une aventure inoubliable ! Spécialisés dans la location de châteaux gonflables, de jeux gonflables et de grands jeux en bois, nous mettons tout en œuvre pour apporter du rire, du plaisir et des souvenirs impérissables à vos événements.</p>
                            <button>Contact</button>
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
                        <div className='valueSide'>
                            <h3>Qualité et Sécurité Avant Tout</h3>
                            <p>Chez Youpla Boum, la sécurité de vos enfants est notre priorité absolue. Tous nos équipements sont rigoureusement entretenus et répondent aux normes de sécurité les plus strictes. Vous pouvez donc profiter de votre fête en toute tranquillité d'esprit, sachant que vos petits aventuriers s'amusent en toute sécurité.</p>
                            <img src={closeup} alt="Qualité et Sécurité" />
                        </div>
                        <div className='valueSide'>
                            <h3>Une Gamme Variée et Séduisante</h3>
                            <p>Que ce soit un château gonflable coloré, un parcours d'obstacles époustouflant ou des jeux en bois géants pour les plus grands, nous avons tout ce qu'il faut pour rendre votre événement unique. Nos équipements sont conçus pour captiver l’imagination des enfants et offrir des heures de divertissement.</p>
                            <img src={closeup2} alt="Gamme Variée" />
                        </div>
                        <div className='valueSide'>
                            <h3>Des Souvenirs Éternels</h3>
                            <p>Avec Youpla Boum, chaque saut, chaque éclat de rire et chaque moment de joie devient un souvenir précieux. Nous nous efforçons de faire en sorte que chaque expérience avec nous soit mémorable, car nous savons que les meilleures fêtes sont celles dont on se souvient toute une vie.</p>
                            <img src={closeup3} alt="Souvenirs Éternels" />
                        </div>
                    </div>
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
        </div>
    );
}

export default Home;
