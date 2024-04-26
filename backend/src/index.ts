import express from 'express';
const app = express();
const port = 3001;

app.get('/api', (req, res) => {
  res.json({ message: "hello from the server" });
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

