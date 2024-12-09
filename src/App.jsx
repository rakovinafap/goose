
import React, { useState, useRef } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PhotoGallery from './components/PhotoGallery';
import DeliveryInfo from './components/DeliveryInfo';
import ProductGrid from './components/ProductGrid';
import ProductDetails from './components/ProductDetails';
import Banners from './components/Banners';
import Footer from './components/Footer'
import { CartProvider } from './contexts/CartContext';

const App = () => {
    const [cartItems, setCartItems] = useState([]);

    const handleAddToCart = (product) => {
        setCartItems(prevCart => {
            const existingItem = prevCart.find(item => item.id === product.id);
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const productGridRef = useRef(null);

    const scrollToProductGrid = () => {
        productGridRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    


    return (
        <CartProvider>
            <div className="App">
              <Header />
              <HeroSection onScrollToProductGrid={scrollToProductGrid} />
              <PhotoGallery />
              <ProductDetails onScrollToProductGrid={scrollToProductGrid} />
              <Banners />
              <DeliveryInfo />
              <ProductGrid onAddToCart={handleAddToCart} ref={productGridRef} />
              <Footer />
          </div>
        </CartProvider>
    );
};

export default App;
