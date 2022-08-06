const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    let start = Date.now();
    await message.channel.send({
        embed : {
            color : 0x8A2BE2,
            title : "Ping ?",
            footer : {
                text : "Clear command"
            }
        }
    }).then(async (m) => {
        await m.edit({
            embed : {
                color : 0x8A2BE2,
                title : "Latency is " + (Date.now() - start) + "ms. API Latency is " + Math.round(client.ping) +"ms.",
                footer : {
                    text : "Clear command"
                }
            }
        })
    })
}




module.exports.help = {
    name : "ping",
    desc : "Lets see the bot and server ping."
}

