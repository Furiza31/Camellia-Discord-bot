const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

    if (!args[0]) return createEmbed(message, "To create an embed you must specify your message after the command.");

    message.delete();

    message.channel.send({
        embed : {
            color : 0x8A2BE2,
            title : "***@" + message.author.tag +"*** say : "+ args.join(" "),
            footer : {
                text : "Embed command"
            }
        }
    })
    
}


module.exports.help = {
    name : "embed",
    desc : "I send for you a cool message"
}

async function createEmbed (message, write) {
    message.channel.send({
        embed : {
            color : 0x8A2BE2,
            title : write,
            footer : {
                text : "Embed command"
            }
        }
    })
}