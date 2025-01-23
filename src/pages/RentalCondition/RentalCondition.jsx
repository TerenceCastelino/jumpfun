import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import TopOfPage from '../../components/topOfPage/TopOfPage';
import logoCastleLogo from '../../assets/images/logos/iconContact/mailboxGold.png';
import './RentalCondition.css';

import Spacer from '../../components/Spacer/Spacer';
import generalInfo from '../../datas/generalInfo/generalInfo';

// Composant RentalCondition
function RentalCondition() {

    const location = useLocation();

    // Extraire les paramètres de l'URL
    const params = new URLSearchParams(location.search);
    const preselectedData = {
        articleName: params.get('articleName'),
        typeArticle:params.get('typeArticle')
        
    };

    const today = new Date().toISOString().split('T')[0]; // Date actuelle au format YYYY-MM-DD

    // Initialisation de l'état du formulaire avec les données préremplies
    const [formData, setFormData] = useState({
        // name: preselectedData?.name || '', // Nom du client
        // phone: preselectedData?.phone || '', // Numéro de téléphone
        // email: preselectedData?.email || '', // Email
        // deliveryLocation: preselectedData?.deliveryLocation || '', // Lieu de livraison
        // deliveryDate: preselectedData?.deliveryDate || '', // Date de livraison
        // deliveryTime: preselectedData?.deliveryTime || '', // Heure de livraison
        article: preselectedData?.typeArticle || '', // Type d'article sélectionné
        question: '', // Question optionnelle
        agreement: false, // Case d'acceptation des termes et conditions
        articleName: preselectedData?.articleName || '', // Nom du château
    });

    // État des erreurs de validation
    const [errors, setErrors] = useState({});

    // Fonction pour gérer les changements dans les champs du formulaire
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value, // Mise à jour de l'état selon le type de champ
        }));
    };

    // Validation du formulaire
    const validateForm = () => {
        let valid = true;
        const newErrors = {};

        if (!formData.name.trim()) {
            valid = false;
            newErrors.name = 'Le nom est obligatoire.';
        }
        if (!formData.phone.trim()) {
            valid = false;
            newErrors.phone = 'Le numéro de téléphone est obligatoire.';
        }
        if (!formData.email.trim()) {
            valid = false;
            newErrors.email = 'L\'email est obligatoire.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            valid = false;
            newErrors.email = 'Veuillez entrer un email valide.';
        }
        if (!formData.deliveryLocation.trim()) {
            valid = false;
            newErrors.deliveryLocation = 'Le lieu de livraison est obligatoire.';
        }
        if (!formData.article.trim()) {
            valid = false;
            newErrors.article = 'Vous devez sélectionner un article.';
        }
        if (!formData.articleName.trim()) {
            valid = false;
            newErrors.articleName = 'Vous devez sélectionner un article.';
        }
        if (!formData.deliveryDate) {
            valid = false;
            newErrors.deliveryDate = 'La date de livraison est obligatoire.';
        } else if (formData.deliveryDate < today) {
            valid = false;
            newErrors.deliveryDate = 'La date de livraison ne peut pas être antérieure à aujourd\'hui.';
        }
        if (!formData.deliveryTime.trim()) {
            valid = false;
            newErrors.deliveryTime = 'L\'heure de livraison est obligatoire.';
        }
        if (!formData.agreement) {
            valid = false;
            newErrors.agreement = 'Vous devez accepter les termes et conditions.';
        }

        setErrors(newErrors);
        return valid;
    };

    // Soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const mailto = `mailto:${generalInfo.mail.link}?subject=Demande de devis&body=Nom: ${formData.name}%0A%0A` +
                `Téléphone: ${formData.phone}%0A%0A` +
                `Email: ${formData.email}%0A%0A` +
                `Lieu de livraison: ${formData.deliveryLocation}%0A%0A` +
                `Article: ${formData.article}%0A%0A` +
                `Nom de l'article: ${formData.articleName || 'Non précisé'}%0A%0A` +
                `Date de livraison: ${formData.deliveryDate}%0A%0A` +
                `Heure de livraison: ${formData.deliveryTime || 'Non précisée'}%0A%0A` +
                `Question: ${formData.question || 'Aucune question'}%0A%0A`;
                
            window.location.href = mailto;
        }
    };

    return (
        <div className="rental-condition">
            <TopOfPage
                src={logoCastleLogo}
                alt="Placeholder Image"
                title="Contact & Devis"
                message="Prenons contact afin d'établir un devis"
            />
            <Spacer />
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nom :</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={errors.name ? 'error' : ''}
                    />
                    {errors.name && <p className="error-message">{errors.name}</p>}
                </div>
                <div className="form-group">
                    <label>Téléphone :</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={errors.phone ? 'error' : ''}
                    />
                    {errors.phone && <p className="error-message">{errors.phone}</p>}
                </div>
                <div className="form-group">
                    <label>Email :</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <p className="error-message">{errors.email}</p>}
                </div>
                <div className="form-group">
                    <label>Lieu de livraison :</label>
                    <input
                        type="text"
                        name="deliveryLocation"
                        value={formData.deliveryLocation}
                        onChange={handleChange}
                        className={errors.deliveryLocation ? 'error' : ''}
                    />
                    {errors.deliveryLocation && <p className="error-message">{errors.deliveryLocation}</p>}
                </div>
                <div className="form-group">
                    <label>Nom de l'article :</label>
                    <input
                        type="text"
                        name="articleName"
                        value={formData.articleName}
                        onChange={handleChange}
                        className={errors.articleName ? 'error' : ''}
                    />
                    {errors.articleName && <p className="error-message">{errors.articleName}</p>}
                </div>
                <div className="form-group">
                    <label>Je suis intéressé(e) par :</label>
                    <select
                        name="article"
                        value={formData.article}
                        onChange={handleChange}
                        className={errors.article ? 'error' : ''}
                    >
                        <option value="">-- Sélectionnez un article --</option>
                        <option value="Château">Château Gonflable</option>
                        <option value="Jeux">Jeux</option>
                        {/* <option value="Barbe à Papa">Barbe à Papa</option> */}
                    </select>
                    {errors.article && <p className="error-message">{errors.article}</p>}
                </div>
                <div className="form-group">
                    <label>Date de livraison :</label>
                    <input
                        type="date"
                        name="deliveryDate"
                        value={formData.deliveryDate}
                        onChange={handleChange}
                        className={errors.deliveryDate ? 'error' : ''}
                        min={today} // Empêche les dates inférieures à aujourd'hui
                    />
                    {errors.deliveryDate && <p className="error-message">{errors.deliveryDate}</p>}
                </div>
                <div className="form-group">
                    <label>Heure de livraison :</label>
                    <input
                        type="time"
                        name="deliveryTime"
                        value={formData.deliveryTime}
                        onChange={handleChange}
                        className={errors.deliveryTime ? 'error' : ''}
                    />
                    {errors.deliveryTime && <p className="error-message">{errors.deliveryTime}</p>}
                </div>
                <div className="form-group">
                    <label>Une question ?</label>
                    <textarea
                        name="question"
                        value={formData.question}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className="form-group agreement">
                    <label>
                        <input
                            type="checkbox"
                            name="agreement"
                            checked={formData.agreement}
                            onChange={handleChange}
                        />
                        J'accepte les{' '}
                        <a href="/reglement" target="_blank" rel="noopener noreferrer">
                            termes et conditions
                        </a>
                    </label>
                    {errors.agreement && <p className="error-message">{errors.agreement}</p>}
                </div>
                <button type="submit" className="submit-btn">
                    Envoyer le devis
                </button>
            </form>
            <Spacer />
            <Spacer />
        </div>
    );
}

export default RentalCondition;
