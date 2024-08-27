import React, { useState } from 'react';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onClick={onClose}
    >
      <div 
        style={{
          backgroundColor: '#fff',
          padding: 20,
          borderRadius: 5,
        }}
        onClick={(e) => e.stopPropagation()}
      >
                <button className='close-modal' onClick={onClose}>Close</button>
        <h2>Дополнительная информация</h2>
        <p>Здесь будет содержимое модального окна</p>

      </div>
    </div>
  );
};

export default Modal;