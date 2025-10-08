const express = require('express');
const app = express();
const port = 3001; // Port pour le backend, différent de celui de React

app.get('/', (req, res) => {
  res.send({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(`Backend server listening on http://localhost:${port}`);
});
