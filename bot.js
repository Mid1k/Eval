const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
        console.log('Запустился бот ' + bot.user.tag);
    })

    bot.on("message", async message => {
      if (message.content.startsWith("<eval") || message.content.startsWith("<e")) {
          if(!message.member.hasPermission(8)) return
        let args = message.content.split(" ");
        args = args.slice(1);
        try {
          message.channel.send(require('util').inspect(eval(args.join(" ")), {depth: 1, colorize: true}), {code: 'js'})
        } catch(e) {
          message.channel.send(e, {code: 'js'})
          message.react('🆗')
        }
      }
    });

bot.login('token');