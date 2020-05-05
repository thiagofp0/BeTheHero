const connection = require('../../database/connection');
const socket = require('../../websocket');

module.exports = {
    async liveReloadingStore(data){
        
        const ong = await connection('ongs').where({id: data.ong_id}).select('name');
        const ongName = ong[0].name;

        const incident = {
            name: ongName,
            title: [data.title],
            description: [data.description],
            value: [data.value],
            ong_id: [data.ong_id]
        };

        const recipients =  socket.findConnections();
        socket.sendMessage(recipients, 'new-incident', incident);
    
    },
}
