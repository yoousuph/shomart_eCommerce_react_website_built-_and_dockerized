import { Link } from "react-router-dom";
import { getProducts } from "../data/Products";
import logo from '../assets/logo.png';
import hero from '../assets/hero.png';
import mcard from '../assets/mcard.png';
import paypal from '../assets/paypal.png';
import netflix from '../assets/netflix.png';

export default function Home() {
  const products = getProducts();
  return (
    <div className="page">
      <div className="home-hero">
        <h1 className="home-title">Welcome to ShopMart</h1>
        <p className="home-subtitle">
          Get all your favourite items at affordable and amazing prices <span className="span-text">Anytime, Anywhere!</span> 
        </p>
      </div>
      <div className="container">
        <h2 className="page-title">Items Highlight</h2>
        <div className="product-grid">
          <div className="product-card">
            <img
              className="product-card-image"
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
              alt="Wireless Headphones"
            />
            <div className="product-card-content">
              <h3 className="product-card-name">Wireless Headphones</h3>
              <p className="product-card-price">$250</p>
            </div>
          </div>
          <div className="product-card">
            <img
              className="product-card-image"
              src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png"
              alt="Wireless Headphones"
            />
            <div className="product-card-content">
              <h3 className="product-card-name">iPhone 12 pro</h3>
              <p className="product-card-price">$2000</p>
            </div>
          </div>
          <div className="product-card">
            <img
              className="product-card-image"
              src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png"
              alt="Wireless Headphones"
            />
            <div className="product-card-content">
              <h3 className="product-card-name">Camera</h3>
              <p className="product-card-price">$650</p>
            </div>
          </div>
        </div>
        <div className="btn-more-items">
            <Link className="btn btn-primary" to="/items">
              See More...
            </Link>
        </div>
      </div>
      <div className="container">
        <h2 className="page-title">Sponsors</h2>
        <div className="sponsors-container">
            <img className="sponsor-image" src={paypal} alt="Microsoft"/> 
            <img className="sponsor-image" src={mcard} alt="Microsoft"/> 
            <img className="sponsor-image" src={netflix} alt="Microsoft"/> 
            <img className="sponsor-image" src={hero} alt="Microsoft"/> 
            <img className="sponsor-image" src={logo} alt="Microsoft"/> 
        </div>
      </div>
    </div>
  );
}


