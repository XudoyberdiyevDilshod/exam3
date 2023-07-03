import http from 'http';
import App from './server';
import router from './routes/router';

const app = new App(router);

const server = http.createServer(app.server);
server.listen(5000, () => console.log('server running 5000'));
