import express from "express";
import dotenv from "dotenv";

import connectDB from "./src/config/db.js";
import authRoutes from "./src/routes/auth.route.js"

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});


app.use("/api/auth",authRoutes);

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`);
  });
});
