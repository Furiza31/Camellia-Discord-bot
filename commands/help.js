const Discord = require("discord.js");
const fs = require("fs");
let allCommands = [];
let desc = [];
let fields = [];

module.exports.run = async (client, message, args) => {

    fs.readdir("./commands/", (error, f) => {
        if (error) console.log(error);
    
        let commands = f.filter((f) => f.split(".").pop() === "js");
        if (commands.length <= 0) return console.log("No commands find.");
    
        allCommands = [];
        desc = [];
        commands.forEach((f) => {
            let command = require("../commands/"+ f);
            allCommands.push(command.help.name);
            desc.push(command.help.desc)
        });
        
        fields = [];
        for (let i = 0; i < allCommands.length; i++) {
            if (message.guild.id != "272126056583004183") {
                if (allCommands[i] == "compote") { } else {
                    let yah = {
                        name : allCommands[i],
                        value : desc[i]
                    }
                    fields.push(yah)
                }
            } else {
                let yah = {
                    name : allCommands[i],
                    value : desc[i]
                }
                fields.push(yah)
            }
        }

        message.channel.send({
                embed : {
                    color : 0x8A2BE2,
                    title : 'Commands | prefix : &',
                    fields : fields,
                    footer : {
                        text : "All commands"
                    }
                }
            })
    });
};


module.exports.help = {
    name : "help",
    desc : "Allows you to see all possible commands."
};