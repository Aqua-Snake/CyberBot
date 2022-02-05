/* Copyright (C) 2021 Aqua-Snake.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Cyber Bot - Aqua-Snake
*/ 

const CBot = require('../events');
const {WAConnection , MessageType} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const config = require('../config');
const util = require('util')
const parseInt = require('parse-int');
const chalk = require('chalk');
const conn = new WAConnection();

const Cyber = require('../cbot');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


const conf = require('../config');
let wk = conf.WORKTYPE == 'public' ? false : true

var SYSDTXT =  'Performence'

var VER = 'Version'
//  ....................................................................................................
      var plk_say = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]           // .
        const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };   // .   
        var plk_here = new Date().toLocaleDateString(get_localized_date)                                  // .  --------->>> CREDIT:-AFNAN PLK PINKYMWOL 
	  var afnplk = '*⏱ Time :' + plk_say + '*\n\n *📅 Date :' + plk_here + '*'                  // .
                                                                                                          // . 
    // ..................................................................................................  
var MSG = config.ALIVEMSG.replace('{time}', afnplk).replace('{qt}' )

  CBot.addCommand({pattern: 'alive', fromMe: wk, desc: Lang.ALIVE_DESC}, (async (message, match) => {
    
    var logo = await axios.get ('https://i.imgur.com/GerJ77X.mp4', {responseType: 'arraybuffer'})
    var PIC = Buffer.from(logo.data)

    const media = await message.client.prepareMessage(message.jid, PIC, MessageType.video, { thumbnail: Cyber.tm_b })

    var BUTTHANDLE = '';
    if (/\[(\W*)\]/.test(config.HANDLERS)) {
        BUTTHANDLE = config.HANDLERS.match(/\[(\W*)\]/)[1][0];
    } else {
        BUTTHANDLE = '.';
    }
        
    const buttons = [
        {buttonId: BUTTHANDLE + 'version', buttonText: {displayText: VER }, type: 1},
        {buttonId: BUTTHANDLE + 'status', buttonText: {displayText: SYSDTXT }, type: 1}
    ]
    const buttonMessage = {
        contentText: MSG,
        footerText: 'ᴄʏʙᴇʀ ʙᴏᴛ © ɢʟᴏʙᴀʟ ᴇᴅɪᴛᴏɴ',
        buttons: buttons,
        headerType: 5,
        videoMessage: media.message.videoMessage  
    }
    await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage,{ quoted: message.data});
}))

CBot.addCommand({pattern: 'status', fromMe: wk, desc: Lang.SYSD_DESC, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {
    
    const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
    await message.sendMessage(
        '```' + child + '```', MessageType.text, {quoted: message.data}
    );
}));

CBot.addCommand({pattern: 'version', fromMe: wk, desc: 'nil', dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {
   
    await message.client.sendMessage(message.jid, 
        `*🧬 CyberBot Version 🧬*\n\n` + 
        '```Installed version :```\n' +
        config.VERSION + 
        `\n\nCheck official website : https://aqua-snake.github.io/cyberbotweb/`
   , MessageType.text, {quoted: message.data});
    
}));

     
     
   
