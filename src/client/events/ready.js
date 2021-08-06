const Discord = require("discord.js"); //PADRÃO
const config = require('../../../config.json')

const { red, green, blue, yellow, cyan, greenBright, redBright, grey, yellowBright, cyanBright, black, blueBright, magenta } = require('chalk');

module.exports = async (client, message) => {


    let activities = [
        `COLEQUE UMA FRASE PARA O STATUS DO BOT AQUI`,
        `COLEQUE UMA FRASE PARA O STATUS DO BOT AQUI`,
        `Meu prefixo é ${config.prefix}.`,
        `Desenvolvido por: ${config.dev}.`
    ],
        i = 0;
    setInterval(
        () =>
            client.user.setActivity(`${activities[i++ % activities.length]}`, {
                type: 'PLAYING'
            }),
        1000 * 10
    );

    client.user.setStatus('online').catch(console.error);

    const introConsole = String.raw`
                                                   
             ____     ___    _____        ___    _   _   _       ___   _   _   _____ 
            | __ )   / _ \  |_   _|      / _ \  | \ | | | |     |_ _| | \ | | | ____|
            |  _ \  | | | |   | |       | | | | |  \| | | |      | |  |  \| | |  _|  
            | |_) | | |_| |   | |       | |_| | | |\  | | |___   | |  | |\  | | |___ 
            |____/   \___/    |_|        \___/  |_| \_| |_____| |___| |_| \_| |_____|
      
                                                                                    
                                                                           
    `;


    console.log('═══════════════════════════════════════════════════════════════════════════════════════════');
    console.log(red(introConsole));
    console.log(`                                     Criador: giovanni_#6723`)
    console.log('')
    console.log('')
    console.log('═══════════════════════════════════════════════════════════════════════════════════════════');
    console.log('')
    console.log(red(`                                 Nome do Bot: ${client.user.username}#${client.user.discriminator}`));
    console.log(red(`                                 Prefixo: ${config.prefix}`));
    console.log('')
    console.log('═══════════════════════════════════════════════════════════════════════════════════════════');
    console.log('');

    
    //TROCA O NOME DO BOT CASO TENHA UMA MANUTENCÃO GERAL
    if(config.manutençãoGeral) {
        client.guilds.cache.get(`${config.serverId}`).me.setNickname('MANUTENÇÃO')
    }

    if(config.manutençãoGeral == false) {
        client.guilds.cache.get(`${config.serverId}`).me.setNickname(config.nomeDoBot)
    }
}
