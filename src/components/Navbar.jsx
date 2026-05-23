// src/components/Navbar.jsx
import React, { useState } from 'react';
import { FaShoppingCart, FaStore, FaInfoCircle, FaBars, FaTimes } from 'react-icons/fa';

export const Navbar = ({ cartCount, toggleCart, setView, view }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (targetView) => {
    setView(targetView);
    setIsMenuOpen(false);
  };

  // Estilos para la versión de escritorio
  const getDesktopLinkStyle = (targetView) => ({
    color: view === targetView ? '#4A7A25' : '#0B0B0B',
    fontWeight: 'bold',
    textDecoration: 'none',
    borderBottom: view === targetView ? '3px solid #4A7A25' : '3px solid transparent',
    paddingBottom: '6px',
    transition: 'all 0.3s ease'
  });

  return (
    <nav className="navbar sticky-top shadow-sm" style={{ backgroundColor: '#F5F3EB', padding: '12px 0' }}>
      <div className="container d-flex justify-content-between align-items-center position-relative">

        {/* 1. IZQUIERDA (Solo Móvil): Botón menú hamburguesa personalizado */}
        <button 
          className="btn d-lg-none p-1 border-0 shadow-none" 
          onClick={() => setIsMenuOpen(true)}
          style={{ color: '#4A7A25' }}
        >
          <FaBars size={26} />
        </button>

        {/* 2. CENTRO (Móvil) / IZQUIERDA (Desktop): Logo */}
        <a 
          className="navbar-brand d-flex align-items-center m-0 position-lg-static position-absolute start-50 translate-middle-x translate-lg-middle-none" 
          href="#" 
          onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
          style={{ cursor: 'pointer' }}
        >
          <img 
            src="/img/LOGO.jpeg" 
            alt="NutriDiet Logo" 
            className="shadow-sm"
            style={{ width: '45px', height: '45px', borderRadius: '50%', marginRight: '10px', border: '2px solid #4A7A25' }} 
            onError={(e) => e.target.style.display = 'none'}
          />
          {/* Ocultamos el texto en pantallas muy chicas para que respire mejor el diseño */}
          <span className="d-none d-sm-block" style={{ color: '#4A7A25', fontWeight: '900', fontSize: '1.5rem', letterSpacing: '0.5px' }}>
            NutriDiet
          </span>
        </a>

        {/* 3. CENTRO (Solo Desktop): Enlaces de navegación */}
        <div className="d-none d-lg-flex align-items-center gap-4 position-absolute start-50 translate-middle-x">
          <button 
            className="btn btn-link d-inline-flex align-items-center gap-2 px-0" 
            style={getDesktopLinkStyle('home')}
            onClick={() => handleNavClick('home')}
          >
            <FaStore /> Productos
          </button>
          <button 
            className="btn btn-link d-inline-flex align-items-center gap-2 px-0" 
            style={getDesktopLinkStyle('about')}
            onClick={() => handleNavClick('about')}
          >
            <FaInfoCircle /> Quiénes Somos
          </button>
        </div>

        {/* 4. DERECHA (Móvil y Desktop): Botón del Carrito */}
        <button 
          className="btn position-relative rounded-circle d-flex align-items-center justify-content-center shadow-sm" 
          onClick={() => {
            toggleCart();
            setIsMenuOpen(false);
          }}
          style={{ 
            backgroundColor: '#FFFFFF', 
            color: '#4A7A25', 
            border: '1px solid #4A7A25',
            width: '50px',
            height: '50px',
            transition: 'transform 0.2s ease',
            zIndex: 10
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <FaShoppingCart size={22} />
          {cartCount > 0 && (
            <span 
              className="position-absolute translate-middle badge rounded-pill shadow-sm" 
              style={{ backgroundColor: '#9E5B26', top: '8px', left: '42px', fontSize: '0.8rem', border: '2px solid #F5F3EB' }}
            >
              {cartCount}
            </span>
          )}
        </button>

      </div>

      {/* --- ESTRUCTURA DEL MENÚ LATERAL (OFFCANVAS) PARA MÓVILES --- */}
      
      {/* Fondo oscuro al abrir el menú */}
      {isMenuOpen && (
        <div className="offcanvas-backdrop fade show d-lg-none" onClick={() => setIsMenuOpen(false)}></div>
      )}

      {/* Panel lateral */}
      <div 
        className={`offcanvas offcanvas-start d-lg-none ${isMenuOpen ? 'show' : ''}`} 
        tabIndex="-1" 
        style={{ 
          visibility: isMenuOpen ? 'visible' : 'hidden', 
          backgroundColor: '#FFFFFF', 
          width: '280px', 
          borderRight: 'none', 
          boxShadow: '4px 0 15px rgba(0,0,0,0.08)' 
        }}
      >
        <div className="offcanvas-header pb-3 mt-2 px-4">
          <div className="d-flex align-items-center">
            <img src="/img/LOGO.jpeg" alt="Logo" style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }} />
            <h5 className="offcanvas-title mb-0" style={{ color: '#4A7A25', fontWeight: '900' }}>Menú</h5>
          </div>
          <button type="button" className="btn text-muted border-0 bg-transparent p-0" onClick={() => setIsMenuOpen(false)}>
            <FaTimes size={24} />
          </button>
        </div>
        
        <div className="offcanvas-body px-4 mt-2">
          <div className="d-flex flex-column gap-3">
            {/* Botón Inicio Móvil */}
            <button 
              className="btn d-flex align-items-center gap-3 p-3 rounded-4 w-100" 
              style={{ 
                backgroundColor: view === 'home' ? 'rgba(74, 122, 37, 0.1)' : '#F5F3EB', 
                color: view === 'home' ? '#4A7A25' : '#0B0B0B', 
                fontWeight: 'bold', 
                border: 'none', 
                textAlign: 'left',
                transition: 'all 0.2s'
              }}
              onClick={() => handleNavClick('home')}
            >
              <FaStore size={20} /> Productos
            </button>
            
            {/* Botón Quiénes Somos Móvil */}
            <button 
              className="btn d-flex align-items-center gap-3 p-3 rounded-4 w-100" 
              style={{ 
                backgroundColor: view === 'about' ? 'rgba(74, 122, 37, 0.1)' : '#F5F3EB', 
                color: view === 'about' ? '#4A7A25' : '#0B0B0B', 
                fontWeight: 'bold', 
                border: 'none', 
                textAlign: 'left',
                transition: 'all 0.2s'
              }}
              onClick={() => handleNavClick('about')}
            >
              <FaInfoCircle size={20} /> Quiénes Somos
            </button>
          </div>
        </div>
        
        <div className="offcanvas-footer p-4 text-center">
          <p className="text-muted small mb-0 fw-bold" style={{ color: '#9E5B26' }}>Comé sano. Viví mejor.</p>
        </div>
      </div>

    </nav>
  );
};