// src/components/QRCodeModal.jsx
import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';

export const QRCodeModal = ({ isOpen, onClose, cart }) => {
  if (!isOpen) return null;

  // Calculamos el total nuevamente para el mensaje
  const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  // Reemplazá los últimos ceros con el número real de NutriDiet
  const phoneNumber = "+5493764635595"; 

  // Formateamos el texto que llegará por WhatsApp
  const textLineBreaks = cart.map(item => `▪️ ${item.quantity}x ${item.name} - $${item.price * item.quantity}`).join('\n');
  const message = `¡Hola NutriDiet! Quiero hacer este pedido:\n\n${textLineBreaks}\n\n*Total: $${total}*\n\n¿Me confirman disponibilidad y formas de pago?`;
  
  // Codificamos el mensaje para que sea válido en una URL
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    // Fondo oscuro semi-transparente
    <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }} tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content shadow" style={{ backgroundColor: '#F5F3EB', border: 'none', borderRadius: '12px' }}>
          
          <div className="modal-header border-bottom-0 pb-0">
            <h5 className="modal-title fs-4" style={{ color: '#4A7A25', fontWeight: 'bold' }}>Envía tu pedido</h5>
            <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
          </div>
          
          <div className="modal-body text-center pt-2 pb-4">
            <p style={{ color: '#0B0B0B' }}>Escaneá este código con tu celular para enviarnos el detalle por WhatsApp.</p>
            
            {/* Contenedor del QR con fondo blanco para asegurar buen contraste */}
            <div className="bg-white p-3 d-inline-block rounded shadow-sm mb-4 border">
              <QRCodeCanvas value={whatsappUrl} size={200} fgColor="#0B0B0B" />
            </div>
            
            <p className="text-muted small mb-2">¿Estás navegando desde el celular?</p>
            
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn w-100 text-white fw-bold py-2" 
              style={{ backgroundColor: '#9E5B26', borderRadius: '8px' }}
            >
              Abrir WhatsApp directamente
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};