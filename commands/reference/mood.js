const { Message, Client, MessageEmbed } = require("discord.js");

const { pagination } = require("reconlx");

module.exports = {

  name: "mood",

  aliases: ['ambient'],

  /**

   *

   * @param {Client} client

   * @param {Message} message

   * @param {String[]} args

   */

  run: async (client, message, args) => {

    

     

     const embed1 = new MessageEmbed()

      .setTitle('Building Mood')

      .setImage('https://media.discordapp.net/attachments/950094766048178197/950094815243173988/FB_IMG_1646590211987.jpg')

      .setColor('RANDOM')

      .setFooter('Credit: @shnerzlrks')
     
     const embed2 = new MessageEmbed()

      .setTitle('Switchup Mood')

      .setImage('https://media.discordapp.net/attachments/950094766048178197/950094815549333665/FB_IMG_1646590214356.jpg')

      .setColor('RANDOM')

      .setFooter('Credit: @shnerzlrks')
     
     const embed3 = new MessageEmbed()

      .setTitle('changeit up')

      .setImage('https://media.discordapp.net/attachments/950094766048178197/950094815821975613/FB_IMG_1646590216530.jpg')

      .setColor('RANDOM')

      .setFooter('Credit: @shnerzlrks')

      const embed4 = new MessageEmbed()

      .setTitle('Moment is Important')

      .setImage('https://media.discordapp.net/attachments/950094766048178197/950094816245596190/FB_IMG_1646590219037.jpg')

      .setColor('RANDOM')

      .setFooter('Credit: @shnerzlrks')

      const embed5 = new MessageEmbed()

      .setTitle('Temperature')

      .setImage('https://media.discordapp.net/attachments/950094766048178197/950094816505655326/FB_IMG_1646590221653.jpg')

      .setColor('RANDOM')

      .setFooter('Credit: ')



      

      const embeds = [

        embed1,
        embed2,
        embed3,
embed4,
embed5
        

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
