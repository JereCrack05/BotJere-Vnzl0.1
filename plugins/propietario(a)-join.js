let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, isMods, isOwner }) => {
try {  
let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
let [_, code] = link.match(linkRegex) || []
if (!code) throw '${mg}๐ *๐ฟ๐๐ฝ๐ ๐ฟ๐ ๐๐๐ ๐๐ ๐๐๐๐ผ๐พ๐ ๐๐๐๐ ๐ฝ๐ ๐ผ ๐๐๐๐*\n๐ผ *Ingrese el enlace de un grupo.*\n*Enter the link of a group.*\n\n*๐๐๐๐๐๐๐ | ๐๐๐ผ๐๐๐๐*\n*#unete ${nn}*\n\n*#join ${nnn}*'
if ( isMods || isOwner || m.fromMe) {
m.reply(`*๐๐ผ๐๐ผ๐ฝ๐๐-๐๐ฟ ๐๐ ๐๐ผ ๐๐๐๐ฟ๐ ๐ผ๐ ๐๐๐๐๐!!โ*\n*๐๐๐พ๐พ๐๐๐๐๐๐๐๐ ๐๐๐๐๐๐ฟ โ*`)
await delay(5 * 5000)
let res = await conn.groupAcceptInvite(code)
} else {
const data = global.owner.filter(([id]) => id)
await delay(5 * 5000)
for (let jid of data.map(([id]) => [id] + '@s.whatsapp.net').filter(v => v != conn.user.jid)) m.reply(`${iig}โญโโโขโโโโโโโโโโโโโโโโขโโโฎ\nโ ๐ง *๐๐๐๐๐พ๐๐๐๐ฟ ๐๐ผ๐๐ผ ๐๐ ๐๐๐๐๐*\nโ ๐ง *๐๐๐๐๐ ๐๐๐๐๐๐๐*\nโฐโโโขโโโโโโโโโโโโโโโโขโโโฏ\n\n*๐ค ๐๐๐๐๐พ๐๐๐ผ๐๐๐ | ๐ผ๐๐๐๐๐พ๐ผ๐๐*\n` + ' wa.me/' + m.sender.split('@')[0] + '\n\n*๐ฎ ๐๐๐๐ผ๐พ๐ ๐ฟ๐๐ ๐๐๐๐๐ | ๐๐๐๐๐ ๐๐๐๐*\n ' + link, jid)

m.reply(`${ag}*โ Su enlace se enviรณ a Mรญ Propietario(a).*\n*Your link was sent to My Owner.*\nโโโโโโโโโโโโโโโโโ\nโ ๏ธ *Su Grupo serรก Evaluado y Quedarรก a decisiรณn de Mรญ Propietario(a) si ${gt} se une o no al Grupo.*\n*Your Group will be Evaluated and it will be up to My Owner if ${gt} joins the Group or not.*\nโโโโโโโโโโโโโโโโโ\nโ *Es posible que su Solicitud sea Rechazada por las siguientes Causas:*\n*Your Application may be Rejected for the following Reasons:*\n*1๏ธโฃ El Bot estรก Saturado.*\n*The Bot is Saturated.*\nโโโโโโโโโโโโโโโโโ\n2๏ธโฃ *El Bot fue eliminado del Grupo.*\n*The Bot was removed from the Group.*\nโโโโโโโโโโโโโโโโโ\n3๏ธโฃ *El Grupo no cumple con las Normativas de ${gt}*\n*The Group does not comply with the Regulations of ${gt}*\nโโโโโโโโโโโโโโโโโ\n4๏ธโฃ *El enlace del grupo se restableciรณ.*\n*The group link was restored.*\nโโโโโโโโโโโโโโโโโ\n5๏ธโฃ *No se agrega a Grupos segรบn Mi Propietario(a).*\n*Not added to Groups by My Owner*\nโโโโโโโโโโโโโโโโโ\n๐ *La solicitud puede tardar Horas en ser Respondida. Por favor Tener Paciencia. Gracias*\n*The request may take hours to be answered. Please be patient. Thank you*`)
}
} catch {
throw '*y el link?*'  
}}
handler.help = ['join [chat.whatsapp.com]']
handler.tags = ['owner']
handler.command = /^join|nuevogrupo$/i
//handler.private = true 
handler.register = true
handler.owner = true
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
