import React from 'react';
import ReactDOM from 'react-dom/client';

import './Global.css';
import Header from './Pages/Header/Header';
import Main from './Pages/Main/Main';
import Footer from './Pages/Footer/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="container">
    <Header />
    <Main />
    <Footer />
  </div>
  
);

