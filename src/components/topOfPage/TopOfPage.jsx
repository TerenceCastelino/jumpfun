import React from 'react';
import './TopOfPage.css'

const TopOfPage = ({ /*src, alt,*/ title,message }) => {
  return (
    <div className='containerStyle' >
      <div className='descriptif'>
      <h1>{title}</h1>
      <p>{message}</p>
      </div>
      {/* <img src={src} alt={alt} /> */}
    </div>
  );
};

export default TopOfPage;
