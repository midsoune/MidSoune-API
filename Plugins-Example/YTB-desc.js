// YTB desc
import fetch from 'node-fetch';
const midsoune = async (m, {conn, text}) => {
let res = await fetch(`https://m-api-igok.onrender.com/api/dowloader/yt?url=${text}`)
let data = await res.json();
const res = data.result.des
await m.reply(res)
};
midsoune.command = ['ytdesc', 'desc'];
export default midsoune;
