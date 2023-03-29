# Discord.js-Template
## What is Scuffed's Discord.JS Template?
Scuffed's Discord.JS template is a simple template to make discord.js bot setup easier, this includes a config.json file where you'd input token, status, etc.
It also includes code snippets to make it eaiser.

# Tutorial

### Prequisuits
1. NPM
2. Node.JS
3. Basic JavaScript knowledge

## Setup
To setup this template, follow these steps
1. Download the .zip from [here](https://github.com/ScuffedItalian/Discord.js-Template/releases)
2. Drag the .zip and unzip it inside a file
3. Make a new NPM "project" via the `npm init` command
4. After step 3, download discord.js via the `npm i discord.js` command
5. Voila!

## Config.JSON file
* The config file contains all the configuration stuff for your bot.
```json
{
    "token": "",
    "status": "",
    "username": "" 
}
```
1. Token: Paste your bot's token into the pair of `" "`
2. Status: Paste your bot's status you'd like it to have, this is optional ***EXAMPLE:***
<img width="233" alt="Screen Shot 2023-03-29 at 2 30 34 PM" src="https://user-images.githubusercontent.com/110801525/228672271-c4223ed0-f533-43f0-8ee1-a4d0a7d312ef.png">
3. Username: this is the username of the bot, this is required to an extent. You can COMPLETLY remove this in the index.js file ***EXAMPLE:***
<img width="233" alt="Screen Shot 2023-03-29 at 2 30 34 PM" src="https://user-images.githubusercontent.com/110801525/228672271-c4223ed0-f533-43f0-8ee1-a4d0a7d312ef.png">

## Code Snippets
To see the list of code snippets avaliable in this template, you can type "ScuffedTemp" and they will all come up ***EXAMPLE:**
<img width="515" alt="Screen Shot 2023-03-29 at 2 37 24 PM" src="https://user-images.githubusercontent.com/110801525/228673535-fa44df37-3b30-44c1-988b-4d313db8e951.png">

I'll go over ONE snippet.

### Basic SlashCommand Snippet
```js
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
```

* NOTE --> THe client.once stuff is already present in the base index.js, same with client.on
1. `const command = new SlashCommandBuilder()` --> This line of code initiates a new command, change the __command__ part to any name, you'll need it later so make the name meaningful
2. `.setName('ping')` --> This line sets the command name
3. `.setDescription` --> This line sets the command's description
4. `await client.application.commands.create(commandData)` --> This line registers the command into discord
5. All the stuff under client.on manages the event stuff for the command, when you make multiple commands you put them under there.

# Other
## Repo contributions
If you'd like to contribute to this repo, you may, open a pull request and I may accept it. You'll be added to the list of helpers

## Contact
If you'd like to contact me for help --> `ScuffedItalian#5158`

## Links
Link to the discord.js documentation --> [here](https://discordjs.guide/#before-you-begin)
Link to a good discord.js tutorial series --> [here](https://www.youtube.com/watch?v=eMJfBzUAyEY&list=PL5M74VagS4g9k_o0V8c9gSC0bsBSg2Qlc) **This is a really good tutorial and I advise watching it HEAVILY!**



