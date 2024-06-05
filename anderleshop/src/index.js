import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/layout/layout";
import Home from "./pages/home/home";
import Catalogue from "./pages/catalogue/catalogue";
import Contacts from "./pages/contacts/contacts";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>>
        <Route path="/" element={<Layout />}>s
          <Route path="home" element={<Home />} />
          <Route path="/" element={<Home />} />

          <Route path="catalogue" element={<Catalogue />} />sss
          <Route path="catalogueItem" element={<Home />} />

          <Route path="contacts" element={<Contacts />} />
          <Route path="cart" element={<Home />} />
          <Route path="aboutus" element={<Home />} />
          <Route path="anderlehaus" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
