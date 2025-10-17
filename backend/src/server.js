import app from './app.js';

const PORT = process.env.PORT || 3001;

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
