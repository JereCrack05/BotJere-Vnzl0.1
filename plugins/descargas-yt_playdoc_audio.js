import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!args || !args[0]) return conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()}πππππππ ππ ππππΌπΎπ πΏπ ππππππ½π ππΌππΌ πΏπππΎπΌπππΌπ ππ πΏππΎππππππ πΏπ πΌππΏππ\nπππππππ\n*${usedPrefix + command} https://youtu.be/85xI8WFMIUY*\n\nπππππ πππ ππππππ½π ππππ ππ πΏππππππΌπΏ πππ πΌππΏππ πΏππΎπππππ\nπππΌππππ\n*${usedPrefix + command} https://youtu.be/c5gJRzCi0f0*`, fkontak,  m)

await conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()}ππππππ ππππΏππΌ ππ πΏππΎππππππ πΏπ πΌππΏππ, ππππππ πππ ππΌπππ\n\nππππ πππ ππππ ππΌππ ππππ πΌππΏππ πΏππΎπππππ, ππππΌππ ππΌππ`, fkontak,  m)
try {
let q = '128kbps'
let v = args[0]
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)).catch(async _ => await youtubedlv3(v))
const dl_url = await yt.audio[q].download()
const ttl = await yt.title
const size = await yt.audio[q].fileSizeH
let cap = `β­ββ°  ${wm}  β±ββ¬£\nβπ₯ YOUTUBE DL π₯\nβΰ¦ *TΓTULO | TITLE:* \nβΒ» ${ttl}\nβοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉ\nβΰ¦ *PESO | SIZE:*\nβΒ» ${size}\nβ°βββββββββββββββββ`.trim()
await conn.sendMessage(m.chat, { document: { url: dl_url }, caption: cap, mimetype: 'audio/mpeg', fileName: `${ttl}.mp3`}, { quoted: m })
} catch {
try {
let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${args[0]}`)   
let lolh = await lolhuman.json()
let n = lolh.result.title || 'error'
let n2 = lolh.result.link
let n3 = lolh.result.size
let cap2 = `β­ββ°  ${wm}  β±ββ¬£\nβπ₯ YOUTUBE DL π₯\nβΰ¦ *TΓTULO | TITLE:* \nβΒ» ${ttl}\nβοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉ\nβΰ¦ *PESO | SIZE:*\nβΒ» ${size}\nβ°βββββββββββββββββ`.trim()
await conn.sendMessage(m.chat, { document: { url: n2 }, caption: cap2, mimetype: 'audio/mpeg', fileName: `${n}.mp3`}, {quoted: m})
} catch {
await conn.reply(m.chat, '*ERROR, VUELVE AL INTENTA*', m)}
}}
handler.command = /^playaudiodoc|pdocaudio|docaudio|ytmp3doc|ytadoc|ytmp3.2|yta.2$/i
handler.limit = 3
export default handler
