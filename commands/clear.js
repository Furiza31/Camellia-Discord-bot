const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return createEmbed(message, "You don't have permissions.");
    if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return createEmbed(message, "I don't have the permissions.");
    if (!args[0]) return createEmbed(message, "You must specify a number of messages to delete.");
    if (isNaN(args[0])) return createEmbed(message, "Please specify a number !")


    message.channel.bulkDelete(args[0] + 1).then( ok => {
        if (args[0] > 1) {
            createEmbed(message, args[0] + " messages were deleted !")
        } else {
            createEmbed(message, args[0] + " message were deleted !")
        }
    })
}



module.exports.help = {
    name : "clear",
    desc : "You can clear the chat."
}



async function createEmbed (message, write) {
    message.channel.send({
        embed : {
            color : 0x8A2BE2,
            title : write,
            footer : {
                text : "Clear command"
            }
        }
    })
}