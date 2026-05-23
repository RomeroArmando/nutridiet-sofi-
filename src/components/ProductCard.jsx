// src/components/ProductCard.jsx
import React from 'react';

export const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="card h-100 shadow-sm border-0">
      {/* Si no tenés las imágenes aún, esto mostrará un espacio vacío ordenado */}
      <img 
        src={product.image} 
        className="card-img-top" 
        alt={product.name}
        style={{ height: '200px', objectFit: 'cover', backgroundColor: '#F5F3EB' }}
        onError={(e) => e.target.src = 'https://via.placeholder.com/200?text=NutriDiet'} 
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-center mb-3" style={{ color: '#4A7A25', fontWeight: 'bold' }}>
          {product.name}
        </h5>
        <p className="card-text text-center fs-5 mb-4" style={{ color: '#9E5B26' }}>
          ${product.price}
        </p>
        <button 
          className="btn mt-auto text-white w-100" 
          style={{ backgroundColor: '#4A7A25' }}
          onClick={() => addToCart(product)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};