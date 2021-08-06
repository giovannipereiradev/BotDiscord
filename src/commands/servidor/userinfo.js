const Discord = require('discord.js');
const config = require('../../../config.json');
const moment = require('moment')
moment.locale('pt-BR')


module.exports = {
    name: 'user-info',
    aliases: ['userinfo'],
    manutencao: false,
    adm: false,

    run: async (client, message, args) => {

        const status = {
            online: "<:online:854863888649945108> Online",
            idle: "<:ausente:854864419220881448> Ausente",
            dnd: "<:offline:854864446644158484> Não Perturbe",
            offline: "<:off:854863853606404108> Offline"
        };

        const member = message.mentions.members.first() || message.member;

        const embed = new Discord.MessageEmbed()
            .setTitle(`Informações do membro!`)
            .setColor(`${config.cor}`)
            .setThumbnail(member.user.avatarURL())
            .addField('Nick', `${member}`, true)
            .addField('HashTag', `#${member.user.discriminator}`, true)
            .addField('Status', `${status[member.user.presence.status]}`, true)
            .addField('**Avatar:**', `[Clique Aqui!](${member.user.displayAvatarURL()})`, true)
            .addField('**Conta criada em:**', `${moment(member.user.createdAt).format("LLL")}`, true)
            .addField('**Entrou em:**', `${moment(member.joinedAt).format('LLL')}`, true)
            .addField('**Cargos:**', `${member.roles.cache.map(role => role.toString()).join(" ,")}`, true)

        message.channel.send(embed)

    }
}