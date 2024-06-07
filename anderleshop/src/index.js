import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/layout/layout";
import Home from "./pages/home/home";
import Catalogue from "./pages/catalogue/catalogue";
import Contacts from "./pages/contacts/contacts";
import AboutUs from "./pages/aboutus/aboutUs";
import Anderlehaus from "./pages/anderlehaus/anderlehaus";
import Cart from "./pages/cart/cart";
import CatalogueItem from "./pages/catalogueItem/catalogueItem";
import Shipping from "./pages/cart/shipping";
import Payment from "./pages/cart/payment";
import Delivery from "./pages/cart/delivery";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>>
        <Route path="/" element={<Layout />}>s
          <Route path="home" element={<Home />} />
          <Route path="/" element={<Home />} />

          <Route path="catalogue" element={<Catalogue />} />sss
          <Route path="catalogueItem/:id" element={<CatalogueItem />} />

          <Route path="contacts" element={<Contacts />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="anderlehaus" element={<Anderlehaus />} />

          <Route path="cart" element={<Cart />} />
          <Route path="shipping" element={<Shipping />} />
          <Route path="payment" element={<Payment />} />
          <Route path="delivery" element={<Delivery />} />


        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
