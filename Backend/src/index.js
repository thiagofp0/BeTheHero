const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const { setupWebSocket } = require('./websocket');

const http = require('http');

const app = express();
const server = http.Server(app);

setupWebSocket(server);

//const connections = [];

/* io.on('connection', socket => {
  console.log('Usuário conectado', socket.id);
  connections.push(socket.id);
}); */

app.use(cors());
app.use(express.json());
app.use(routes);

/* 
    Rota / Recurso
*/

/**
 * Métodos HTTP:
 * GET: Busca informação do backend.
 * POST: Criar uma informação no backend.
 * PUT: Alterar uma inoformação do backend.
 * DELETE: Deletar uma informação do backend.  
 * */

 /**
  * Tipos de parâmetro:
  * Query Params: Parâmetros enviados na rota após "?" (Filtros, paginação)
  * Route Params: Parâmetros utilizados para identificar recursos (rota/:id)
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

server.listen(3333);