//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Topudmh@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Toputech/Topu-ai";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRrcnADTOKzivM0S1r";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRrcnADTOKzivM0S1r";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/13f1bb945857eb9b1eca6.jpg";
global.devs = "2347049827409";
global.sudo = process.env.SUDO || "2347049827409";
global.owner = process.env.OWNER_NUMBER || "2347049827409";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUk3dW9EdDd4NWZKdnMyWmpFQUVmSFJmWUNlbGg1V1VVZDVkMlQ1eklIcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNUVTM0JVNkVlOHJkOFEwMTFaS2RScW0zaDM0aVliMlBOU09JZ2ZZZ0FGYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHTk5DNWgzL25qc25VUFBQL0gxbkFmMWIxMjE3VCsvR2lJQUJlNE94aVVnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuNVQrNVBQWHc4SXNtcVhBNmZMTWEyVWVGTkZveFF0NHN5dFA1M2pmeld3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNNRzBWY2t2NHY5ejBvZUF5L0o3YlhNWjdLcXZ1dEk2VkR5Qno4UHRFbnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZWMnEvWkQwK1RTNU1pK1RxVUt6QlB3U1g1ejFEeUdhWDkra1BaNldWems9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ005amJnTDJmd0xmTHIyK01wNVU1NHUrZHF6MVVlQWVIN2xFZ2ltdVlsMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidE9FdFdjcHRiUGducUVnallMN3A5YmVKazdoTmQvanlha2I0MEFvK0hTST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9NdG1iakhJM096Yy9EbFJvTWFBMWFxRTJmenllMXFaaCtYVHNPRFZXUk1sVndOWkVlZHZ6SVF2c1UzeldBU3cxTkF4UVZzemRVWk5XcjFuR0xsYWl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjksImFkdlNlY3JldEtleSI6InRodkhTcXpsUEI1dk9yL01DQWF4dWxhcExsYmJZOExRVFprZG03MXVueVk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0NzA0OTgyNzQwOUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJCNTZFRUFFODE0RkNFMDA5RDc1NjVFRUFEM0MyMUI2QSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI1OTkxNDY3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ3MDQ5ODI3NDA5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijg1NzAyNjRFQjY5Q0NEREM0OTM0NDQ4RDI1MjY4M0Y1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjU5OTE0ODl9XSwibmV4dFByZUtleUlkIjozMywiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMzLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik15UldKbXlMU2R5NnZLT3BfX01HWEEiLCJwaG9uZUlkIjoiM2I3OGIwM2QtODZmOC00MjlkLThkOTItYjM5OGJkNDc3ZTQzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikk2SFgxT3Uzd3dpNGdXNjFtN1lZRFlXSzdYND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3UFJhQWg2R1IyekxJUUY1VVovZHFqWG1Ienc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSzNBVjkxOVkiLCJtZSI6eyJpZCI6IjIzNDcwNDk4Mjc0MDk6M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJ+RURXQVJEIFRIRSBTRUNPTkQg8J+Zi/Cfj7/igI3imYLvuI/im7nwn4+/In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPN2lscWdFRUptVWdyY0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIxMlB5WXRLaG1CRHpQaEpDUUVUVitrZHJxenNPNVZLN3R0WmxFeEhwK1JBPSIsImFjY291bnRTaWduYXR1cmUiOiJYcmF3Q3lTWTA3MnhkYnJtTFc2VjU2emhlS1JCMkxvdis1V0JmazFuT2xuTG5DaSt3ZDdub2wyYnAya1ZMc1orVnI5dWk0WERIdlFTY1FoVEVmVE5CUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQ3pHbEpCSU41L2dHczJDWUVIZ3NRTmhtcUNRWkwxVzUvY2FGMG4veVhLeEtqY2VwSk96K1BzWFk2aG1xU0MxSXVIb3N4YjZtZXFURDFTN2NGZENJaFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDQ5ODI3NDA5OjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZGRqOG1MU29aZ1E4ejRTUWtCRTFmcEhhNnM3RHVWU3U3YldaUk1SNmZrUSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNTk5MTY1MCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFSWIifQ==
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝖂𝖔𝖜 𝖙𝖔𝖕𝖚 𝖒𝖉 𝖍𝖆𝖘 𝖏𝖚𝖘𝖙 𝖌𝖊𝖓𝖊𝖗𝖆𝖙𝖊𝖉 𝖆 𝖓𝖊𝖜 𝖋𝖎𝖑𝖊",
  author: process.env.PACK_AUTHER || "TOPU",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "TOP-Md",
  ownername: process.env.OWNER_NAME || "TOPU",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "TOPU").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
