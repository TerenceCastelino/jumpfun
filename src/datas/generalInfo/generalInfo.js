// Informations générales
import facebookLogoDark from '../../assets/images/logosReseaux/logosFacebook/facebook (2).png'
import instagramLogoDark from '../../assets/images/logosReseaux/LogosInstagram/instagram.png';
import localisation from '../../assets/images/logosReseaux/LogosInstagram/localisation.png'
import iconMail from '../../assets/images/icons8-email-50.png';
import youplaboumLogo from '../../assets/images/logos/logoYouplaTrans.png';
import iconPhone from '../../assets/images/logosReseaux/LogosInstagram/iconeTelephone.png'

const generalInfo = {
    logoMain: youplaboumLogo,
    facebook: {
        link: 'https://www.facebook.com/profile.php?id=61554951095895&locale=fr_FR',
        logo: {
            dark: facebookLogoDark,
            ligth: null,
            hover: null
        }
    },

    instagram: {
        link: null,
        logo: {
            dark: instagramLogoDark,
            ligth: null,
            hover: null
        }
    },

    address: {
        commune: 'Trazegnies',
        googleMap: 'https://www.google.com/maps/dir/Trazegnies,+6183+Courcelles//@50.4627727,4.2477752,12z/data=!4m9!4m8!1m5!1m1!1s0x47c2303826dda261:0x802ca33b29c61ee1!2m2!1d4.3301766!2d50.4626925!1m0!3e0?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D',
        logolocalisation: localisation,
    },
    mail: {
        link: 'terence30prof@hotmail.com',
        // link: 'youpla.boum@hotmail.com',
        logoMail: iconMail,
    },
    phone: {
        number: '0474 11 83 04', // Ce qui sera affiché sur le site
        iconPhone: iconPhone,    // L'image pour représenter l'icône du téléphone
        link: 'tel:+32474118304', // Le lien pour appeler (avec le schéma "tel:" et l'indicatif international)
    }

};

export default generalInfo;
