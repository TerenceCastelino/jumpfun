import React from 'react';
import TopOfPage from '../../components/topOfPage/TopOfPage';
import logoCastleLogo from '../../assets/images/logos/iconBouncyCastle/bouncy-castleGold.png';

function InflatableCastle() {
  return (
    <div>
      <TopOfPage src={logoCastleLogo} alt="Placeholder Image" title='Chateaux Gonflabe' message={'Nos game de chateaux gonflabe'} />
    </div>
  );
}

export default InflatableCastle;
