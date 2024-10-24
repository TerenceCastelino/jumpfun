import React from 'react';
import './Home.css';

import YouplaBoum from '../../assets/images/logos/logoYouplaTrans.png'; 

function Home(props) {
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
    </div>
    );
}

export default Home;
