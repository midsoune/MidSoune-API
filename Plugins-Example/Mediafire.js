import fetch from 'node-fetch';
const midsoune = async (m, {conn, text}) => {
let res = await fetch(`https://midsouneapi-fee7b0be8faf.herokuapp.com/api/mediafire?url=${text}`)
  let data = await res.json();
  const results = data.result
 conn.sendFile(m.chat, results.link, '', `${results.title} [${results.size} ]`, m);};
midsoune.command = ['mediafire'];
export default midsoune;
