import express from "express";

const app = express();

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('Node.js from Docker!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});
