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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255749386037";




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


global.SESSION_ID = process.env.SESSION_ID  ||"SUHAIL_16_00_10_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxODgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDg2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDcsXG4gICAgICAgIDEwMixcbiAgICAgICAgODQsXG4gICAgICAgIDk3LFxuICAgICAgICA1MixcbiAgICAgICAgMjM3LFxuICAgICAgICA5MixcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTAxLFxuICAgICAgICA2NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDY2LFxuICAgICAgICAxMixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjksXG4gICAgICAgIDY5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDksXG4gICAgICAgIDQ2LFxuICAgICAgICA2MixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDg4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDExOCxcbiAgICAgICAgOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDMsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDczLFxuICAgICAgICAxNzUsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDMwLFxuICAgICAgICA0NCxcbiAgICAgICAgNixcbiAgICAgICAgMjE2LFxuICAgICAgICAxODcsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTczLFxuICAgICAgICA0MixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTgzLFxuICAgICAgICA1MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAzNixcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDkyLFxuICAgICAgICA4NixcbiAgICAgICAgNDcsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTIwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjM0LFxuICAgICAgICA0NixcbiAgICAgICAgNDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODksXG4gICAgICAgIDAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDY1LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTIxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDM1LFxuICAgICAgICA0OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTU1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxLFxuICAgICAgICAzMixcbiAgICAgICAgMjQ2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMSxcbiAgICAgICAgMjMyLFxuICAgICAgICA1NixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTg0LFxuICAgICAgICA2LFxuICAgICAgICAyMTksXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDQ1LFxuICAgICAgICA0NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDkwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDksXG4gICAgICAgIDExNixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzksXG4gICAgICAgIDE2OSxcbiAgICAgICAgNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTI5LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVGwybUVVejRETmd6Si9MZTBwUll3WnNNUEViNXNJU3hKb3FOR0syU3JuUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTU3NDkzODYwMzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkY4RkRGRTgwMEFEODdERUY4NkU5Njk0RjEwMTU3NDYzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyODE0NDA0M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NTc0OTM4NjAzN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTQzNDExMjU5QUEzQzY1NDA4QjY2RjI0NTM1RTFDRTJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI4MTQ0MDQ0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU1NzQ5Mzg2MDM3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDMjQ0NUZENEZDQjhBMURCNkRDNDJBQjE1NzJCMzBBRVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjgxNDQwNDZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTU3NDkzODYwMzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkIyRDg0NTZGRkFDQkREODhENzBGMzI5MkZCQkEwNDc3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyODE0NDA0N1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ4UmhYM0VJVlN0U3J3ajVJR29yeExBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjU5MTM1ZmYyLWFkNDYtNDM4ZS05MWZhLWNhY2IyZjM2MTU5ZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTcsXG4gICAgICAxMDMsXG4gICAgICA0NixcbiAgICAgIDg5LFxuICAgICAgMjI3LFxuICAgICAgMTQ5LFxuICAgICAgMTAxLFxuICAgICAgMTE1LFxuICAgICAgMTU5LFxuICAgICAgMjAsXG4gICAgICA1MSxcbiAgICAgIDEyOSxcbiAgICAgIDExLFxuICAgICAgMTM5LFxuICAgICAgMyxcbiAgICAgIDE0NyxcbiAgICAgIDIxNyxcbiAgICAgIDE0OCxcbiAgICAgIDU4LFxuICAgICAgMjIyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkxLFxuICAgICAgODgsXG4gICAgICAxMTMsXG4gICAgICAxNTYsXG4gICAgICA1MixcbiAgICAgIDIyNixcbiAgICAgIDEyOSxcbiAgICAgIDE4MyxcbiAgICAgIDM3LFxuICAgICAgNDcsXG4gICAgICAyNTEsXG4gICAgICA2NyxcbiAgICAgIDg5LFxuICAgICAgMjA3LFxuICAgICAgNTMsXG4gICAgICAyMyxcbiAgICAgIDE0NSxcbiAgICAgIDIzMyxcbiAgICAgIDIwLFxuICAgICAgMTE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjQzVFFMMzZUXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU3NDkzODYwMzc6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjQ4NjIzMjkxOTgxODY0OjJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwifsKiZmVpwqnihKJcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPbU9sTG9HRUtiRmhiZ0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkdCd0ZQczZ6NVN4ZUtHWjZVR0tDSElHRi9kSHBXeURCZ0o1aUlOZW9uQVE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSEJhckxxSkpVbmo1WWp2T0F0R1dsU0gzREdXT0djTmY3NW55blVzOXhpUHRINU4zejVVeXV5a2h3UVFaNGhNcjFnLzdtVzZabnowNlZaSTBmemV4Q0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYzJNMHdjUlRsODJtQzBQNGVoVVdZRjdUdy91T0VQMy83NU5Ha0lkaHBqWHMwTWlYaHR5TnpwTndNY3UxdVh1MHBsaTZidHcvazRlaVRSajZZcXNRRFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1NzQ5Mzg2MDM3OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI4MTQ0MDQyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSnZPXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKdk8uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJLVG1RZ0t5bzM3aEIrRytxam1tM0p6MWRkcG1kRFZSQjdDMnM4N3VrdTJRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3MzI1NzcxMjksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyODE0NDA0MjgwMVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Faisal™finest",
  ownername:process.env.OWNER_NAME|| "finest™faisal",


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
