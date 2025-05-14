import serverless from 'serverless-http';
import express from 'express';

const app = express();

app.get('/recipes', (req, res) => {
  res.json({ recipes: ['Pizza', 'Pasta'] });
});

export const handler = serverless(app);
