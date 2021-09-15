import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

function Connexion() {
  return (
    <div className="connexion">
        <h2>Connexion</h2>
        <input type="text" id="name" name="user_name" placeholder="Nom d'utilisateur"/>
        <input type="password" id="password" name="user_password" placeholder="Mot de passe" />
        <Link to="/main" className="button">SE CONNECTER</Link>
    </div>
  );
}

export default Connexion;