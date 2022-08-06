const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (args.length == 0 && message.mentions.users.size === 0) return createEmbedImage (message, message.author.avatarURL);

    let avatarImage = message.guild.member(message.mentions.users.first());

    if (!avatarImage) return createEmbed(message, "The user "+args[0]+" could not be found.");

    createEmbedImage(message, avatarImage.user.avatarURL);
};



module.exports.help = {
    name : "avatar",
    desc : "Display the avatar of the person specify."
};




async function createEmbedImage (message, imageAvatar) {
    message.channel.send({
        embed : {
            color : 0x8A2BE2,
            image : { url : imageAvatar},
            footer : {
                text : "Avatar command"
            }
        }
    })
}


async function createEmbed (message, write) {
    message.channel.send({
        embed : {
            color : 0x8A2BE2,
            title : write,
            footer : {
                text : "Avatar command"
            }
        }
    })
}