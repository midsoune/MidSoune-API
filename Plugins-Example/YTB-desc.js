// Video
import fetch from 'node-fetch';
const midsoune = async (m, {conn, text}) => {
let res = await fetch(`https://m-api-igok.onrender.com/api/dowloader/yt?url=${text}`)
  let data = await res.json();
    const res = data.result.des
    const title = data.result.title
await m.reply(title + '/n/n' + res)
};
midsoune.command = ['ytdesc', 'desc'];
export default midsoune;

// Audio
import fetch from 'node-fetch';
const midsoune = async (m, { conn, text }) => {
    let results = await fetch(`https://midsoune-b5be75a7ee15.herokuapp.com/api/youtube?url=${text}`);
    let data = await results.json();
    const res = data.audio.url
    const title = data.audio.title
    await conn.sendMessage(m.chat, { audio: { url: res }, mimetype: 'audio/mp4', fileName: `${title}.mp3`}, {quoted: m})
};
midsoune.command = ['ytmp3', 'yta'];
export default midsoune;
