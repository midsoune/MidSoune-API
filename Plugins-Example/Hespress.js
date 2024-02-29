import fetch from 'node-fetch';
const midsoune = async (m, {conn, args}) => {
  if (args[0] && args[0].startsWith('https://')) {
    try {
      let res = await fetch(`https://midsoune-b5be75a7ee15.herokuapp.com/api/rhespress?lien=${args[0]}`);
      let data = await res.json();
      const results = JSON.parse(data.result);
      let cap = `${results.content}`;
      const image = results.image;
      await conn.sendFile(m.chat, image, '', cap, m);
    } catch (error) {
      console.error("حدث خطأ أثناء جلب البيانات:", error);
    }
  } else {
    try {
      let res = await fetch('https://midsoune-b5be75a7ee15.herokuapp.com/api/hespress');
      let data = await res.json();
      const results = JSON.parse(data.result);
      let message = '';
      for (let result of results) {
        message += `\n🗞️ *الخبر:* ${result.title}\n📰 *الرابط:* ${result.url}\n`;
      }
      await m.reply(message);
    } catch (error) {
      console.error("حدث خطأ أثناء جلب البيانات:", error);
    }
  }
};
midsoune.command = ['hespress'];
export default midsoune;
