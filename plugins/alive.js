const CBot = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require("got");
const fs = require('fs');
const Config = require('../config');

if (Config.WORKTYPE == 'private') {
CBot.addCommand({pattern: 'alive', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

	await message.client.sendMessage(message.jid, fs.readFileSync('./media/cyberbot.mp3'), MessageType.audio, {mimetype: 'audio/mp4', ptt:true});
}));
}

else if (Config.WORKTYPE == 'public') {
CBot.addCommand({pattern: 'alive', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
	
    await message.client.sendMessage(message.jid, fs.readFileSync('./media/cyberbot.mp3'), MessageType.audio, {mimetype: 'audio/mp4', ptt:true}); 
}));

}
