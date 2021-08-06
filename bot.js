const Discord = require("discord.js"); //PADRÃO

const client = new Discord.Client()

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

const config = require("./config.json"); //LOCALIZA O PREFIXO
var prefix = config.prefix;

const { readdirSync } = require('fs');//ORGANIZAÇÃO PASTAS

//PASTA DE COMANDOS
readdirSync('./src/commands/').forEach(pasta => {
    if (pasta === '.DS_Store') return console.log()
    cmds = readdirSync(`./src/commands/${pasta}/`).filter(file => file.endsWith('.js'));
    for (var file of cmds) {
        pull = require(`./src/commands/${pasta}/${file}`);
        if (pull.name) {
            client.commands.set(pull.name, pull);
        } else {
            continue
        } if (pull.aliases && Array.isArray(pull.aliases))
            pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));
    }
})

//PASTA DE EVENTOS
const load = file => {
    if (!file.endsWith('.js')) return

    const event = require(`./src/client/events/${file}`)
    const eventName = file.split(".")[0]

    client.on(eventName, event.bind(null, client))
}
readdirSync(`./src/client/events/`).forEach(x => load(x))

client.login(config.token); //LIGANDO O BOT