import React from 'react';
import { Link } from 'react-router-dom';
import './CardRedirection.css';

const CardRedirection = ({ img, message, link,title }) => {
    return (
        <Link to={link} className='cardRedirectionLink'>
            
            <div className='cardRedirectionContainer'>
                <h3 className='titleCard'>{title}</h3>

                <div className='cardPresentation'>
                    <div><img src={img} alt='Card redirection' /></div> 
                    <div><p>{message}</p></div>
                </div>
            </div>
        </Link>
    );
}

export default CardRedirection;

