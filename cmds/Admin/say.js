const Discord = require("discord.js");
const config = require('../../config.json')

module.exports.run = async (client, msg, args) => {
    const sentence = args.toString();
    const outputChannel = client.channels.get(msg.channels)
    outputChannel.send(sentence)
    console.log(msg.author.name + ' printed: ' + sentence)
    msg.delete();
}

module.exports.help = {
    name: 'say',
    role: config.modrole,
    usage: '`message`',
    desc: `prints a message to the current channel`,
    example: 'Hello World!'
}