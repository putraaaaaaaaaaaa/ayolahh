const { Message, Client, MessageEmbed } = require("discord.js");
const { pagination } = require("reconlx");

module.exports = {
  name: "rock",
  aliases: ['rocks'],
  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    
     
     const embed1 = new MessageEmbed()
      .setTitle('River Rocks')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/950652168652857364/274715009_1743724222464683_7588772253094237561_n.png')
      .setColor('RANDOM')
      .setFooter('Credit: ')
      
      const embed2 = new MessageEmbed()

      .setTitle('Big Rock')

      .setImage('https://media.discordapp.net/attachments/950094766048178197/950652168938090556/274706749_1743724182464687_8535931594790856184_n.png')

      .setColor('RANDOM')

      .setFooter('Credit: '
      
      const embed3 = new MessageEmbed()

      .setTitle('Stone')

      .setImage('https://media.discordapp.net/attachments/950094766048178197/950652169193934918/274651741_1743724135798025_3048215681915109192_n.png')

      .setColor('RANDOM')

      .setFooter('Credit: ')
      
      const embed4 = new MessageEmbed()

      .setTitle('Rock')

      .setImage('https://media.discordapp.net/attachments/950094766048178197/950652292271583242/274688558_1743724459131326_2344267379543896833_n.png')

      .setColor('RANDOM')

      .setFooter('Credit: ')



      
      const embeds = [
        embed1,
        embed2,
        embed3,
        embed4
        ]
      
      
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
