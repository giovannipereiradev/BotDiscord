const Discord = require('discord.js');
const config = require('../../../config.json');


module.exports = {
  name: 'say',
  aliases: [' '],
  manutencao: false,
  adm: true,

  run: async (client, message, args) => {

    const sayMessage = args.join(' ');
    message.delete().catch(O_o => { });
    message.channel.send(sayMessage);

  }
}