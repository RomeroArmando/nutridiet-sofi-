// src/components/Navbar.jsx
import React from 'react';
import { FaShoppingCart, FaStore, FaInfoCircle } from 'react-icons/fa'; 

export const Navbar = ({ cartCount, toggleCart, setView, view }) => {
  
  // Función para darle estilo a la pestaña activa
  const getLinkStyle = (targetView) => ({
    color: view === targetView ? '#4A7A25' : '#0B0B0B',
    fontWeight: 'bold',
    textDecoration: 'none',
    borderBottom: view === targetView ? '3px solid #4A7A25' : '3px solid transparent',
    paddingBottom: '6px',
    transition: 'all 0.3s ease'
  });

  return (
    <nav className="navbar navbar-expand-lg sticky-top shadow-sm" style={{ backgroundColor: '#F5F3EB', padding: '15px 0' }}>
      <div className="container">
        
        {/* Marca y Logo */}
        <a 
          className="navbar-brand d-flex align-items-center" 
          href="#" 
          onClick={(e) => { e.preventDefault(); setView('home'); }}
          style={{ cursor: 'pointer' }}
        >
          <img 
            src="/img/LOGO.jpeg" 
            alt="NutriDiet Logo" 
            className="shadow-sm"
            style={{ width: '45px', height: '45px', borderRadius: '50%', marginRight: '12px', border: '2px solid #4A7A25' }} 
            onError={(e) => e.target.style.display = 'none'}
          />
          <span style={{ color: '#4A7A25', fontWeight: '900', fontSize: '1.6rem', letterSpacing: '0.5px' }}>
            NutriDiet
          </span>
        </a>
        
        {/* Botón menú hamburguesa (móviles) */}
        <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Enlaces centrales y Carrito */}
        <div className="collapse navbar-collapse" id="navbarNav">
          
          {/* Centramos los enlaces con mx-auto */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-3 gap-lg-4 mt-3 mt-lg-0 text-center">
            <li className="nav-item">
              <button 
                className="nav-link btn btn-link d-inline-flex align-items-center justify-content-center gap-2 px-0" 
                style={getLinkStyle('home')}
                onClick={() => setView('home')}
              >
                <FaStore /> Productos
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link btn btn-link d-inline-flex align-items-center justify-content-center gap-2 px-0" 
                style={getLinkStyle('about')}
                onClick={() => setView('about')}
              >
                <FaInfoCircle /> Quiénes Somos
              </button>
            </li>
          </ul>

          {/* Botón del Carrito mejorado */}
          <div className="d-flex justify-content-center mt-3 mt-lg-0">
            <button 
              className="btn position-relative rounded-circle d-flex align-items-center justify-content-center shadow-sm" 
              onClick={toggleCart}
              style={{ 
                backgroundColor: '#FFFFFF', 
                color: '#4A7A25', 
                border: '1px solid #4A7A25',
                width: '50px',
                height: '50px',
                transition: 'transform 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <FaShoppingCart size={22} />
              
              {cartCount > 0 && (
                <span 
                  className="position-absolute translate-middle badge rounded-pill shadow-sm" 
                  style={{ 
                    backgroundColor: '#9E5B26',
                    top: '8px',
                    left: '42px',
                    fontSize: '0.8rem',
                    border: '2px solid #F5F3EB'
                  }}
                >
                  {cartCount}
                </span>
              )}
            </button>
          </div>
          
        </div>
      </div>
    </nav>
  );
};