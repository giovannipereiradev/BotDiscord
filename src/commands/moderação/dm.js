const Discord = require('discord.js');
const config = require('../../../config.json');


module.exports = {
    name: 'dm',
    aliases: ['direct'],
    manutencao: false,
    adm: true,

    run: async (client, message, args) => {

        message.channel.send(`Mencione o membro para quem eu devo enviar.`).then(m => {
            let ck = message.channel.createMessageCollector(x => x.author.id === message.author.id, { max: 1 })
                .on('collect', c => {
                    membro = c.mentions.users.first()
                    if (!membro) {
                        message.reply(`Mencione um membro!`)
                    } else {
                        message.channel.send(`Qual a mensagem?`).then(m2 => {
                            let cp = message.channel.createMessageCollector(x => x.author.id === message.author.id, { max: 1 })
                                .on('collect', c => {
                                    mensagem = c.content

                                    message.channel.send(`Deseja que a mensagem seja em uma embed?\n**Com** - Envio em EMBED\n**Sem** - Envio sem EMBED`).then(m3 => {
                                        let cd = message.channel.createMessageCollector(x => x.author.id === message.author.id, { max: 1 })
                                            .on('collect', c => {
                                                result = c.content

                                                if (result === 'Com') {
                                                    let embedi = new Discord.MessageEmbed()

                                                        .setDescription(`${mensagem}`)
                                                        .setFooter(`Não responda essa mensagem!`)
                                                        .setColor(`${config.cor}`)

                                                    membro.send(embedi)
                                                    message.reply(`EMBED enviada na **DM** do ${membro} com sucesso!`)
                                                }

                                                if (result === 'Sem') {
                                                    membro.send(`${mensagem}\n\n Não responda essa mensagem!`)
                                                    message.reply(`Mensagem enviada na **DM** do ${membro} com sucesso!`)
                                                }
                                            })
                                    })
                                })
                        })
                    }
                })
        })
    }
}