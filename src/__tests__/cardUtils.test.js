const { getCardType, isValidCardNumber } = require('../cardUtils');

test('Detects Visa card', () => {
    expect(getCardType('4111111111111111')).toBe('Visa');
});

test('Validates card number correctly', () => {
    expect(isValidCardNumber('4111111111111111')).toBe(true);
});
