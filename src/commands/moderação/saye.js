const Discord = require('discord.js');
const config = require('../../../config.json');


module.exports = {
  name: 'saye',
  aliases: [' '],
  manutencao: false,
  adm: true,

  run: async (client, message, args) => {

    const sayMessage = args.join(' ');

    message.delete().catch(O_o => { });

    const embed = new Discord.MessageEmbed()
      .setColor(`${config.cor}`)
      .setDescription(sayMessage)
      
    message.channel.send(embed);


  }
}