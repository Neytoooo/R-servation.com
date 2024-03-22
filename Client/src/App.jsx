import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './Components/Layout/Header/Header';
import Footer from './Components/Layout/Footer/Footer';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Register/Register';
import Destinations from './Components/Pages/Destination/Destinations';

const AppWrapper = () => {
  const location = useLocation();
  const noFooterRoutes = ['/login', '/register']; // Les chemins où le footer ne doit pas être affiché

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/destinations" element={<Destinations />} />
      </Routes>
      {!noFooterRoutes.includes(location.pathname) && <Footer />} {/* Affiche le footer seulement si le chemin actuel n'est pas dans noFooterRoutes */}
    </>
  );
};

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
