const Discord = require('discord.js');
// ArdaDemr Youtube Kanalına ait AMONG US bot altyapısı
exports.run = async (client, message, args) => {
    const amongus = new Discord.MessageEmbed()
    .setAuthor('Among Us - ArdaDemr', 'https://i.resmim.net/cNUjb.png', 'https://discord.gg/RZwGEGKBct')
    .addField(`Among Us - Görevler;`,'> 20 adet komut kullan!\n> `!görevi-yap` **yazarak başlayabilirsin.**\n> Komutu 2 saniyede bir kullanabilirsin.')
    .addField(`ArdaDemr'den Not;`,`Ben sadece 1 adet görev ekledim. Gerisi size kalmış. :)`)
    .setColor('#f7f2f2')
    .setFooter(`ArdaDemr'e Ait Among Us Altyapısı`)
    message.channel.send(amongus)
// ArdaDemr Youtube Kanalına ait AMONG US bot altyapısı
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['görevler'],
  permLevel: 0
};
 // ArdaDemr Youtube Kanalına ait AMONG US bot altyapısı
exports.help = {
  name: 'görev'
};