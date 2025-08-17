require('dotenv').config();

const { Client, GatewayIntentBits } = require('discord.js');
const token = process.env.DISCORD_TOKEN;

if (!token) {
	console.error('Error: DISCORD_TOKEN not found in environment variables.');
	process.exit(1);
}

const client = new Client({ intents: [
	GatewayIntentBits.Guilds,
	GatewayIntentBits.GuildMessages,
	GatewayIntentBits.MessageContent,
] });

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.login(token);