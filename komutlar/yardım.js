const Discord = require('discord.js');
// ArdaDemr Youtube Kanalına ait AMONG US bot altyapısı
exports.run = async (client, message, args) => {
    const ardademramongus = new Discord.MessageEmbed()
    .setAuthor('Among Us - ArdaDemr', 'https://i.resmim.net/cNUjb.png', 'https://discord.gg/RZwGEGKBct')
    .setDescription('**Among Us - Yardım | Kurallar**\n\nNot: IMPOSTOR rolü ve yeni bi kanal açın, açtığınız kanalı sadece IMPOSTOR rolüne özel yapın.\n\n> `!amongus` Oyunun amacını anlatır (Mutlaka Oku)\n> `!amongus-kanalı ayarla #kanal` Oyunun döneceği kanalı ayarlar\n> `!lobi-oluştur` Oyun lobisi oluşturur\n> `!katıl` Oyuna katılır\n> `!başla` Oyunu başlatır ve random bir kişiyi IMPOSTOR yapar\n> `!toplantı` Toplantıyı başlatır.\n> `!profil` Profil durumunuzu görürsünüz\n> `!görevler` Görevleri gösterir\n> `!öldür @etiket` Kullanıcıyı öldürür (IMPOSTOR ÖZEL)\n> `!sabotajı-başlat` Sabotajı aktif eder\n> `!bitir` Oyunu bitirir\n> `!durum` Oyun durumunu gösterir\n\n**KURALLAR**\n> Birbirinizin rolüne bakmak yasak\n> Oyun sırasında özel mesajlarınız açık olsun')
    .setFooter(`ArdaDemr'e Ait Among Us Altyapısı`)
    .setColor('#f7f2f2')
    message.channel.send(ardademramongus)
// ArdaDemr Youtube Kanalına ait AMONG US bot altyapısı
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kurallar'],
  permLevel: 0
};
 
exports.help = {
  name: 'yardım'
};