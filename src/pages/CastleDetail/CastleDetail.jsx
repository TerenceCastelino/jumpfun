import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import castelData from '../../datas/castelData/castelData';
import TopOfPage from '../../components/topOfPage/TopOfPage';

import btnImages from '../../assets/images/right-arrow.png'
import heightImages from '../../assets/images/height.png'

import './CastleDetail.css';

function CastleDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const castle = castelData.find(castle => castle.id == id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!castle) {
    return <div>Château non trouvé</div>;
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === castle.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? castle.images.length - 1 : prevIndex - 1
    );
  };

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div>

        <div>

            <TopOfPage
              title={castle.name}
              message={castle.description}
            />

        </div>

      <div className="castle-detail">


        <button onClick={() => navigate(-1)}>Retour vers les chateaux gonflabe</button> {/* Lien pour retourner en arrière */}
        <div className='flexContainer'>

            <div className="image-container">

              <img src={castle.images[currentImageIndex]} alt={castle.name} />

              <img src={btnImages} alt="Précédant" className="prev-button" onClick={handlePreviousImage} />
              <img src={btnImages} alt="Suivant" className="next-button" onClick={handleNextImage} />
             
              {/* <button className="prev-button" onClick={handlePreviousImage}>Précédent</button> */}
              {/* <button className="next-button" onClick={handleNextImage}>Suivant</button> */}

                    <div className="image-indicators">

                      {castle.images.map((image, index) => (
                        <div
                          key={index}
                          className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                          onClick={() => handleImageClick(index)}
                        ></div>
                      ))}
                    </div>
            </div>
            


            <div className="details">
              
              
              <div className="detailed-description">
                <h2>{castle.name}</h2>

                <div className="dimensions">
                <div className='hauteur'>

                    <img src={heightImages} alt="hauteur" />
                    <p>{castle.hauteur}</p>

                </div>
                <div className='largeur'>

                    <img src={heightImages}  alt="largeur" />
                    <p>{castle.largeur}</p>

                </div>
                <div className='longueur'>

                    <img src={heightImages}  alt="longueur" />
                    <p>{castle.longeur}</p>

                </div>
              </div>

                <h3>Description détaillée</h3>
                <p>{castle.description}</p>
                <button>Contacte</button>
              </div>
            </div>

        </div>


        {/* <button>Redirection vers Contact</button> */}
      </div>
      <div className='sugestion'>
<h1>Sugestion</h1>
      </div>
    </div>
  );
}

export default CastleDetail;
