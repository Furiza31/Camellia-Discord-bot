const Discord = require("discord.js");


module.exports.run = async (client, message, args) => {

    if (message.guild.id != "272126056583004183") return createEmbed(message, "You don't have access to this command");

    message.guild.members.forEach(member => {
        if (member.user.id == "272097747224625154" || member.user.id == "347879113433808898" || member.user.id == "272126265740230665" || member.user.id == "272379305420521472" ||  member.user.id == "272774046259740673") {
            member.send("VIEN SUR" + message.guild.name + "D'éPèCHE TOI !");
            member.send("VIEN SUR" + message.guild.name + "D'éPèCHE TOI !");
            member.send("VIEN SUR" + message.guild.name + "D'éPèCHE TOI !");
            member.send("VIEN SUR" + message.guild.name + "D'éPèCHE TOI !");
            member.send("VIEN SUR" + message.guild.name + "D'éPèCHE TOI !");
        }
    });

    createEmbed(message, "Messages was successfully sent")

}


module.exports.help = {
    name : "vien",
    desc : "Ping Axel Nathan Lucas et Guiui et Hugo"
}


async function createEmbed (message, write) {
    message.channel.send({
        embed : {
            color : 0x8A2BE2,
            title : write,
            footer : {
                text : "Avatar command"
            },
            fields : [
                {
                    name : "To : ",
                    value : "@ΞRYWEИ#2407 @MisterNathan#0323 @LAguepe#7754 @BraviX V#0270 @Furīza#6779"
                }
            ]
        }
    })
}