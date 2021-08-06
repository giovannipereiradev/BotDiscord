const Discord = require('discord.js');
const config = require('../../../config.json');


module.exports = {
    name: 'clear',
    aliases: ['limpar'],
    manutencao: false,
    adm: true,

    run: async (client, message, args) => {

        if (!args[0]) {
            return message.channel.send(`Por favor, insira um valor de 1 a 100`)
        }

        let deleteAmount;

        if (parseInt(args[0]) > 100) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        await message.channel.bulkDelete(deleteAmount, true);

        const embed = new Discord.MessageEmbed()
            .setTitle(`${message.author.username}`)
            .setThumbnail(message.author.displayAvatarURL())
            .setDescription(`⛔ **|** Excluído com sucesso ${deleteAmount}`)
            .setFooter(message.author.username, message.author.displayAvatarURL())
            .setColor(`${config.cor}`)
        await message.channel.send(embed)
            .then(msg => msg.delete({ timeout: 5000 }))


    }
}