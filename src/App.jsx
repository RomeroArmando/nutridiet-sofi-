// src/App.jsx
import { useState } from 'react';
import { products } from './data/products';
import { ProductCard } from './components/ProductCard';
import { Navbar } from './components/Navbar';
import { Cart } from './components/Cart';
import { QRCodeModal } from './components/QRCodeModal';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const handleUpdateQuantity = (id, change) => {
    setCart((prevCart) => {
      return prevCart.map(item => {
        if (item.id === id) {
          const newQuantity = item.quantity + change;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
        }
        return item;
      }).filter(item => item !== null);
    });
  };

  // NUEVA FUNCIÓN: Eliminar un producto entero del carrito
  const handleRemoveFromCart = (id) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id));
  };

  // NUEVA FUNCIÓN: Vaciar todo el carrito
  const handleClearCart = () => {
    setCart([]);
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsModalOpen(true);
  };

  const totalItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
      <Navbar cartCount={totalItemsCount} toggleCart={toggleCart} />
      
      <Cart 
        cart={cart} 
        isOpen={isCartOpen} 
        toggleCart={toggleCart} 
        updateQuantity={handleUpdateQuantity} 
        removeFromCart={handleRemoveFromCart} // Pasamos la función
        clearCart={handleClearCart}           // Pasamos la función
        onCheckout={handleCheckout} 
      />

      <QRCodeModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        cart={cart} 
      />

      <div className="container py-5">
        <h2 className="text-center mb-5" style={{ color: '#0B0B0B', fontWeight: 'bold' }}>
          Nuestros Productos
        </h2>
        
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {products.map((product) => (
            <div className="col" key={product.id}>
              <ProductCard product={product} addToCart={handleAddToCart} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;