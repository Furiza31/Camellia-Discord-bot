const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");
const token = config.token;

client.login(token).then(console.log('Loggin in ...'));

client.commands = new Discord.Collection();

fs.readdir("./commands/", (error, f) => {
    if (error) console.log(error);

    console.log(f.length + " events in loading ...");

    let commands = f.filter((f) => f.split(".").pop() === "js");
    if (commands.length <= 0) return console.log("No commands find.");

    commands.forEach((f) => {
        let command = require("./commands/"+ f);
        console.log(f + ", command loaded !");

        client.commands.set(command.help.name, command);
    });
});


fs.readdir("./events/", (error, f) => {
    if (error) console.log(error);

    console.log(f.length + " events in loading ...");

    f.forEach((f) => {
        const events = require("./events/"+ f);
        const event = f.split(".")[0];
        console.log(f + ", event loaded !");

        client.on(event, events.bind(null, client))
    });
});
