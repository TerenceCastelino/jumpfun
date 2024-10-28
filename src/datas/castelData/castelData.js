// Import d'image pour les princesses
import princesse1 from '../../assets/images/chateauxGonflabe/Princesse/princesse1.jpg'
import princesse2 from '../../assets/images/chateauxGonflabe/Princesse/princesse2.jpg'
import princesse3 from '../../assets/images/chateauxGonflabe/Princesse/princesse3.jpg'
import princesse4 from '../../assets/images/chateauxGonflabe/Princesse/princesse4.jpg'
// Import d'images pour les lions
import lion1 from '../../assets/images/chateauxGonflabe/Lion/lion1.jpg'
import lion2 from '../../assets/images/chateauxGonflabe/Lion/lion2.jpg'
import lion3 from '../../assets/images/chateauxGonflabe/Lion/lion3.jpg'
import lion4 from '../../assets/images/chateauxGonflabe/Lion/lion4.jpg'
// Import d'images de petites licorne
import pLicorne1 from '../../assets/images/chateauxGonflabe/PetiteLicorne/petiteLicorne1.jpg'
import pLicorne2 from '../../assets/images/chateauxGonflabe/PetiteLicorne/petiteLicorne2.jpg'
import pLicorne3 from '../../assets/images/chateauxGonflabe/PetiteLicorne/petiteLicorne3.jpg'
import pLicorne4 from '../../assets/images/chateauxGonflabe/PetiteLicorne/petiteLicorne4.jpg'
import pLicorne5 from '../../assets/images/chateauxGonflabe/PetiteLicorne/petiteLicorne5.jpg'
// import d'image de grandes licorne
import gLicorne1 from '../../assets/images/chateauxGonflabe/GrandeLicorne/grandeLicorne1.jpg'
import gLicorne2 from '../../assets/images/chateauxGonflabe/GrandeLicorne/grandeLicorne2.jpg'
import gLicorne3 from '../../assets/images/chateauxGonflabe/GrandeLicorne/grandeLicorne3.jpg'
import gLicorne4 from '../../assets/images/chateauxGonflabe/GrandeLicorne/grandeLicorne4.jpg'
import gLicorne5 from '../../assets/images/chateauxGonflabe/GrandeLicorne/grandeLicorne5.jpg'
// import d'image de pirate
import pirate1 from '../../assets/images/chateauxGonflabe/Pirate/pirate1.jpg'
import pirate2 from '../../assets/images/chateauxGonflabe/Pirate/pirate2.jpg'
import pirate3 from '../../assets/images/chateauxGonflabe/Pirate/pirate3.jpg'
import pirate4 from '../../assets/images/chateauxGonflabe/Pirate/pirate4.jpg'
import pirate5 from '../../assets/images/chateauxGonflabe/Pirate/pirate5.jpg'
import pirate6 from '../../assets/images/chateauxGonflabe/Pirate/pirate6.jpg'
import pirate7 from '../../assets/images/chateauxGonflabe/Pirate/pirate7.jpg'
// import d'image de dinosaure
import dinosaure1 from '../../assets/images/chateauxGonflabe/Dinosaure/dinosaure1.jpg'
import dinosaure2 from '../../assets/images/chateauxGonflabe/Dinosaure/dinosaure2.jpg'
import dinosaure3 from '../../assets/images/chateauxGonflabe/Dinosaure/dinosaure3.jpg'
import dinosaure4 from '../../assets/images/chateauxGonflabe/Dinosaure/dinosaure4.jpg'
import dinosaure5 from '../../assets/images/chateauxGonflabe/Dinosaure/dinosaure5.jpg'
// import d'image de Jungle
import jungle1 from '../../assets/images/chateauxGonflabe/Jungle/jungle1.jpg'
import jungle2 from '../../assets/images/chateauxGonflabe/Jungle/jungle2.jpg'
import jungle3 from '../../assets/images/chateauxGonflabe/Jungle/jungle3.jpg'
import jungle4 from '../../assets/images/chateauxGonflabe/Jungle/jungle4.jpg'
import jungle5 from '../../assets/images/chateauxGonflabe/Jungle/jungle5.jpg'
import jungle6 from '../../assets/images/chateauxGonflabe/Jungle/jungle6.jpg'

const castelData = [
    {
        id: 1,
        name: 'Princesse',
        images: [princesse3,princesse2,princesse1,princesse4],
        hauteur:'4M',
        longeur:'5,50m',
        largeur:'5,50m',
        description:'Un royaume enchanté pour toutes les petites princesses, idéal pour des rêves magiques !',
        genre:'fille',
        
    },
    {
        id: 2,
        name: 'Lion',
        images: [lion3,lion2,lion1,lion4],
        hauteur:'3,80M',
        longeur:'6m',
        largeur:'4m',
        description:'Un château sauvage et audacieux pour les aventuriers au cœur de lion !',
        genre:'garcon',
        
    },
    {
        id: 3,
        name: 'Petite licorne',
        images: [pLicorne4,pLicorne2,pLicorne3,pLicorne1,pLicorne5],
        hauteur:'3.50m',
        longeur:'4,20m',
        largeur:'3,90m',
        description:'Un espace féerique pour les petites licornes, rempli de magie et de douceur !',
        genre:'fille',
        
    },
    {
        id: 4,
        name: 'Grande licorne',
        images: [gLicorne5,gLicorne2,gLicorne3,gLicorne4,gLicorne1],
        hauteur:'3,70m',
        longeur:'7,20m',
        largeur:'5,20m',
        description:'Un majestueux château de licorne, parfait pour des célébrations enchanteuses et colorées !',
        genre:'fille',
        
    },
    {
        id: 5,
        name: 'Pirate',
        images: [pirate3,pirate2,pirate1,pirate4,pirate5,pirate6,pirate7],
        hauteur:'4,20m',
        longeur:'7m',
        largeur:'5m',
        description:'Un navire pirate pour des aventures épiques, où l esprit d exploration s exprime !',
        genre:'garcon',
        
    },
    {
        id: 6,
        name: 'Dinosaure',
        images: [dinosaure4,dinosaure2,dinosaure3,dinosaure1,dinosaure5],
        hauteur:'4m',
        longeur:'5m',
        largeur:'5m',
        description:'Un château préhistorique pour les explorateurs en herbe, plein de surprises et d amusement !',
        genre:'garcon',
        
    },
    {
    id: 7,
    name: 'Jungle',
    images: [jungle1,jungle2,jungle3,jungle4,jungle5,jungle6],
    hauteur:'4,70m',
    longeur:'6m',
    largeur:'5m',
    description:'Un havre d’aventures au cœur de la jungle, où la nature prend vie et s épanouit !',
    genre:'mixte',
    
},
];

export default castelData;





// Exemple d'Objet
// {
//     id: 1,
//     name: '',
//     images :[
//         {
//             lien1:'',
//             lien2:"",
//             lien3:"",

//         }

//     ],
//     hauteur:'',
//     longeur:'',
//     largeur:'',
//     genre:'',
    
// },

