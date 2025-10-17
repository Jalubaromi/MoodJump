import { useState } from 'react';
import './Login.css';
import RobotContainer from '../../components/RobotContainer/RobotContainer';
import { loginUser } from '../../API/LoginAPI';
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // hook pour redirection

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const data = await loginUser(email, password);
      console.log('Login réussi :', data);

      // Stockage du token dans localStorage
      localStorage.setItem('token', data.token);

      // Redirection vers Flux
      navigate('/Flux');
    } catch (err) {
      setError('Email ou mot de passe incorrect');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <h2 className="login-title">Connexion</h2>

          <div className="form-box">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="password">Mot de passe</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit">Se connecter</button>
            <a href="#" className="forgot-password">Mot de passe oublié ?</a>
            {error && <p style={{ color: 'red', marginTop: '0.5rem' }}>{error}</p>}
          </div>
        </form>
      </div>

      <RobotContainer />
    </div>
  );
}
