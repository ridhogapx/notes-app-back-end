import hapi from '@hapi/hapi';
import routes from './routes.js';

const init = async() => {
  const server = hapi.server({
    port: 3000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes); 

  await server.start();

  console.log(`Server is running on port ${server.info.uri}`);
};

init();
