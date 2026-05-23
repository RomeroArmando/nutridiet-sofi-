// src/components/Footer.jsx
import React from 'react';

export const Footer = () => {
  return (
    <footer className="mt-auto" style={{ backgroundColor: '#0B0B0B', borderTop: '4px solid #4A7A25' }}>
      <div className="container py-4">
        <div className="row align-items-center">
          
          {/* Columna 1: Marca (Ahora completamente limpia, sin las redes genéricas) */}
          <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
            <h5 style={{ color: '#4A7A25', fontWeight: 'bold', letterSpacing: '1px' }}>
              NutriDiet
            </h5>
            <p className="small mb-0" style={{ color: '#aaa' }}>
              Comé sano. Viví mejor.
            </p>
          </div>

          {/* Columna 2: Copyright */}
          <div className="col-md-4 text-center mb-3 mb-md-0">
            <p className="small mb-0" style={{ color: '#666' }}>
              &copy; {new Date().getFullYear()} NutriDiet. <br className="d-block d-md-none" />
              Todos los derechos reservados.
            </p>
          </div>

          {/* Columna 3: Powered by WIP (Convertido en enlace directo a tu Instagram) */}
          <div className="col-md-4 d-flex justify-content-center justify-content-md-end align-items-center gap-3">
            <div className="text-end">
              <span className="d-block" style={{ fontSize: '0.75rem', letterSpacing: '2px', color: '#666', fontWeight: 'bold' }}>
                POWERED BY
              </span>
              <span style={{ fontSize: '0.9rem', color: '#F5F3EB', letterSpacing: '1px' }}>
                WIP Team
              </span>
            </div>
            
            {/* El contenedor ahora es un enlace interactivo */}
            <a 
              href="https://www.instagram.com/work.progress1/" // <-- Colocá acá la URL real de tu perfil o el de tu equipo
              target="_blank"
              rel="noopener noreferrer"
              className="d-flex align-items-center justify-content-center overflow-hidden rounded-circle"
              style={{ 
                width: '65px', 
                height: '65px',
                border: '2px solid rgba(0, 255, 255, 0.3)',
                boxShadow: '0 0 10px rgba(0, 255, 255, 0.2)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                cursor: 'pointer',
                textDecoration: 'none' // Evita cualquier subrayado por defecto
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.15) rotate(5deg)';
                e.currentTarget.style.borderColor = '#ff00ff';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 0, 255, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                e.currentTarget.style.borderColor = 'rgba(0, 255, 255, 0.3)';
                e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 255, 255, 0.2)';
              }}
              title="Visitar el Instagram de WIP"
            >
              <img 
                src="/img/wip-logo.png" 
                alt="WIP Development" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => e.target.style.display = 'none'}
              />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};