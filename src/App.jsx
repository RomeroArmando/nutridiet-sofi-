// src/App.jsx
import { useState } from 'react';
import { products } from './data/products';
import { ProductCard } from './components/ProductCard';
import { Navbar } from './components/Navbar';
import { Cart } from './components/Cart';
import { QRCodeModal } from './components/QRCodeModal';
import { AboutUs } from './components/AboutUs';
import { Footer } from './components/Footer';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [view, setView] = useState('home'); 

  // --- NUEVO: ESTADOS PARA LA PAGINACIÓN ---
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

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

  const handleRemoveFromCart = (id) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsModalOpen(true);
  };

  const totalItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // --- NUEVO: LÓGICA DE PAGINACIÓN ---
  // Calculamos los índices para recortar el array de productos
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  // Obtenemos solo los 6 productos de la página actual
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  // Calculamos el total de páginas
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Función para cambiar de página y volver arriba automáticamente
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="d-flex flex-column" style={{ backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
      
      <Navbar cartCount={totalItemsCount} toggleCart={toggleCart} setView={setView} view={view} />
      
      <Cart 
        cart={cart} 
        isOpen={isCartOpen} 
        toggleCart={toggleCart} 
        updateQuantity={handleUpdateQuantity} 
        removeFromCart={handleRemoveFromCart}
        clearCart={handleClearCart}
        onCheckout={handleCheckout} 
      />

      <QRCodeModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        cart={cart} 
      />

      <main className="flex-grow-1">
        {view === 'home' ? (
          <div className="container py-5">
            <h2 className="text-center mb-5" style={{ color: '#0B0B0B', fontWeight: 'bold' }}>
              Nuestros Productos
            </h2>
            
            {/* NUEVO: Cambiamos row-cols-lg-4 a row-cols-lg-3 para que 6 cartas encajen perfecto en 2 filas */}
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
              {/* NUEVO: Mapeamos currentProducts en lugar de products */}
              {currentProducts.map((product) => (
                <div className="col" key={product.id}>
                  <ProductCard product={product} addToCart={handleAddToCart} />
                </div>
              ))}
            </div>

            {/* NUEVO: CONTROLES DE PAGINACIÓN */}
            {totalPages > 1 && (
              <nav className="mt-5 d-flex justify-content-center">
                <ul className="pagination gap-2 shadow-sm rounded-pill p-2" style={{ backgroundColor: '#F5F3EB' }}>
                  
                  {/* Botón Anterior */}
                  <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button 
                      className="page-link rounded-pill border-0 fw-bold" 
                      onClick={() => paginate(currentPage - 1)}
                      style={{ 
                        backgroundColor: currentPage === 1 ? 'transparent' : '#FFFFFF',
                        color: currentPage === 1 ? '#aaa' : '#4A7A25'
                      }}
                    >
                      &laquo;
                    </button>
                  </li>

                  {/* Números de página */}
                  {[...Array(totalPages)].map((_, i) => (
                    <li key={i} className="page-item">
                      <button 
                        className="page-link rounded-pill border-0 fw-bold px-3" 
                        onClick={() => paginate(i + 1)}
                        style={{ 
                          backgroundColor: currentPage === i + 1 ? '#4A7A25' : '#FFFFFF',
                          color: currentPage === i + 1 ? '#FFFFFF' : '#4A7A25',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {i + 1}
                      </button>
                    </li>
                  ))}

                  {/* Botón Siguiente */}
                  <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <button 
                      className="page-link rounded-pill border-0 fw-bold" 
                      onClick={() => paginate(currentPage + 1)}
                      style={{ 
                        backgroundColor: currentPage === totalPages ? 'transparent' : '#FFFFFF',
                        color: currentPage === totalPages ? '#aaa' : '#4A7A25'
                      }}
                    >
                      &raquo;
                    </button>
                  </li>
                  
                </ul>
              </nav>
            )}

          </div>
        ) : (
          <AboutUs />
        )}
      </main>

      <Footer />
      
    </div>
  );
}

export default App;