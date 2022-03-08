const {
  Message,
  Client,
  MessageEmbed,
  MessageButton,
  MessageActionRow,
  MessageSelectMenu,
} = require("discord.js");

module.exports = {
  name: "help",
  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const embed = new MessageEmbed()
      .setAuthor(
        `${client.user.username} Help Menu`,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setURL(message.author.displayAvatarURL({ dynamic: true }))
      .addFields(
        {
          name: `About Me`,
          value: `${client.user.username} is a program to make it easier for Digital Artists to find references. I'm gona generate reference you want, the embed will stay for 3, minutes`,
        },
        {
          name: "Reference List",
          value:
            "Anatomy\nBoy\nClothes\nColouring\nGirl\nLineart\nMood\nPose\nRock\nShadow\n",
        }
      )
      .setFooter("how to use? f!(theme), example: f!pose")
      .setColor("FE00FF");

    const row = new MessageActionRow().addComponents(
      new MessageButton()
        .setURL(`https://www.paypal.com/paypalme/sptra22`)
        .setStyle("LINK")
        .setLabel("Support Me"),

      new MessageButton()
        .setStyle("LINK")
        .setLabel("Submit Reference")
        .setURL(`https://forms.gle/m7xSvrwgVWXzZ75J9`)
    );

    await message.channel.send({ embeds: [embed], components: [row] });
  },
};
