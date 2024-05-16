// src/components/Loader/Spinner.js
import React from 'react';
import './Spinner.css'; // Define el estilo del spinner

const Spinner = () => {
  return (
    <div className="spinner">
      <div className="double-bounce1"></div>
      <div className="double-bounce2"></div>
    </div>
  );
};

export default Spinner;
