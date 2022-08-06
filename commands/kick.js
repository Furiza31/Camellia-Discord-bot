const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return createEmbed(message, "You don't have permission !");
    if (message.mentions.users.size === 0) return createEmbed(message, "You must mention a user !");

    let kick = message.guild.member(message.mentions.users.first());

    if (!kick) return createEmbed(message, "I didn't find the user.");
    if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return createEmbed(message, "I don't have permissions.");

    kick.kick().then(member => {
        createEmbed(message, member.user.tag + " was kick ! By " + message.author.tag);
    });
};



module.exports.help = {
    name : "kick",
    desc : "You can ban people from this discord server."
};




async function createEmbed (message, write) {
    message.channel.send({
        embed : {
            color : 0x8A2BE2,
            title : write,
            footer : {
                text : "Kick command"
            }
        }
    })
}