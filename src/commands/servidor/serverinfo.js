const Discord = require('discord.js');
const config = require('../../../config.json');


module.exports = {
  name: 'serverinfo',
  aliases: ['si'],
  manutencao: false,
  adm: false,

  run: async (client, message, args) => {

    const icon = message.guild.iconURL()

    let serverembed = new Discord.MessageEmbed()
      .setColor(`${config.cor}`)
      .setTitle(message.guild.name + ` Server Status`)
      .setThumbnail(icon)
      .addField(":gift: Nome", message.guild.name,)
      .addField(":id:  ID", message.guild.id,)
      .addField(`:pencil:  Dono do Server `, `<@${message.guild.ownerID}>`, true)
      .addField(`:pencil:  ID do Dono`, message.guild.ownerID, true)
      .addField(':date: Server Criado em', message.guild.createdAt, true)
      .addField(':man: Membros', `${message.guild.members.cache.filter(member => member.user.bot).size} Bots | ${(message.guild.memberCount) - (message.guild.members.cache.filter(member => member.user.bot).size)} Humanos | ${message.guild.memberCount} Total de Membros | ${Math.round((message.guild.members.cache.filter(member => member.user.bot).size / message.guild.memberCount) * 100)}% Bots | ${Math.round((((message.guild.memberCount) - (message.guild.members.cache.filter(member => member.user.bot).size)) / message.guild.memberCount) * 100)}% Humanos`, true)
      .addField(':wrench:  Canais', `${message.guild.channels.cache.filter(chan => chan.type === 'voice').size} Chats de Voz | ${message.guild.channels.cache.filter(chan => chan.type === 'text').size} Canais de Texto | ${message.guild.channels.cache.filter(chan => chan.type === 'category').size} Categorias | ${Math.round((message.guild.channels.cache.filter(chan => chan.type === 'voice').size / message.guild.channels.cache.size) * 100)}% Chats de Voz | ${Math.round((message.guild.channels.cache.filter(chan => chan.type === 'text').size / message.guild.channels.cache.size) * 100)}% Canais de Texto | ${Math.round((message.guild.channels.cache.filter(chan => chan.type === 'category').size / message.guild.channels.cache.size) * 100)}% Categorias`, true)
      .addField(":inbox_tray:  Você Entrou", message.member.joinedAt)
      .setFooter(` • Autor ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))

    message.channel.send(serverembed);



  }
}