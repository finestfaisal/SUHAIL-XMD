const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Tanzania";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255629028037";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_59_09_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDY4LFxuICAgICAgICAxMixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTAxLFxuICAgICAgICA4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDg2LFxuICAgICAgICAwLFxuICAgICAgICAyMixcbiAgICAgICAgOTcsXG4gICAgICAgIDksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzksXG4gICAgICAgIDI0LFxuICAgICAgICAyMjksXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjE2LFxuICAgICAgICA4NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjAxLFxuICAgICAgICA1MixcbiAgICAgICAgNTAsXG4gICAgICAgIDQyLFxuICAgICAgICA2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTgzLFxuICAgICAgICA0MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTg4LFxuICAgICAgICA2OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDc4LFxuICAgICAgICA0MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDksXG4gICAgICAgIDIzMixcbiAgICAgICAgOTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMzLFxuICAgICAgICA5LFxuICAgICAgICAzNSxcbiAgICAgICAgMjM0LFxuICAgICAgICA2NyxcbiAgICAgICAgMjQzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDQsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjksXG4gICAgICAgIDY4LFxuICAgICAgICAxODAsXG4gICAgICAgIDk2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTUzLFxuICAgICAgICAyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzksXG4gICAgICAgIDIxMixcbiAgICAgICAgNjEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTU1LFxuICAgICAgICA3OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzEsXG4gICAgICAgIDE0NixcbiAgICAgICAgNjcsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0LFxuICAgICAgICA4NixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDk3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTU5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjM4LFxuICAgICAgICA4NixcbiAgICAgICAgMjM1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjMzLFxuICAgICAgICA0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDksXG4gICAgICAgIDc1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDExLFxuICAgICAgICAxNTksXG4gICAgICAgIDQ0LFxuICAgICAgICA5LFxuICAgICAgICA4MixcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNkpwM1hiWW0yZC9aSC9Vb0ZlM0h0M0NwSm9kdkVqMVJOeHluNHYvYlJRTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTU2MjkwMjgwMzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkI2Nzc5NUY0RTlDQ0ZFRDM0MzUyMDY4RkNERTA2RDhCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNjA2Njc1OFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NTYyOTAyODAzN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNTVFMjA0NzA2MUYwMjY0N0FBQzk3MEZBNjhCNzU4MENcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI2MDY2NzU4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInJ4ZzZiWndhUmxHTUZjZGstb1Zyc1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiMGZjNjk4OTQtODE1Yi00MTQ5LTg2NDQtZWY4MGQ3ODUwNTZlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MCxcbiAgICAgIDI0NyxcbiAgICAgIDYyLFxuICAgICAgODIsXG4gICAgICAxMjQsXG4gICAgICAxLFxuICAgICAgMjMyLFxuICAgICAgMTM4LFxuICAgICAgMjM1LFxuICAgICAgMjA5LFxuICAgICAgMTIsXG4gICAgICAxMjcsXG4gICAgICA1MixcbiAgICAgIDIwMSxcbiAgICAgIDE0MyxcbiAgICAgIDY4LFxuICAgICAgMjA5LFxuICAgICAgMTMxLFxuICAgICAgMTAwLFxuICAgICAgMjE0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4LFxuICAgICAgODksXG4gICAgICAxMSxcbiAgICAgIDI2LFxuICAgICAgMTcyLFxuICAgICAgMTYzLFxuICAgICAgNDksXG4gICAgICAxNDcsXG4gICAgICAyMzQsXG4gICAgICAyMjcsXG4gICAgICAyMTYsXG4gICAgICAyMzcsXG4gICAgICA0OCxcbiAgICAgIDIwMyxcbiAgICAgIDIwOCxcbiAgICAgIDE3MyxcbiAgICAgIDQ3LFxuICAgICAgMjA1LFxuICAgICAgMjQ5LFxuICAgICAgMTgzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxDSjVYOFpRXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU2MjkwMjgwMzc6NTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIyMTkwODE3NTk3ODU0NTo1NkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJGYWlzYWzihKJGaW5lc3RcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKYllnd29Rd2VDR3R3WVlBaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImxGOTBVa3lZb0FjV0lveExDQ0J2WWVYZjhYeEJQU3lNdlNxdkMwMXNZSDA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUTgzVk9YcndtQ2JlQldYaXlRaDBYd1VWSUQ0WlN5NWE4RkFoM1FuOXBSZDlVK1gxZUJ3V0d6OGpab25mZTdHU3ZJL2JjaWtRY2JXQUYwbWJGMys2QkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVlRZWEJCVnNPSWxWSmhOcjZpOVVqMU4yOXp2cFVnbGkwbEs4LzRxK3FHZjYrNGdTZHZSTlFaSTk5aGVWNlZVaXRUYldsdXJPSEtZbGxGS1gvT04yZ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1NjI5MDI4MDM3OjU2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA4MixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjYwNjY3NTYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBeFRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUF4VC5qc29uIjogIntcImtleURhdGFcIjpcIm1GaHNyRnI3NW45M3NSN3Z6WGx5VWN4ck42RXdWYUc3T25yMHBCdFlvVzg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjEwMzE5NTgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyNjAzMjkyNzIzN1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
