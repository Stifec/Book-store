import React from 'react';
import ReactDOM from 'react-dom/client';


import Header from './Pages/Header/Header';
import SignIn from './Pages/SignIn/SignIn';
import Footer from './Pages/Footer/Footer';
import BooksList from './Pages/BookList/BooksList';
import SpecificBook from './Pages/SpecificBook/SpecificBook';
import Cart from './Pages/Cart/Cart';
import ErrorPage from './Pages/Error/Error';
import './Global.css';

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet
} from 'react-router-dom';

const Root = () => {
  return (
    <div className="container">
    <Header />
    <Outlet />
    <Footer />
  </div>
  );
}; 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<Root />}>
      <Route index element={<SignIn />} />
      <Route path='/booklist' element= {<BooksList />} />
      <Route path='/' element= {<SpecificBook />} />
      <Route path='/' element= {<Cart />} />
      <Route path='/signin' element= {<SignIn />} />
      <Route path='*' element={<ErrorPage />} />
    </Route>
  )
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <RouterProvider router={router} />
  
);

