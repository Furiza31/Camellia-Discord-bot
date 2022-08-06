const Discord = require("discord.js");

module.exports = async (client, member) => {
    
    member.send({
        embed : {
            color : 0x8A2BE2,
            title : "Hello, Welcome on " + member.guild.name + ".",
            footer : {
                text : "Welcome message"
            }
        }
    })


    if (!member.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return createEmbed(message, "I don't have permission to add roles !");

    if (member.user.id == "347879113433808898" || member.user.id == "272126265740230665" || member.user.id == "272379305420521472" || member.user.id == "272774046259740673" || member.user.id == "178429086295785472") {
        let AdminRole = member.guild.roles.find("name", "Admin")
        if (!AdminRole) {
                AdminRole = await member.guild.createRole({
                    name : "Admin",
                    color : "#ff0000",
                    permissions : []
                })
            }
        return member.addRole(AdminRole).catch(console.error);
    }








    let visitorRole = member.guild.roles.cache.find(role => role.name === "Visitor")
    if (!visitorRole) {
        visitorRole = await member.guild.createRole({
            name : "Vistitor",
            color : "#367bd6",
            permissions : []
        })
    }

    member.addRole(visitorRole).catch(console.error);

};


async function createEmbed (message, write) {
    message.channel.send({
        embed : {
            color : 0x8A2BE2,
            title : write,
            footer : {
                text : "New user"
            }
        }
    })
}