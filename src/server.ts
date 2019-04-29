
import express from 'express';

const app: express.Application = express();

app.get('/', (request, response) => {
  response.send('Hello World!');
});

console.log('listening on port 5000');

app.listen(5000);

export default app;
