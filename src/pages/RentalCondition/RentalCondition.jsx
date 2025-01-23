import React, { useState } from 'react';
import TopOfPage from '../../components/topOfPage/TopOfPage';
import logoCastleLogo from '../../assets/images/logos/iconContact/mailboxGold.png';
import './RentalCondition.css';

import Spacer from '../../components/Spacer/Spacer';
import generalInfo from '../../datas/generalInfo/generalInfo';

// Composant RentalCondition
function RentalCondition({ preselectedData }) {
    const today = new Date().toISOString().split('T')[0]; // Date actuelle au format YYYY-MM-DD

    const [formData, setFormData] = useState({
        name: preselectedData?.name || '',
        phone: preselectedData?.phone || '',
        email: preselectedData?.email || '',
        deliveryLocation: preselectedData?.deliveryLocation || '',
        article: preselectedData?.article || '',
        deliveryDate: preselectedData?.deliveryDate || '',
        deliveryTime: preselectedData?.deliveryTime || '',
        question: '',
        agreement: false,
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const mailto = `mailto:${generalInfo.mail.link}?subject=Demande de devis&body=Nom: ${formData.name}%0A%0A` +
                `Téléphone: ${formData.phone}%0A%0A` +
                `Email: ${formData.email}%0A%0A` +
                `Lieu de livraison: ${formData.deliveryLocation}%0A%0A` +
                `Article: ${formData.article}%0A%0A` +
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
                    <label>Je suis intéressé(e) par :</label>
                    <select
                        name="article"
                        value={formData.article}
                        onChange={handleChange}
                        className={errors.article ? 'error' : ''}
                    >
                        <option value="">-- Sélectionnez un article --</option>
                        <option value="Château Gonflable">Château Gonflable</option>
                        <option value="Jeux en Bois">Jeux en Bois</option>
                        <option value="Barbe à Papa">Barbe à Papa</option>
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
        </div>
    );
}

export default RentalCondition;
