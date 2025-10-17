import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

// Exemple de route
app.use("/api/users", userRoutes);

export default app;
