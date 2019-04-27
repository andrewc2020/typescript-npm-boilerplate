// lib/app.ts
// tslint:disable-next-line:semicolon

import express from 'express';

// Create a new express application instance
const app: express.Application = express();

app.get('/', (req , res) => {
  // tslint:disable-next-line:semicolon
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
export default app;