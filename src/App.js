import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Sale from './pages/Sale';
import Auth from './pages/Auth';
import ProceedOrder from './pages/ProceedOrder';
import Category from './pages/Category';
import AllProducts from './pages/AllProducts'
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <CartProvider>
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/product/:id" element={<ProductDetail/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/sale" element={<Sale/>} />
            <Route path="/auth" element={<Auth/>} />
            <Route path="/proceed-order" element={<ProceedOrder/>} />
            <Route path="/category/:categoryName" element={<Category />} />
            <Route path="/all-products" element={<AllProducts/>} />
          </Routes>
        </main>
        <Footer />
      </div>
      </Router>
    </CartProvider>
  );
}

export default App;

