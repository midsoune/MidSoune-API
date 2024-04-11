import fetch from 'node-fetch';
const midsoune = async (m, {conn, text, command}) => {
  if ( command === 'ytaa'){
    let res = await fetch(`https://midsouneapi-fee7b0be8faf.herokuapp.com/api/youtube?url=${text}`)
    let data = await res.json();
    const videoURL = data.video.url
    const title = data.video.title
    await conn.sendMessage(m.chat, { video: { url: videoURL }, mimetype: 'video/mp4', fileName: title + '.mp4'}, { quoted: m })
  } else if (command === 'ytvv'){
    let res = await fetch(`https://midsouneapi-fee7b0be8faf.herokuapp.com/api/youtube?url=${text}`);
    let data = await res.json();
    const audioURL = data.audio.url
    const title = data.audio.title
    await conn.sendMessage(m.chat, { audio: { url: audioURL }, mimetype: 'audio/mp4', fileName: `${title}.mp3`}, {quoted: m})
  }
}
midsoune.command = ['ytvv', 'ytaa'];
export default midsoune;
