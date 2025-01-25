const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="ogemdidavid1@gmail.com"
global.location="Imo, Nigeria"


global.mongodb= process.env.MONGODB_URI || "null"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Dartondave/Suhail-Md-V5";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/Dartondave/Suhail-Md-V5/main/lib/assets/sukuna.jpeg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "`Hail Amy you sluts`" 


global.devs = "2347025836462" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349073741273";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 1
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null2349073741273";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,2347040694847";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2347040694847,2347040694847";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  SUHAIL_22_19_01_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA1NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTkyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTg2LFxuICAgICAgICA3MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDQ2LFxuICAgICAgICAzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDQ1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzksXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDg2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAzNixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIsXG4gICAgICAgIDg0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDQsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjgsXG4gICAgICAgIDQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyMixcbiAgICAgICAgODksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTY3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDUwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA1NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODksXG4gICAgICAgIDYyLFxuICAgICAgICA5NyxcbiAgICAgICAgODUsXG4gICAgICAgIDcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDUwLFxuICAgICAgICA1NixcbiAgICAgICAgMTgzLFxuICAgICAgICA2NCxcbiAgICAgICAgNyxcbiAgICAgICAgMTYyLFxuICAgICAgICA3MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDkyLFxuICAgICAgICAxODQsXG4gICAgICAgIDExMixcbiAgICAgICAgNTIsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTAsXG4gICAgICAgIDEzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDksXG4gICAgICAgIDE3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDc2LFxuICAgICAgICA5NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTk0LFxuICAgICAgICA5NixcbiAgICAgICAgNDksXG4gICAgICAgIDQ4LFxuICAgICAgICAyMyxcbiAgICAgICAgMjE0LFxuICAgICAgICA3MCxcbiAgICAgICAgMjksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTgzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTQzLFxuICAgICAgICA3OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDU0LFxuICAgICAgICAyOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTI3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTg4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY1LFxuICAgICAgICA2MixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM1LFxuICAgICAgICA2MixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzksXG4gICAgICAgIDksXG4gICAgICAgIDU0LFxuICAgICAgICAxODUsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDEsXG4gICAgICAgIDAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDcyLFxuICAgICAgICAxLFxuICAgICAgICA2MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDQ5LFxuICAgICAgICAzLFxuICAgICAgICA0MixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzMsXG4gICAgICAgIDg5LFxuICAgICAgICAxMixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjE4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjVSeXJUSlF0MHdFU3Y1UlFzZE13T0FiaXJtLzJ6SGdWTm5za095SUR6MHM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlJkNFdhaFYxU3FPVXZfNG5PUERNZ1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiMGJhMzE3YmUtMmEzZS00YTY2LTlmMTItYzMyNTlmYmJiOTA4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc1LFxuICAgICAgMjI4LFxuICAgICAgMjExLFxuICAgICAgMTMyLFxuICAgICAgNDEsXG4gICAgICA5MSxcbiAgICAgIDQ5LFxuICAgICAgMTQzLFxuICAgICAgMTczLFxuICAgICAgMTEsXG4gICAgICA3MyxcbiAgICAgIDE0MCxcbiAgICAgIDQyLFxuICAgICAgNDQsXG4gICAgICAyMTIsXG4gICAgICAyMCxcbiAgICAgIDEwNixcbiAgICAgIDM4LFxuICAgICAgMjEyLFxuICAgICAgMTEwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExOCxcbiAgICAgIDE0OCxcbiAgICAgIDM2LFxuICAgICAgNDksXG4gICAgICAxMixcbiAgICAgIDEyMixcbiAgICAgIDIzMCxcbiAgICAgIDg3LFxuICAgICAgMTQsXG4gICAgICAxMDMsXG4gICAgICAxNzEsXG4gICAgICAxNjQsXG4gICAgICAyOSxcbiAgICAgIDI5LFxuICAgICAgMTExLFxuICAgICAgMjQzLFxuICAgICAgOTAsXG4gICAgICAxNDAsXG4gICAgICAxMTgsXG4gICAgICA4NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJHUVFIQkQ4RFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA3Mzc0MTI3MzoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjY0OTM1MjI1NDgzNDc3OjE0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xUQm02VU9FT2FqMEx3R0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieVFUamhRMGk0Y2p6VkFoRjFwOTlublFUazIzV285bmFVc1Vmb2pqaVJ4dz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ4U0hGck54dFA1bVFsem43TmtiMGM0Zzl4Q3JyL3Q1UUlhcFhOUi9XWUlUN0QrZElhU0RoZFl6SnlxN3IxY1IyMUVtRnJwSmR5TGx1eFlOK2ZNUldCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJCT0ZzajBVUHhxK3hMM0NjVkllOGZsdm9GWFNjbmpnY0FqNjhOektRN3cyZEgycjV1YkYzem5DTURBenVGcVJpTmpoaVFsT05IRXAraXYxMWt4d2ZDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDczNzQxMjczOjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM3NzU3MTYxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUDBJXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQMEkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIrWi90cTJsNGplbFJHWUZ2ZlRVZVNTNWlEQW1wL0Z2a0NZckNyaXdvZitJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM4MzYxNDE3NDgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTczNzc1NzE2NDU0M1wifSIKfQ  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 POWERED BY BLESSED-MD 』```", //*『𝕤ᴜʙ𝕤ᴄʀɪʙᴇ • BLESSED TECH』*\n youtube.com/hailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "٭*AMY𖤐",
  packname: process.env.PACK_NAME || "HAIL OREO SLUTS",
  botname : process.env.BOT_NAME  || "`OREO SLUTS`",
  ownername:process.env.OWNER_NAME|| "`KARA MAT`",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "BLESSED"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 5,
  //userImages:process.env.USER_IMAGES|| "https://raw.githubusercontent.com/Dartondave/Suhail-Md-V5/main/lib/assets/gojo.jpeg?raw=true",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "composing", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
