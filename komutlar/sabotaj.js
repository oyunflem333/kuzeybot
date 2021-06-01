const Discord = require('discord.js');
const db = require('quick.db');
exports.run = async (client, message, args) => {
  // ArdaDemr Youtube Kanalına ait AMONG US bot altyapısı
    var filter = m => message.author.id === message.author.id&&!m.author.bot;
    var role = message.guild.roles.cache.find(x2 => x2.name === "Among Us Oynuyor");
    var islem = String(Math.floor(Math.random()*9)) + String(Math.floor(Math.random()*9)) + String(Math.floor(Math.random()*9)) + String(Math.floor(Math.random()*9)) + "+" + String(Math.floor(Math.random()*9)) + String(Math.floor(Math.random()*9)) + String(Math.floor(Math.random()*9)) + String(Math.floor(Math.random()*9))
    let ardademrau = db.fetch(`amongusardademrlog_${message.guild.id}`)
    const ardademramongus = new Discord.MessageEmbed()
    .setAuthor('Among Us - ArdaDemr', 'https://i.resmim.net/cNUjb.png', 'https://discord.gg/RZwGEGKBct')
    .setDescription('IMPOSTOR SABOTAJI BAŞLATTI!\n**Hızlıca alttaki işlemi çözün!\n'+islem+"**")
    .setImage('https://i.hizliresim.com/ZFYFvC.gif')
    .setFooter("ArdaDemr'e Ait Among Us Altyapısı")
    .setColor('#f7f2f2')
    message.guild.channels.cache.get(ardademrau).send(ardademramongus).then(()=>{
      message.channel.awaitMessages(filter, {  max:1 })
        .then(collected => {
            if(collected.first().content==eval(islem)){
                message.channel.send("Sabotaj Durduruldu! Tebrikler.");
            }else{
                message.channel.send("Sabotaj Durdurulamadı! Oyunu IMPOSTOR kazandı.");
                message.guild.members.cache.forEach(u =>  {u.roles.remove(role) })
                db.set(`kalanoyuncu${message.guild.id}`,0)
                db.delete(`${message.guild.id}oyunda`)
                db.set(`lobivar${message.guild.id}`,"DeAktif");
            }
        })
    })
// ArdaDemr Youtube Kanalına ait AMONG US bot altyapısı
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sabotaj-başlat'],
  permLevel: 0
};
 
exports.help = {
  name: 'sabotajı-başlat'
};