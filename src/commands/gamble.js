const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('gamble')
        .setDescription('What amount you want to gamble?'),
    async execute(interaction) {
        await interaction.reply('Amount:!');
    },
};