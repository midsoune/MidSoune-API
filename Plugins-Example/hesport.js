import fetch from 'node-fetch';
const handler = async (m) => {
let res = await fetch('https://midsouneapi-fee7b0be8faf.herokuapp.com/api/hesport')
  let data = await res.json();
  const results = JSON.parse(data.result);
  let message = '';
  for(let result of results) {
     message += `*العنوان:* ${result.title}\n*الرابط:* ${result.url}\n\n`;
    }
   await m.reply(message);
};
handler.command = ['hesport'];
export default handler;
