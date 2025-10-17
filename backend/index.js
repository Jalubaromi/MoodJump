const express = require('express');
const cors = require('cors');
const pool = require('./config/db'); // Importe le pool de connexion
const app = express();
const port = 3001;

// Middlewares
app.use(cors()); // Active CORS pour toutes les routes
app.use(express.json()); // Permet à Express de comprendre le JSON dans les requêtes

// --- Routes API ---

// Route pour récupérer tous les utilisateurs
app.get('/api/users', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT id, pseudo, mail, avatar, created_at FROM users');
    res.json(rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


app.get('/', (req, res) => {
  res.send({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(`Backend server listening on http://localhost:${port}`);
});
