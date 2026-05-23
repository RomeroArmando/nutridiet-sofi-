// src/components/Cart.jsx
import React from 'react';
import { FaTrashAlt } from 'react-icons/fa'; // Importamos el ícono de basura

export const Cart = ({ cart, isOpen, toggleCart, updateQuantity, removeFromCart, clearCart, onCheckout }) => {
  const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <>
      {isOpen && <div className="offcanvas-backdrop fade show" onClick={toggleCart}></div>}
      
      <div className={`offcanvas offcanvas-end ${isOpen ? 'show' : ''}`} tabIndex="-1" style={{ visibility: isOpen ? 'visible' : 'hidden', backgroundColor: '#F5F3EB' }}>
        <div className="offcanvas-header border-bottom">
          <h5 className="offcanvas-title" style={{ color: '#4A7A25', fontWeight: 'bold' }}>Tu Pedido</h5>
          <button type="button" className="btn-close" onClick={toggleCart}></button>
        </div>
        
        <div className="offcanvas-body d-flex flex-column">
          {cart.length === 0 ? (
            <div className="text-center mt-5 text-muted">
              <p>El carrito está vacío.</p>
              <p>¡Agregá algunos productos saludables!</p>
            </div>
          ) : (
            <div className="flex-grow-1 overflow-auto">
              {cart.map(item => (
                <div key={item.id} className="d-flex justify-content-between align-items-center mb-3 pb-3 border-bottom">
                  <div>
                    <h6 className="mb-0 fw-bold" style={{ color: '#0B0B0B' }}>{item.name}</h6>
                    <small style={{ color: '#9E5B26' }}>${item.price} c/u</small>
                  </div>
                  <div className="d-flex align-items-center">
                    {/* Botones de cantidad */}
                    <button className="btn btn-sm btn-outline-secondary px-2" onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span className="mx-2 fw-bold">{item.quantity}</span>
                    <button className="btn btn-sm btn-outline-secondary px-2" onClick={() => updateQuantity(item.id, 1)}>+</button>
                    
                    {/* NUEVO: Botón de eliminar producto */}
                    <button 
                      className="btn btn-sm ms-3 text-danger border-0" 
                      onClick={() => removeFromCart(item.id)}
                      title="Eliminar producto"
                    >
                      <FaTrashAlt size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          <div className="mt-auto pt-3 border-top">
            {/* NUEVO: Botón para vaciar carrito (solo se muestra si hay productos) */}
            {cart.length > 0 && (
              <div className="text-end mb-3">
                <button 
                  className="btn btn-sm text-decoration-underline" 
                  style={{ color: '#9E5B26', background: 'transparent', border: 'none' }}
                  onClick={clearCart}
                >
                  Vaciar carrito
                </button>
              </div>
            )}

            <div className="d-flex justify-content-between mb-3">
              <span className="fs-5 fw-bold" style={{ color: '#0B0B0B' }}>Total:</span>
              <span className="fs-5 fw-bold" style={{ color: '#4A7A25' }}>${total}</span>
            </div>
            
            <button 
              className="btn w-100 text-white fw-bold py-2" 
              style={{ backgroundColor: '#4A7A25', borderRadius: '8px' }}
              disabled={cart.length === 0}
              onClick={onCheckout}
            >
              Generar pedido por WhatsApp
            </button>
          </div>
        </div>
      </div>
    </>
  );
};