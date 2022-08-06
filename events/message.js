const Discord = require("discord.js");
const config = require("../config.json");

module.exports = async (client, message) => {

    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    if (message.content == "<@!702518717937877096>") {
        message.react("👌");
        return client.commands.get("help").run(client, message, "rien");
    } 

    if (!message.content.startsWith(config.prefix)) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift();

    const cmd = client.commands.get(command);

    if (!cmd) return;

    cmd.run(client, message, args);

};