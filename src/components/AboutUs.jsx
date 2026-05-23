// src/components/AboutUs.jsx
import React from 'react';
import { FaLeaf, FaHeart, FaSeedling, FaCircle } from 'react-icons/fa';

export const AboutUs = () => {
  return (
    <div className="about-us-section pb-5" style={{ backgroundColor: '#FFFFFF' }}>
      
      {/* Encabezado / Hero Section */}
      <div className="py-5 text-center shadow-sm" style={{ backgroundColor: '#F5F3EB' }}>
        <div className="container py-3">
          <h2 className="display-5 mb-3" style={{ color: '#4A7A25', fontWeight: 'bold' }}>
            ¿Quiénes Somos?
          </h2>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <p className="lead" style={{ color: '#0B0B0B' }}>
                Somos <strong>Dietética NutriDiet</strong>, un espacio dedicado a la venta de productos alimenticios naturales y saludables en el corazón de Posadas.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        {/* Tarjetas de Misión y Valores */}
        <div className="row justify-content-center mb-5 g-4">
          <div className="col-md-5">
            <div className="p-4 rounded shadow-sm h-100 bg-white border-top border-4 text-center d-flex flex-column align-items-center" style={{ borderColor: '#4A7A25' }}>
              <div className="mb-3 p-3 rounded-circle" style={{ backgroundColor: '#F5F3EB' }}>
                <FaSeedling size={32} style={{ color: '#4A7A25' }} />
              </div>
              <h4 style={{ color: '#4A7A25', fontWeight: 'bold' }}>Nuestro Propósito</h4>
              <p className="text-muted mt-2 mb-0">
                Fomentar el consumo consciente y responsable. Queremos que adquieras solo lo que necesitás, reduciendo el desperdicio de alimentos y promoviendo hábitos sostenibles.
              </p>
            </div>
          </div>
          
          <div className="col-md-5">
            <div className="p-4 rounded shadow-sm h-100 bg-white border-top border-4 text-center d-flex flex-column align-items-center" style={{ borderColor: '#9E5B26' }}>
              <div className="mb-3 p-3 rounded-circle" style={{ backgroundColor: '#F5F3EB' }}>
                <FaHeart size={32} style={{ color: '#9E5B26' }} />
              </div>
              <h4 style={{ color: '#9E5B26', fontWeight: 'bold' }}>Atención Personalizada</h4>
              <p className="text-muted mt-2 mb-0">
                Comprometidos con el bienestar integral. Contamos con el apoyo de profesionales en nutrición para ayudarte a encontrar los productos ideales para tu estilo de vida.
              </p>
            </div>
          </div>
        </div>

        {/* Sección de Identidad Visual */}
        <div className="row align-items-center bg-white p-4 p-md-5 rounded shadow border-0 mt-5">
          <div className="col-md-5 text-center mb-4 mb-md-0">
            <img 
              src="/img/LOGO.jpeg" 
              alt="Logo NutriDiet" 
              className="img-fluid rounded-circle shadow"
              style={{ maxWidth: '280px', border: '6px solid #F5F3EB' }} 
              onError={(e) => e.target.style.display = 'none'}
            />
          </div>
          
          <div className="col-md-7 ps-md-4">
            <h3 className="mb-4 text-center text-md-start" style={{ color: '#4A7A25', fontWeight: 'bold' }}>
              Nuestra Identidad Visual
            </h3>
            <p className="mb-4" style={{ color: '#0B0B0B' }}>
              Cada elemento de nuestro logo fue diseñado cuidadosamente para representar nuestra filosofía de alimentación consciente:
            </p>
            
            <div className="d-flex align-items-start mb-4">
              <FaCircle className="mt-1 me-3" style={{ color: '#4A7A25', minWidth: '18px' }} />
              <div>
                <h6 className="mb-1 fw-bold" style={{ color: '#4A7A25', fontSize: '1.1rem' }}>El color verde y las hojas</h6>
                <p className="text-muted small mb-0 fs-6">Se asocian directamente con la salud, lo natural y el bienestar, mostrando que ofrecemos opciones pensadas para el cuidado personal.</p>
              </div>
            </div>

            <div className="d-flex align-items-start mb-4">
              <FaCircle className="mt-1 me-3" style={{ color: '#9E5B26', minWidth: '18px' }} />
              <div>
                <h6 className="mb-1 fw-bold" style={{ color: '#9E5B26', fontSize: '1.1rem' }}>El formato circular</h6>
                <p className="text-muted small mb-0 fs-6">Formado por frutos secos como almendras, nueces y maní, representa nuestros productos principales, especialmente los que ofrecemos a granel.</p>
              </div>
            </div>

            <div className="d-flex align-items-start">
              <FaLeaf className="mt-1 me-3" style={{ color: '#0B0B0B', minWidth: '18px' }} />
              <div>
                <h6 className="mb-1 fw-bold" style={{ color: '#0B0B0B', fontSize: '1.1rem' }}>Nuestro eslogan</h6>
                <p className="text-muted small mb-0 fs-6"><em>"Comé sano. Viví mejor."</em> resume nuestra misión de no solo ofrecer productos, sino de promover una mejor calidad de vida.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};