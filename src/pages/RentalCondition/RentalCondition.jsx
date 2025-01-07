import React from 'react';
import TopOfPage from '../../components/topOfPage/TopOfPage';
import logoCastleLogo from '../../assets/images/logos/iconContact/mailboxGold.png';


function RentalCondition(props) {
    return (
        <div>
             <TopOfPage src={logoCastleLogo} alt="Placeholder Image" title='Contacte & Devis' message={'Prenons contacte afin détablir un devis'}  />
             
        </div>
    );
}

export default RentalCondition;