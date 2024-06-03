import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/layout/layout";
import Home from "./pages/home/home";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="/" element={<Home />} />

          <Route path="catalogue" element={<Home />} />
          <Route path="catalogueItem" element={<Home />} />

          <Route path="cart" element={<Home />} />
          <Route path="contacts" element={<Home />} />
          <Route path="aboutus" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
