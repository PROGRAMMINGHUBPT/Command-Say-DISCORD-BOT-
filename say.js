const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
        message.delete()
        let guild = client.guilds.cache.get("coloca o id do servidor !");
        let embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setAuthor(
             `${message.author.username}`,
             message.author.displayAvatarURL()
        )
        .setDescription(message.content.split(" ").slice(1).join(" "))
        .setThumbnail("https://cdn.discordapp.com/attachments/796673308509732865/846667748871766027/giphy_1.gif")
        .setFooter(`${guild.name} • [PROGRAMMING HUB PT`)
        message.channel.send(embed)
    }
