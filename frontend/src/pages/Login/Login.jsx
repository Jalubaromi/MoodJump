import { useState } from 'react';
import './Login.css';
import robotImg from '../../assets/robot.png';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);
    // Pour l'instant, on ne fait rien d'autre
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <h2>Connexion</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Se connecter</button>
          <a href="#" className="forgot-password">Mot de passe oublié ?</a>
        </form>
      </div>
      <div className="login-image">
        <img src={robotImg} alt="Robot" />
      </div>
    </div>
  );
}
