import socketio from 'socket.io-client';

const socket = socketio('http://10.0.0.115:3333', {
    autoConnect: false
}); //Concectou

function connect(){
    socket.connect();
}

function disconnect(){
    if(socket.connected){
        socket.disconnect();
    }
}

function subscribeToNewIncidents(subscribeFunction){
    socket.on('new-incident', subscribeFunction);
}

export {
    connect,
    disconnect,
    subscribeToNewIncidents
}