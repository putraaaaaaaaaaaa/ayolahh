const { Message, Client, MessageEmbed } = require("discord.js");
const { pagination } = require("reconlx");

module.exports = {
  name: "clothes",
  aliases: ['clothe'],
  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {

    const embed1 = new MessageEmbed()
      .setTitle('Maid Costume')
      .setImage('https://imgur.com/WTDlke7.png')
      .setColor('RANDOM')
      .setFooter("Credit: ");

    const embed2 = new MessageEmbed()
      .setTitle('Maid Costume')
      .setImage('https://imgur.com/CKqq1PC.png')
      .setColor('RANDOM')
      .setFooter("Credit: ")
      
      const embed4 = new MessageEmbed()
      .setTitle('Cloak')
      .setImage('https://imgur.com/cByzDmb.png')
      .setColor('RANDOM')
      .setFooter('Credit: BLUE Z')
      
      const embed5 = new MessageEmbed()
      .setTitle('Gown')
      .setImage('https://imgur.com/ZP7nilv.png')
      .setColor('RANDOM')
      .setFooter('Credit: @Chamae5959')
      
      const embed6 = new MessageEmbed()
      .setTitle('Skirt')
      .setImage('https://imgur.com/elo4sek.png')
      .setColor('RANDOM')
      .setFooter('Credit: BLUE Z')
      
      const embed7 = new MessageEmbed()
      .setTitle('Skirt school')
      .setImage('https://imgur.com/FAId9PC.png')
      .setColor('RANDOM')
      .setFooter('Credit: ')
      
      const embed8 = new MessageEmbed()
      .setTitle('Skirts')
      .setImage('https://imgur.com/reZHcO3.png')
      .setColor('RANDOM')
      .setFooter('Credit: ')
      
      const embed9 = new MessageEmbed()

      .setTitle('Uniform')

      .setImage('https://media.discordapp.net/attachments/950094766048178197/950650366985404427/FB_IMG_1646723078644.jpg')

      .setColor('RANDOM')

      .setFooter('Credit: ')
      
      const embed10 = new MessageEmbed()

      .setTitle('Uniform')

      .setImage('https://media.discordapp.net/attachments/950094766048178197/950650367325110312/FB_IMG_1646723076280.jpg')

      .setColor('RANDOM')

      .setFooter('Credit: ')
      
      const embed11 = new MessageEmbed()

      .setTitle('Uniform')

      .setImage('https://media.discordapp.net/attachments/950094766048178197/950650368042356766/FB_IMG_1646723070511.jpg')

      .setColor('RANDOM')

      .setFooter('Credit: ')




    const embeds = [embed1, embed2, embed4, embed5, embed6, embed7, embed8, embed9, embed10]


    pagination({
      embeds: embeds,
      channel: message.channel,
      author: message.author,
      pageTravel: true,
      time: 180000,
      button: [
        {
          name: 'next',
          emoji: '<:kanan:886854524562722857>',
          style: 'SUCCESS',
        },
        {
          name: 'previous',
          emoji: '<:kiri:886854576303665202>',
          style: 'SUCCESS',
        },
        {
          name: 'number',
          emoji: '<:pesawat:886854458930241546>',
          style: 'SECONDARY',
        }
        
      ]

    })
  }
}
