﻿//modules
const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch')
const config = require("./config.json")
const v = require('./verify.js')

module.exports = {
    client: client
}

//vars
var prefix = '!';
var output = config.output;
var Promotelog = config.Promotelog;
var Banlog = config.Banlog;
var dad = '498540074049208330';
var veriRole = '431951529847816202';

//init
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log('Current prefix is: ' + prefix)
    console.log('Current output chanel is:' + output)
    client.user.setActivity("with my dad!");
});

//commands
client.on('message', msg => {
    let command = msg.content.toLowerCase();
    if (command === prefix + 'ping') {
        msg.reply('!Pong!');
    } else if (command.startsWith(prefix + 'promote')) {
        if (msg.mentions.members.first() !== undefined) {
            const person = msg.mentions.members.first();
            let role = msg.guild.roles.get("431950915419897866");
            if (!person.roles.has(role)) {
                person.addRole(role)
                msg.react('✅')
            } else {
                msg.reply(' That person already is a scout!')
            }
        } else {
            msg.reply(' You need to mention someone!')
        }
    } else if (command.startsWith(prefix + 'demote')) {
        if (msg.mentions.members.first() !== undefined) {
            let role = msg.guild.roles.get("431950915419897866");
            const person = msg.mentions.members.first();
            if (person.roles.has('')) {
                person.removeRole(role)
                msg.react('✅')
            } else {
                msg.reply(' That person isnt a scout!')
            }
        } else {
            msg.reply(' You need to mention someone!')
        }
    } else if (command === 'verify') {
        if (!msg.member.roles.has(veriRole)) {
            v.verify(msg.author, msg.guild, msg.member)
        }
        msg.delete()
    }
});

//Functions

//Login
client.login(config.token);