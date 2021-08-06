const Discord = require('discord.js');
const config = require('../../../config.json');


module.exports = {
  name: 'avatar',
  aliases: [' '],
  manutencao: false,
  adm: false,

  run: async (client, message, args) => {

    let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

    let avatar = user.avatarURL({ dynamic: true, format: "png", size: 1024 });

    let embed = new Discord.MessageEmbed()
      .setColor(`${config.cor}`)
      .addField('Para baixar a imagem:', `[Clique Aqui!](${user.displayAvatarURL()})`, true)
      .setImage(avatar)
      .setFooter(`• Autor: ${message.author.tag}`, message.author.displayAvatarURL({ format: "png" }));
    await message.channel.send(embed);
  }

}