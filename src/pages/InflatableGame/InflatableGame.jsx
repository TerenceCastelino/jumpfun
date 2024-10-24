import React from 'react';
import TopOfPage from '../../components/topOfPage/TopOfPage';
import logoCastleLogo from '../../assets/images/logos/iconGame/puzzleGold.png';

function InflatableGame(props) {
    return (
        <div>
            <TopOfPage src={logoCastleLogo} alt="Placeholder Image" title='Jeux Geant' message={'Notre game de jeu Geant'} />
        </div>
    );
}

export default InflatableGame;