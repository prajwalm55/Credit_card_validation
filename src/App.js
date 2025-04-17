import React from 'react';
import CreditCardValidator from './CreditCardValidator';

function App() {
  return (
    <div>
      <h1 style={{ textAlign:'center', background: 'darkgreen', color: 'white', padding: '10px' }}>American Express</h1>
      <h3></h3>
      <CreditCardValidator />
    </div>
  );
}

export default App;
