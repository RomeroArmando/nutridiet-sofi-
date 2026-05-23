// src/components/ProductCard.jsx
import React from 'react';

export const ProductCard = ({ product, addToCart }) => {
  return (
    // 1. Le damos a toda la tarjeta el color crema de fondo para unificarla
    <div className="card h-100 shadow-sm border-0" style={{ borderRadius: '12px', overflow: 'hidden', backgroundColor: '#F5F3EB' }}>
      
      {/* Envolvemos la imagen en un div para controlar mejor los espacios */}
      <div style={{ padding: '1.5rem 1rem 0.5rem 1rem', textAlign: 'center' }}>
        <img 
          src={product.image} 
          className="card-img-top" 
          alt={product.name}
          style={{ 
            height: '130px', // Un poquito más baja para estilizar
            width: '100%',
            objectFit: 'contain', 
            // 2. EL TRUCO MÁGICO: Elimina el fondo blanco del JPG
            mixBlendMode: 'multiply' 
          }}
          onError={(e) => e.target.src = 'https://via.placeholder.com/200?text=NutriDiet'} 
        />
      </div>
      
      {/* 3. Ajustamos el padding superior (pt-1) para que el texto suba un poquito y cierre el espacio */}
      <div className="card-body d-flex flex-column p-3 pt-1">
        <h6 className="card-title text-center mb-2" style={{ color: '#4A7A25', fontWeight: 'bold' }}>
          {product.name}
        </h6>
        
        <p className="card-text text-center fw-bold mb-3" style={{ color: '#9E5B26', fontSize: '1.05rem' }}>
          ${product.price}
        </p>
        
        <button 
          className="btn btn-sm mt-auto text-white w-100 fw-bold shadow-sm" 
          style={{ backgroundColor: '#4A7A25', borderRadius: '6px' }}
          onClick={() => addToCart(product)}
        >
          Agregar
        </button>
      </div>
    </div>
  );
};