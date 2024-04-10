import fetch from 'node-fetch';
const midsoune = async (m, {conn, args}) => {
  if (args[0] && args[0].startsWith('https://')) {
    try {
      let res = await fetch(`https://midsouneapi-fee7b0be8faf.herokuapp.com/api/rhibapress?lien=${args[0]}`);
      let data = await res.json();
      const results = JSON.parse(data.result);
      let cap = `${results.content}`;
      const image = results.image;
      await conn.sendFile(m.chat, image, '', cap, m);
    } catch (error) {
      console.error("حدث خطأ أثناء جلب البيانات:", error);}
  } else {
    try {
      let res = await fetch('https://midsouneapi-fee7b0be8faf.herokuapp.com/api/hibapress');
      let data = await res.json();
      const results = JSON.parse(data.result);
      let message = '';
      for (let result of results) {
        message += `\n🗞️ *${result.date}* ${result.title}\n📰 *الرابط:* ${result.link}\n`;
      }
      await m.reply(message);
    } catch (error) {
      console.error("حدث خطأ أثناء جلب البيانات:", error);}}
};
midsoune.command = ['hibapress', 'hp', 'هبة'];
export default midsoune;
