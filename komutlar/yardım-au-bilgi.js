const Discord = require('discord.js');
// ArdaDemr Youtube Kanalına ait AMONG US bot altyapısı
exports.run = async (client, message, args) => {
    const amongus = new Discord.MessageEmbed()
    .setAuthor('Among Us - ArdaDemr', 'https://i.resmim.net/cNUjb.png', 'https://discord.gg/RZwGEGKBct')
    .setDescription(`**Among Us'a Hoş Geldin!**`)
    .addField(`ArdaDemr Diyor ki;`,'``Arkadaşlar Discord üstünde nasıl oynanılabilir ki? Diye sordum kendime ve kendimce bir şeyler çıkardım. Şimdi sizlere mantığı anlatacağım.``\n\nÖncelikle lobi oluşturuyoruz, lobi oluşturmadan oyuna katılamayız. Lobiyi oluşturan kişi hariç diğer kullanıcılar !katıl yazarak oyuna katılmalı. En az 4 kişi olmalısınız. !başlat yazıp oyunu başlatıyoruz ve random bir kişi Impostor oluyor. Oyun hangi kanalda oynanılacak ise herkesin sese toplanması zorunludur. Oyun sırasındayken herkes mikrofon kapatmalı. Oylamaya geçildiğinde mikrofonlar açılmalı. İnsanlar görevleri yaparken Impostor da, altta **birkaç kişi yazıyor...** yazdığı anda belli etmeden özel kanaldan bir kişiyi öldürüyor.')
    .setColor('#f7f2f2')
    message.channel.send(amongus)
    const amongus2 = new Discord.MessageEmbed()
    .addField(`Devamı;`,`Öldürülen kişinin otomatik olarak anında ismi değişir, bunu gören oyuncu !toplantı yazar ve oylama başlar. Herkes mikrofonunu açabilir ve ortaklaşa bir kişi belirlersiniz. Daha sonrasında lobiyi oluşturan kişi !öldür @etiket ile kullanıcıyı öldürür. Öldürdüğünüz oyuncuların Impostor mi? Crewmate mi? olduğunu bot belirtiyor, eğer Impostor ise oyunu bitirin, eğer değilse oyunu devam ettirin.`)
    .setColor('#f7f2f2')
    .setFooter(`ArdaDemr'e Ait Among Us Altyapısı`)
    message.channel.send(amongus2)
// ArdaDemr Youtube Kanalına ait AMONG US bot altyapısı
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['au'],
  permLevel: 0
};
 
exports.help = {
  name: 'amongus'
};