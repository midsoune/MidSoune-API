import fetch from 'node-fetch';
const midsoune = async (m, {conn, text}) => {
let res = await fetch(`https://midsouneapi-fee7b0be8faf.herokuapp.com/api/igdl?url=${text}`)
  let data = await res.json();
  const results = data.result
 conn.sendFile(m.chat, results.data[0], 'video.mp4', '', m);
};
midsoune.command = ['instagram', 'ig'];
export default midsoune;
