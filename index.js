// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits, SlashCommandBuilder, EmbedBuilder, ButtonBuilder, MessageButton, ActionRowBuilder, ButtonStyle, StringSelectMenuBuilder } = require('discord.js');
const fs = require("fs");
const {configuration, style} = require("./configReader")

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });


client.once(Events.ClientReady, async c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
	const command = new SlashCommandBuilder()
	  .setName('ping') // Name
	  .setDescription('Ping Pong command'); // Description
	
	// Register the command with Discord
	const commandData = command.toJSON();
	await client.application.commands.create(commandData);
	
	
	
	
});









// Handle the interaction
client.on('interactionCreate', async (interaction) => {
	if (!interaction.isCommand()) return;
  
	if (interaction.commandName === 'ping') {
	  await interaction.reply('Pong!');
	}
  });



client.login(configuration.botToken);






