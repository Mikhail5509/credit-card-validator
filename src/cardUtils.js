export function getCardType(cardNumber) {
  if (/^4/.test(cardNumber)) return 'Visa';
  if (/^5[1-5]/.test(cardNumber) || /^2(2[2-7][0-9]{2})/.test(cardNumber)) return 'MasterCard';
  if (/^34|^37/.test(cardNumber)) return 'American Express';
  if (/^220[0-4]/.test(cardNumber)) return 'Mir';
  return 'Unknown';
}

export function isValidCardNumber(number) {
  let sum = 0;
  let shouldDouble = false;
  for (let i = number.length - 1; i >= 0; i--) {
      let digit = parseInt(number[i]);
      if (shouldDouble) {
          digit *= 2;
          if (digit > 9) digit -= 9;
      }
      sum += digit;
      shouldDouble = !shouldDouble;
  }
  return sum % 10 === 0;
}
