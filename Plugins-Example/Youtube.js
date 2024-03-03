// Video
import fetch from 'node-fetch';
const midsoune = async (m, {conn, text}) => {
let res = await fetch(`https://midsoune-b5be75a7ee15.herokuapp.com/api/youtube?url=${text}`)
  let data = await res.json();
  const res = data.video
  await conn.sendFile(m.chat, res.result, 'video.mp4', '', m);
};
midsoune.command = ['youtube', 'ytv'];
export default midsoune;

// Audio
import fetch from 'node-fetch';
const midsoune = async (m, {conn, text}) => {
let res = await fetch(`https://midsoune-b5be75a7ee15.herokuapp.com/api/youtube?url=${text}`)
  let data = await res.json();
  const res = data.audio
 await conn.sendMessage(m.chat, { audio: { url: res.result }, mimetype: 'audio/mp4', fileName: res.title + '.mp3'}, { quoted: m })
};
midsoune.command = ['ytmp3', 'yta'];
export default midsoune;
