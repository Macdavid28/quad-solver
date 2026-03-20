import express from "express";
import { solve } from "./src/solver.js";

const app = express();
app.use(express.json());

app.post("/solve", (req, res) => {
  const { a, b, c } = req.body || {};

  if (a == null || b == null || c == null) {
    return res
      .status(400)
      .json({ error: "Provide a, b, and c in the request body." });
  }

  try {
    res.json(solve(a, b, c));
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`quadratic-solver running on port ${PORT}`));
