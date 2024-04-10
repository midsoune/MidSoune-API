// Video
import fetch from 'node-fetch';
const midsoune = async (m, {conn, text}) => {
let res = await fetch(`https://midsouneapi-fee7b0be8faf.herokuapp.com/api/youtube?url=${text}`)
  let data = await res.json();
    const res = data.video.url
    const title = data.video.title
  await conn.sendMessage(m.chat, { video: { url: res }, mimetype: 'video/mp4', fileName: title + '.mp4'}, { quoted: m })
};
midsoune.command = ['youtube', 'ytv'];
export default midsoune;

// Audio
import fetch from 'node-fetch';
const midsoune = async (m, { conn, text }) => {
    let results = await fetch(`https://midsouneapi-fee7b0be8faf.herokuapp.com/api/youtube?url=${text}`);
    let data = await results.json();
    const res = data.audio.url
    const title = data.audio.title
    await conn.sendMessage(m.chat, { audio: { url: res }, mimetype: 'audio/mp4', fileName: `${title}.mp3`}, {quoted: m})
};
midsoune.command = ['ytmp3', 'yta'];
export default midsoune;
