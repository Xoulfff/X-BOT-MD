const {
    Sparky,
    commands,
    isPublic
} = require("../lib/plugins.js");
const plugins = require("../lib/plugins.js");
const {
    OWNER_NAME,
    BOT_NAME,
    HANDLERS,
    WORK_TYPE,
    BOT_INFO,
    URL,
    ALIVE
} = require("../config.js");
const font = require("@viper-x/fancytext");
const fs = require("fs");
const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);
        
Sparky(
    {
        name: "menu",
        category: "misc",
        fromMe: isPublic,
        desc: "Show All commands"
    },
    async ({
        client, m, args
    }) => {
      try {
            if (args) {  
            for (let i of plugins.commands) {
                if (i.name.test(args)) { 
                  return m.reply(`*command : ${args.trim()}*\n*description : ${i.desc.toLowerCase()}*`);
                }
            }
        return m.reply(font.tiny("_oops command not found_"))
        } else {
            let [date,
                time] = new Date()
            .toLocaleString("en-IN", {
                timeZone: "Asia/Kolkata"
            })
            .split(",");
            let menu = `*╭━━━〔 𝐗ᴏᴜʟ 𝐒ᴇʀ ⁩〕━━━━···▸*
*┃ ╭─────────────···▸*
*┃ │Oᴡɴᴇʀ : ${BOT_INFO.split(";")[1]}*
*┃ │Mᴏᴅᴇ : ${WORK_TYPE}*
*┃ │Pʀᴇꜰɪx : ${HANDLERS}*
*┃ │Tɪᴍᴇ : ${time}*
*┃ │Dᴀᴛᴇ : ${date}*
*┃ │Uᴩᴛɪᴍᴇ : ${await m.uptime()}*
*┃ │Pʟᴜɢɪɴꜱ : ${commands.length}*
*┃ ╰─────────────···▸*
*╰━━━━━━━━━━━━━━━━···▸\n\n*`
            let cmnd = [];
            let Sparky;
            let type = [];
            commands.map((command, num) => {
              
                if (command.name) {
              let SparkyName = command.name
                  Sparky = SparkyName.source.split('\\s*')[1]
                  .toString()
                  .match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2];
              }

              if (command.dontAddCommandList || Sparky === undefined) return;
                   
                if (!command.dontAddCommandList && Sparky !== undefined) {
                    let category;
                    if (!command.category) {
                        category = "misc";
                    } else {
                        category = command.category.toLowerCase();
                    }
                    cmnd.push({
                        Sparky, category: category
                    });
                    if (!type.includes(category)) type.push(category);
                }
            });
            cmnd.sort();
            type.sort().forEach((cmmd) => {
                                    menu += `\n*╭━━━━━━━━━━━━━━━━━···▸*\n*┃  ╭─────────────┅┄▻*\n*┃  │  ${cmmd}*\n*┃  ╰┬────────────┅┄▻*\n*┃  ┌┤*\n`;
                let comad = cmnd.filter(({
                    category
                }) => category == cmmd)
                comad.sort()
                comad.forEach(({
                    Sparky
                }, num) => {
                   menu += `*┃  │ ☆ _${Sparky.trim()}_*\n`
                 });
                                    menu += `*┃  ╰──────────────···▸*
                                    *╰━━━━━━━━━━━━━━━━━···▸*\n`;
             });
           
        let sperky = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "displayName": "𝑺 𝜟 𝜝 𝜟 𝜞 𝛪 /// 🌩️","vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
        return await client.sendMessage(m.jid , { text : font.tiny(menu),
contextInfo: { externalAdReply: {                                           
title: font.tiny(`Hey there  ${m.pushName}`),
body: font.tiny(`this is ${BOT_INFO.split(";")[0]}`),
sourceUrl: URL,
mediaUrl: URL,
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: false,
thumbnailUrl: `${BOT_INFO.split(";")[2]}` }}},{ quoted: sperky })      
    }
      } catch (e) {
        m.error(`hey : ${e}`)
      }
    }
);
