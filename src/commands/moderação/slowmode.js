const Discord = require('discord.js');
const config = require('../../../config.json');


module.exports = {
  name: 'slowmode',
  aliases: ['delay'],
  manutencao: false,
  adm: true,

  run: async (client, message, args) => {

    let user = args[0];
    let text = args.slice(1).join(" ") || undefined;
    let reason = args[0];
    if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("**Eu não tenho permissão para executar esse comando**")
    if (reason > 21600) return message.channel.send("**Insira um número de `0 a 21600` para setar o modo lento**")
    if (!args[0]) {
      return message.channel.send('**Insira um número de `0 a 21600` para setar o modo lento**')
    }
    if (isNaN(args[0])) return message.channel.send("Isso não é um número.")
    message.channel.setRateLimitPerUser(args[0])

    const embed = new Discord.MessageEmbed()
      .setTitle('SLOWMODE ATIVO!')
      .setDescription(`**Modo lento definido para \`${args[0]}\` segundos!**`)
      .addField('Definido Por:', `${message.author}`, true)
      .setTimestamp()
      .setColor(`${config.cor}`)

    message.channel.send(embed);


  }
}