const Discord = require('discord.js');
const config = require('../../../config.json');


module.exports = {
    name: 'nuke',
    aliases: [' '],
    manutencao: false,
    adm: true,

    run: async (client, message, args) => {

        let reason = args.join(" ") || "Sem Razão"
        if (!message.channel.deletable) {
            return message.reply("Esse canal não pode ser nucleado!")
        }
        let newchannel = await message.channel.clone()
        await message.channel.delete()
        let embed = new Discord.MessageEmbed()
            .setTitle("Canal Destruido")
            .setDescription(reason)
            .setImage('https://media0.giphy.com/media/oe33xf3B50fsc/200.gif')
            .setColor(`${config.cor}`)
        await newchannel.send(embed)


    }
}