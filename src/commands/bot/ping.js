const Discord = require('discord.js');
const config = require('../../../config.json')


module.exports = {
  name: 'ping',
  aliases: [' '],
  manutencao: false,
  adm: false,

  run: async (client, message, args) => {

    let embed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.member.user.displayAvatarURL({ dynamic: true }))
      .setColor(config.cor)
      .setThumbnail('https://media4.giphy.com/media/fvA1ieS8rEV8Y/200.gif')
      .setDescription(`**Latencia** \n ${Date.now() - message.createdTimestamp}ms. \n**API** \n ${Math.round(client.ws.ping)}ms`)
      .setFooter("Pong!", client.user.displayAvatarURL())

    message.channel.send(embed);
  }
}