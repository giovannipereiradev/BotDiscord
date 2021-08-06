const Discord = require("discord.js"); //PADRÃO

const config = require("../../../config.json"); //LOCALIZA O PREFIXO
var prefix = config.prefix;

module.exports = async (client, message) => {

    //FALA O PREFIXO QUANDO MARCADO
    if (message.content === `<@${client.user.id}>`) {
        let embed = new Discord.MessageEmbed()
            .setColor(config.cor)
            .setDescription(`Meu prefixo é \`\`${config.prefix}\`\`.`)
        message.channel.send(embed);
    }
    if (message.content === `<@!${client.user.id}>`) {
        let embed = new Discord.MessageEmbed()
            .setColor(config.cor)
            .setDescription(`Meu prefixo é \`\`${config.prefix}\`\`.`)
        message.channel.send(embed);
    }

    //RETORNA CASO NÃO TENHA PREFIX
    if (!message.content.toLowerCase().startsWith(prefix)) return;

    //RETORNA CASO SEJA OUTRO BOT
    if (message.author.bot) return;

    //RETORNA CASO NÃO SEJA UM SERVER
    if (!message.guild) return;

    //DECLARANDO ARGS
    var args = message.content
        .slice(prefix.length).trim().split(/ +/g);

    //DECLARANDO COMANDO
    var cmd = args.shift().toLowerCase();

    //RETORNA SE FOR SÓ O PREFIXO
    if (cmd.length === 0) return;

    //VERIFICA SE O COMANDO EXISTE
    var command = client.commands.get(cmd);

    //EM CASO NEGATIVO PROCURA UMA ALIASES
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    //DESATIVA BOT DURANTE AS MANUTENÇÕES
    if (config.manutençãoGeral) {
        if (message.author.id != config.devId) {
            let embedReturn = new Discord.MessageEmbed()
                .setColor(config.cor)
                .setThumbnail(config.logo)
                .setTitle('Bot em manutenção!')
                .setDescription('Olá! Eu estou em manutenção...\nMeus comandos estão temporariamente fora do ar!\nMas fique tranquilo! Jájá estou de volta!')
                .setFooter('Tentamos sempre ser o mais breve possível em nossas manutenções!', config.logo)
            await message.channel.send(embedReturn)
                .then(msg => msg.delete({ timeout: 15000 }))
            await message.channel.bulkDelete(1, true)
            return;
        }
    }

    //DESATIVA COMANDOS EXPECÍFICOS PRA MANUTENÇÕES
    if (command.manutencao) {
        if (message.author.id != config.devId) {
            let embedReturn = new Discord.MessageEmbed()
                .setColor(config.cor)
                .setThumbnail(config.logo)
                .setTitle('Comando desativado!')
                .setDescription('Olá! Esse comando está em manutenão...\nMas meus outros comandos estão funcioanndo normalmente!\nMas fique tranquilo! Jájá este também ficará disponível!')
                .setFooter('Tentamos sempre ser o mais breve possível em nossas manutenções!', config.logo)
            await message.channel.send(embedReturn)
                .then(msg => msg.delete({ timeout: 15000 }))
            await message.channel.bulkDelete(1, true)
            return;
        }
    }

    //RETORNAS COMANDOS DE ADMS
    if (command.adm) {
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            let embedAdm = new Discord.MessageEmbed()
                .setColor(config.cor)
                .setThumbnail(config.logo)
                .setTitle('Você é muito fraco!')
                .setDescription('Você não tem permissões suficientes para executar esse comando!')
                .setFooter('Apenas administradores podem executar este comando!', config.logo)
            await message.channel.send(embedAdm)
                .then(msg => msg.delete({ timeout: 15000 }))
            await message.channel.bulkDelete(1, true)
            return;
        }
    }
    try {
        if (command) {
            command.run(client, message, args);
        }
        //Final .try { }
    } catch (e) {
        //EMBED DE ERRO
        let errorcmd = new Discord.MessageEmbed()
            .setColor(config.cor)
            .setDescription(`Ocorreu um erro ao executar o comando \`${command.name}\`!`)
        message.channel.send(errorcmd);
        //final .catch(e) { }
    }
}

