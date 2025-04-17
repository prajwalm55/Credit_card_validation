import React, { useState } from 'react';

function CreditCardValidator() {
  const [cardNumber, setCardNumber] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setCardNumber(value);
    validateCard(value);
  };

  const validateCard = (number) => {
    // Simple validation: must be 16 digits
    const regex = /^\d{16}$/;
    if (!regex.test(number)) {
      setError('Enter valid CreditCard Number!');
    } else {
      setError('');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h2>Enter CreditCard:</h2>
      <input 
        type="text" 
        value={cardNumber} 
        onChange={handleInputChange} 
        style={{ padding: '5px', fontSize: '16px' }}
      />
      <div style={{ color: 'red', fontWeight: 'bold', marginTop: '10px' }}>
        {error}
      </div>
    </div>
  );
}

export default CreditCardValidator;
