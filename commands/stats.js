const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (client, message, args) => {

    let gameStatus = "Has no Status";
    let game;
    const member = message.mentions.members.first() || message.member;
    if (member.user.presence.game) {
        game = member.user.presence.game.name;
        gameStatus = "Game : "
        if (member.user.presence.game.name == "Custom Status") {
            gameStatus = "Custom Status : "
            if (member.user.presence.game.emoji) {
                game = member.user.presence.game.emoji.name + member.user.presence.game.state
                if (member.user.presence.game.state == null) {
                    game = member.user.presence.game.emoji.name
                }
            } else {
                game = member.user.presence.game.state
            }
        }
    }

    message.channel.send({
        embed : {
            color : 0x8A2BE2,
            title : "User statistics of **" + member.user.tag + "**",
            thumbnail : {
                url : member.user.displayAvatarURL
            },
            fields : [
                {
                name : "ID :",
                value : member.id
                },
                {
                    name : "Created at :",
                    value : moment.utc(member.user.createdAt).format("LLL")
                },
                {
                    name : gameStatus,
                    value : `${member.user.presence.game ? `${game}` : "Has no status"}`
                },
                {
                    name : "Joined on : ",
                    value : moment.utc(member.joinedAt).format("LLL")
                },
                {
                    name : "Status",
                    value : member.user.presence.status
                }
            ],
            footer : {
                text : "User information of " + member.user.username
            }
        }
    })

};


module.exports.help = {
    name : "stats",
    desc : "Allows you to know a lot of information of users."
}