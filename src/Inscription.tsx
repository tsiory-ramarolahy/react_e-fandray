import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

function Inscription() {
  return (
    <div className="inscription">
        <h2>Inscription</h2>
        <input type="text" id="name" name="user_name" placeholder="Nom d'utilisateur"/>
        <input type="password" id="password" name="user_password" placeholder="Mot de passe" />
        <input type="email" name="user_mail" id="mail" placeholder="E-mail" />
        <Link to="/main" className="button">S'INSCRIRE</Link>
    </div>
  );
}

export default Inscription;