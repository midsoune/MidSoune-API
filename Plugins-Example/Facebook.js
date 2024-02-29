import fetch from 'node-fetch';
const midsoune = async (m, {conn, text}) => {
let res = await fetch(`https://midsoune-b5be75a7ee15.herokuapp.com/api/fbdown?url=${text}`)
  let data = await res.json();
  const results = data.result
 conn.sendFile(m.chat, results.hd, 'video.mp4', '', m);
};
midsoune.command = ['facebook', 'fb'];
export default midsoune;
