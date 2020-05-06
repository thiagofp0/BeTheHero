const connection = require('../../database/connection');
const socket = require('../../websocket');

module.exports = {
    async liveReloadingStore(data){
        
        const ong = await connection('ongs').where({id: data.ong_id}).select('name', 'email', 'whatsapp', 'city', "UF");
        const ongName = ong[0].name;
        const ongEmail = ong[0].email;
        const ongWhatsapp = ong[0].whatsapp;
        const ongCity = ong[0].city;
        const ongUf = ong[0].UF;

        const incident = {
            name: ongName,
            title: [data.title],
            description: [data.description],
            value: [data.value],
            ong_id: [data.ong_id],
            email: ongEmail,
            whatsapp: ongWhatsapp,
            city: ongCity,
            UF: ongUf
        };

        const recipients =  socket.findConnections();
        socket.sendMessage(recipients, 'new-incident', incident);
    
    },
}
