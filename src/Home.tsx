import React from 'react';
import './index.css';
import { Link } from 'react-router-dom'; 

function Home() {
  return (
    <div className="home">
        <h2>E-Fandray</h2>
        <Link to="/connexion" className="button">SE CONNECTER</Link>
        <Link to="/inscription" className="button">S'INSCRIRE</Link>
    </div>
  );
}

export default Home;