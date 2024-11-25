// Импортируем функции из cardUtils.js
import { getCardType, isValidCardNumber } from './cardUtils';
import './style.css';

import visaLogo from './images/visa.png';
import mastercardLogo from './images/mastercard.png';
import amexLogo from './images/amex-logo.png';
import mirLogo from './images/mir-logo.png';

document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('card-number');
    const validateButton = document.getElementById('validate-btn');
    const cardTypeDisplay = document.getElementById('card-type');
    const validationResult = document.getElementById('validation-result');

    // Отображение типа карты и её логотипа
    function updateCardType(cardNumber) {
        const cardType = getCardType(cardNumber);
        cardTypeDisplay.textContent = `Card Type: ${cardType}`;

        let logoSrc = '';
        switch (cardType) {
            case 'Visa':
                logoSrc = visaLogo;
                break;
            case 'MasterCard':
                logoSrc = mastercardLogo;
                break;
            case 'American Express':
                logoSrc = amexLogo;
                break;
            case 'Mir':
                logoSrc = mirLogo;
                break;
            default:
                logoSrc = '';
        }

        if (logoSrc) {
            cardTypeDisplay.innerHTML = `<img src="${logoSrc}" alt="${cardType} logo"> ${cardType}`;
        }
    }

    // Проверка валидности номера карты
    validateButton.addEventListener('click', () => {
        const cardNumber = input.value.trim();
        const isValid = isValidCardNumber(cardNumber);
        validationResult.textContent = isValid ? 'Valid Card Number' : 'Invalid Card Number';
        updateCardType(cardNumber);
    });
});
