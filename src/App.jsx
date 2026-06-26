import { Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Products from "./pages/Items";
import Auth from "./pages/Auth";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import AuthProvider from "./context/AuthContext";
import CartProvider from "./context/CartContext";
import Footer from "./components/Footer"
import Navbar from "./components/Navbar";


function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/items" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
