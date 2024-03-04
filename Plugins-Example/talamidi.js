import fetch from 'node-fetch';
const midsoune = async (m, {conn, text}) => {
  if (text.startsWith('https://')) {
    try {
      let res = await fetch(`https://midsoune-b5be75a7ee15.herokuapp.com/api/dtalamidi?url=${encodeURIComponent(text)}`);
      let data = await res.json();
      const results = JSON.parse(data.result);
      for (let i = 0; i < results.link.length; i++) {
        await conn.sendFile(m.chat, results.link[i], results.title[i] + '.pdf', '', m);}
    } catch (error) {
      console.error("حدث خطأ أثناء جلب البيانات:", error);}
  } else {
    try {
      let res = await fetch(`https://midsoune-b5be75a7ee15.herokuapp.com/api/talamidi?drs=${encodeURIComponent(text)}`)
      let data = await res.json();
      const results = JSON.parse(data.result);
      let message = '';
      for(let result of results) {
         message += `*الدرس:* ${result.title}\n*الرابط:* ${decodeURI(result.link)}\n\n`;}
       await m.reply(message);
    } catch (error) {
      console.error("حدث خطأ أثناء جلب البيانات:", error);}}
};
midsoune.command = ['talamidi'];
export default midsoune;
