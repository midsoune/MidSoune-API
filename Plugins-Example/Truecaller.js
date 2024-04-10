import fetch from 'node-fetch';
const midsoune = async (m, {args, command}) => {
 if (!args[0]) { m.reply(`💡 *طريقة الاستعمال:*\n.${command} 212621xxxxxx`); }
 let INSTALLATION_ID = 'a1i0T--Gfdn....';
 let response = await fetch(`https://midsouneapi-fee7b0be8faf.herokuapp.com/api/truecaller?num=${args[0]}&id=${INSTALLATION_ID}`);
 let responseData = await response.json();
 let data = JSON.parse(responseData.result);
 const message = `
 ✅ *معلومات صاحب الرقم:*
‏▬▬▬▬▬▬▬▬▬▬
  🧑🏻 *صاحب الرقم:* ${data.name}
  📞 *رقم الهاتف:* ${data.e164Format}
  🌍 *الدولة:* ${data.countryName}
  ✉️ *البريد الإلكتروني:* ${data.email}
  📶 *شركة الاتصال:* ${data.carrier}
  ☎️ *نوع الرقم:* ${data.type}
`;
await m.reply(message);};
midsoune.command = ['truecaller'];
export default midsoune;
