const Discord = require('discord.js');
const config = require('../../../config.json');

module.exports = {
  name: 'botinfo',
  aliases: ['bi'],
  manutencao: false,
  adm: false,

  run: async (client, message, args) => {

    let dias = 0;
    let week = 0;

    let uptime = ``;
    let totalSegundos = (client.uptime / 1000);
    let horas = Math.floor(totalSegundos / 3600);
    totalSegundos %= 3600;
    let minutos = Math.floor(totalSegundos / 60);
    let segundos = Math.floor(totalSegundos % 60);

    if (horas > 23) {
      dias = dias + 1;
      horas = 0;
    }

    if (dias == 7) {
      dias = 0;
      week = week + 1;
    }

    if (week > 0) {
      uptime += `${week} week, `;
    }

    if (minutos > 60) {
      minutos = 0;
    }

    uptime += `${horas}h ${minutos}m ${segundos}s`;

    // criando umas variaveis que podem ser clicadas e redirecionadas a um site
    var linguagem = ('[Node.js](https://nodejs.org/en/)')
    var livraria = ('[Discord.js](https://discord.js.org/#/)')
    var site = ('[GitHub Dev!](https://github.com/GiPeTa)')

    let embed = new Discord.MessageEmbed()

      .setTitle(`Bot Info!`)
      .setThumbnail(client.user.avatarURL)
      .addField(`**Minha linguaguem:**`, `${linguagem}`, true)
      .addField(`**Minha livraria:**`, `${livraria}`, true)
      .addField(`**GitHub:**`, `${site}`, true)
      .addField(`**Latência:**`, `${Math.round(client.ws.ping)} ms`, true)
      .addField(`**Estou acordado há:**`, `${uptime}`, true)
      .addField(`**Servidores:**`, `${client.guilds.cache.size}`, true)
      .addField(`**Canais:**`, `${client.channels.cache.size}`, true)
      .addField(`**Usuarios:**`, `${client.users.cache.size}`, true)
      .addField(`**Desenvolvedor:**`, `giovanni_#6723`, true)
      .setColor(`${config.cor}`)

    message.channel.send(embed)

  }
}