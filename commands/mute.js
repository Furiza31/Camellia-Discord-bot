const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner) return createEmbed(message, "You don't have the permission to use this command");

    if (!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return createEmbed(message, "I don't have permission to add roles !")


    let mutee = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!mutee) return createEmbed(message, "You must mention a user !");

    let reaseon = args.slice(1).join(" ");
    if (!args[1]) reaseon = "No reason given";

    let muteRole = message.guild.roles.find(r => r.name === "Muted")
    if (!muteRole) {
        try {
            muteRole = await message.guild.createRole({
                name : "Muted",
                color : "#514f48",
                permissions : []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muteRole, {
                    SEND_MESSAGES : false,
                    ADD_REACTIONS : false,
                    SEND_TTS_MESSAGES : false,
                    ATTACH_FILES : false,
                    SPEAK : false
                })
            });
        } catch (e) {
            console.log(e.stack);
        }
    }

    mutee.addRole(muteRole.id).then (() =>{
        message.delete()
        mutee.send({
            embed : {
                color : 0x8A2BE2,
                title : "Hi, you have been muted in **" + message.guild.name + "** \n For : " + reaseon,
                footer : {
                    text : message.author.username
                }
            }
        })
        createEmbed(message, mutee.user.username + " was sucessfully muted.")
    })

};



module.exports.help = {
    name : "mute",
    desc : "You can mute someone, they will no longer be able to write during a temp time."
};




async function createEmbed (message, write) {
    message.channel.send({
        embed : {
            color : 0x8A2BE2,
            title : write,
            footer : {
                text : "Mute command"
            }
        }
    })
}