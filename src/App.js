import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Css Import
import './App.css';

// Components Import
import Navigation from './components/Navigation';

// Pages Import
import Home from './pages/Home';
import MyOrder from './pages/MyOrder';
import Cart from './pages/Cart';
import Register from './pages/Register';
import Login from './pages/Login';
import AuthRoute from './routes/AuthRoute';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route element={<AuthRoute/>}>
            <Route path="/orders" element={<MyOrder />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
          <Route  path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
