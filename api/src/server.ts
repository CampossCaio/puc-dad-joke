import { app } from './app';
import { env } from './env';

const port = env.PORT;
const host = 'RENDER' in process.env ? '0.0.0.0' : 'localhost';

app
  .listen({
    port,
    host,
  })
  .then(() => {
    console.log(`Server listening on ${port}`);
  });
