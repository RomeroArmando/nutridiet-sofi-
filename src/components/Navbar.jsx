// src/components/Navbar.jsx
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

export const Navbar = ({ cartCount, toggleCart }) => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top shadow-sm" style={{ backgroundColor: '#F5F3EB' }}>
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#">
          {/* Aquí podés colocar la ruta real de tu logo una vez que lo guardes en public/img/ */}
          <img 
            src="/img/LOGO.jpeg" 
            alt="NutriDiet Logo" 
            style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }} 
            onError={(e) => e.target.style.display = 'none'}
          />
          <span style={{ color: '#4A7A25', fontWeight: 'bold', fontSize: '1.5rem' }}>
            NutriDiet
          </span>
        </a>
        
        <button 
          className="btn position-relative border-0" 
          onClick={toggleCart}
          style={{ color: '#4A7A25' }}
        >
          <FaShoppingCart size={26} />
          {cartCount > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill" style={{ backgroundColor: '#9E5B26' }}>
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};