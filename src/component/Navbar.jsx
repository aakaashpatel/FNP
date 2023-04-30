import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_logo navbar_size">
        <img src="https://www.fnp.com/assets/images/logo.png" alt=""/>
      </div>
      <div className="navbar_search ">
      <form className="d-flex " role="search">
        <input className="form-control me-1" type="search" placeholder="Search flowers, cakes, gift, etc." aria-label="Search"/>
        <button className="btn btn-outline-dark" type="submit"><i className="ri-search-line"></i></button>
      </form>
      </div>
      <div className="navbar_cart">
       <div className="cart">
       <ShoppingCartIcon/>
           <strong>Cart</strong> 
       </div>
       <div className="guest">
           <AccountCircleIcon/> 
           <strong>Hi Guest</strong>
       </div>
      </div>
    </div>
        // header
  );
}
