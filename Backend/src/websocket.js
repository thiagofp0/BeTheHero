const socketio = require('socket.io');

let io;
const connections = [];

module.exports ={
    setupWebSocket(server){
        io = socketio(server);
    
        io.on('connection', (socket)=>{
            connections.push(socket.id);
            //console.log(socket.id, "está conectado!");
        });
    },

    findConnections(){
        return connections;
    },

    sendMessage(to, message, data){
        to.forEach(connection => {
            io.to(connection).emit(message, data);
        });
    }
}