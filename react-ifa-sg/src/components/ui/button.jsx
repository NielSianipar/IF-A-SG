// src/components/ui/button.jsx
import React from 'react';
import './button.css'; // optional kalau mau styling terpisah

export function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '10px 20px',
        backgroundColor: '#4f46e5',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        fontWeight: 'bold',
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
}
