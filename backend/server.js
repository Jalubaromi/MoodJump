import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());



//A changer en variable d'env
const PORT = 5000;

app.get("/api/hello", (req, res) => {
  res.json({ msg: "Server check backend OK", });
});

app.use((req, res) => {
  res.status(404).json({ error:"Route not found" });
});

app.listen(PORT, () => console.log("Server started on port 5000"));