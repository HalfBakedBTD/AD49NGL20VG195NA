const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
const chratis_cooldown_time = 10;
const chratis_talked_users = new Set();

const button_cooldown_time = 60;
const button_talked_users = new Set();

function ad(bot, message) {
   let adschannel = message.guild.channels.find(`name`, "ads");
   message.channel.createInvite()
    	.then(invite => {
	    bot.channels.filter(c => c.name === 'ads').forEach(channel => channel.send(`**${message.guild.name}** has been bumped.\n\nJOIN **---** 🔗 https://www.discord.gg/${invite.code} 🔗\n\nUser ID **---** ${message.author.id}\n\`\`\`AdBot: make a #adbot-updates channel for all the newest updates.\`\`\``));
        });
 setTimeout(() => ad(bot, message), 5*60000);
}  

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
	bot.channels.filter(c => c.name === 'adbot-status').forEach(channel => channel.send(`AdBot has just restarted.`)
});

bot.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  member.send(`Welcome to the server **${member}**!`);
  const channel = member.guild.channels.find('name', 'welcome');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  let random = Math.random() * 24 + 1;
  var number = Math.round(random)
  if (number === 1) {
    channel.send(`:loudspeaker: **${member}** just joined the server. Have a great time here!`);
  }
  if (number === 2) {
    channel.send(`:loudspeaker: Welcome **${member}**! We are glad you could make it!`)
  }
  if (number === 3) {
    channel.send(`:loudspeaker: Look who fell out of the sky! Its **${member}**!`)
  }
  if (number === 4) {
    channel.send(`:loudspeaker: **Someone** joined...`)
  }
  if (number === 5) {
    channel.send(`:loudspeaker: **${member}**, we are glad you joined! We need your help doing something!`)
  }
  if (number === 6) {
    channel.send(`:loudspeaker: A blue cat joined! We can name it **${member}**!`)
  }
  if (number === 7) {
    channel.send(`:loudspeaker: RUN! **${member}** just joined to eat our guts!`)
  }
  if (number === 8) {
    channel.send(`:loudspeaker: Look who the cat dragged in! Its **${member}**!`)
  }
  if (number === 9) {
    channel.send(`:loudspeaker: Wussup **${member}**?`)
  }
  if (number === 10) {
    channel.send(`:loudspeaker: Another Big Bang was just created! Look who evolved this time, its **${member}**!`)
  }
  if (number === 11) {
    channel.send(`:loudspeaker: **${member}** just rolled up.`)
  }
  if (number === 12) {
    channel.send(`:loudspeaker: A barrel fell out of the sky. When it broke **${member} fell out.**`)
  }
  if (number === 13) {
    channel.send(`:loudspeaker: **${member}** just popped in.`)
  }
  if (number === 14) {
    channel.send(`:loudspeaker: Oh Me! A giant just barfed up **${member}** into the server.`)
  }
  if (number === 15) {
    channel.send(`:loudspeaker: After a long, hard search, we found **${member}** and dragged him in.`)
  }
  if (number === 16) {
    channel.send(`:loudspeaker: Watch your back. **${member}** just joined.`)
  }
  if (number === 17) {
    channel.send(`:loudspeaker: Look who we won in the lottery. Its **${member}**. Lets try to return him.`)
  }
  if (number === 18) {
    channel.send(`:loudspeaker: **${member}** is new here...`)
  }
  if (number === 19) {
    channel.send(`:loudspeaker: The WarLord, **${member}**, just joined!`)
  }
  if (number === 20) {
    channel.send(`:loudspeaker: Discord is my city, or **${member}**'s...`)
  }
  if (number === 21) {
    channel.send(`:loudspeaker: All hail king/queen **${member}**.`)
  }
  if (number === 22) {
    channel.send(`:loudspeaker: Oh no, we have a stalker. [**${member}**]`)
  }
  if (number === 23) {
    channel.send(`:loudspeaker: BigEyed**${member}** popped in.`)
  }
  if (number === 24) {
    channel.send(`:loudspeaker: Hop-Hop, **${member}** came hopping in. *Kangaroo...*`)
  }
  if (number === 25) {
    channel.send(`:loudspeaker: The dead are rising starting with **${member}**!`)
  }
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  if (message.author.id === '314560720308142082') {
	  return message.channel.send("You are banned from AdBot.")
  }
  if (cmd === '^update') {
    if (!message.author.id === '346687165868015616') return message.channel.send("You cant use this command. It is owner only.");
    let adsupchannel = message.guild.channels.find(`name`, "adbot-updates");
    if(!adsupchannel) return message.channel.send("The bot is not properly set up! Please type `^test`.");
      if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Sorry, you don't have permissions to use this!");
      const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(`<@${message.author.id}>, I am servers message:\n\t${sayMessage}`);
    bot.channels.filter(c => c.name === 'adbot-updates').forEach(channel => channel.send(`**[------------------ UPDATE ------------------]**\n ${sayMessage}\n\n**[------------------ UPDATE ------------------]**\n`));
  } 
  if (message.content === '^help') {
    message.channel.send("DMed you! Check it out for all the info!")
    return message.author.send("**My Commands:** *all commands start with `^` prefix.*\n\n\t`help` shows this message.\n\n\t`ad` bumps your ad to the top of the servers.\n\n\t`custom-ad` sends a custom link to all servers.\n\n\n`WARNING` any NSFW or spam advertising will result in ban from using the bot. The ban will include no access to all bot features to ensure no further rule breaking.")
  }
  if (message.content === '^invite') {
    message.channel.send("I DMed you a link to add me to your server!")
    return message.author.send("**Invite me** to your discord:\n:link: https://discordapp.com/api/oauth2/authorize?client_id=421744026740457474&permissions=2146958583&scope=bot :link:")
  }
  if (message.content === '^test') {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No. Why would I test for you? I have a **Admin only** policy.");
    let adschannel = message.guild.channels.find(`name`, "ads");
    if(!adschannel) return message.channel.send("You don't have a **#ads** channel in the server! Please create one then type `^test`!");
    message.channel.send("```- Checkpoint 1: Basic AdBot command channel added.```")
		let adsupchannel = message.guild.channels.find(`name`, "adbot-updates");
    if(!adsupchannel) return message.channel.send("You don't have a **#adbot-updates** channel in the server! Please create one then type `^test`!");
    message.channel.send("```- Checkpoint 2: #adbot-updates channel has been added to keep you up to date.```")
    message.channel.send("**__ALL SYSTEMS OPERATIONAL!__** In other words you did everything right and AdBot can run properly!")
  }
  if (message.content === '^ad') {
    let adschannel = message.guild.channels.find(`name`, "ads");
    if(!adschannel) return message.channel.send("The bot is not properly set up for this command! Please type `^test`.");
		if (message.author.id !== '346687165868015616') {
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No. Why would I do this for you? I have a **Admin only** policy.");
		}
		if (message.author.id !== '346687165868015616') {
		  if (chratis_talked_users.has(message.author.id)) return message.reply("You have to wait before using this command again.\n*[10 min cooldown]*");
		}
		ad(bot, message)
    message.channel.send("Ads have been enabled!")
    chratis_talked_users.add(message.author.id);
    setTimeout(() => {
      chratis_talked_users.delete(message.author.id);
    }, chratis_cooldown_time * 60000);
  } 
  if (message.content === '^info') {
    message.author.send(`**AdBot:**\n\n\tRunning on: ${bot.guilds.size} servers.\n\n\tWatching: ${bot.users.size} online users.`)
    return message.channel.send("I DMed you my info!")
  }
  if (message.content.toLowerCase().includes('@everyone')) {
    return
  }
  if (message.content.toLowerCase().includes('@here')) {
    return
  }
  if (cmd === '^custom-ad') {
    let adschannel = message.guild.channels.find(`name`, "ads");
    if(!adschannel) return message.channel.send("The bot is not properly set up! Please type `^test`.");
		if (message.author.id !== '346687165868015616') {
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No. Why would I do this for you? I have a **Admin only** policy.");
		}
		if (message.author.id !== '346687165868015616') {
			if (chratis_talked_users.has(message.author.id)) return message.reply("You have to wait before using this command again.\n*[10 minute cooldown]*");
		}
		if (!message.content.toLowerCase().includes('https')) {
      return message.channel.send("`fail to send` **---** a link including `https` must be in the custom message.")
    }
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.createInvite()
    	.then(invite => {
	    bot.channels.filter(c => c.name === 'ads').forEach(channel => channel.send(`**${message.author.username}** just custom bumped!\n\nLINK **---** ${sayMessage}\n\nSender ID: ${message.author.id}`));
        });
    message.channel.send(`<@${message.author.id}>, Auto Ads enabled with message:\n\`\`\`${sayMessage}\`\`\``);
    chratis_talked_users.add(message.author.id);
    setTimeout(() => {
      chratis_talked_users.delete(message.author.id);
    }, chratis_cooldown_time * 60000);
  }
});

//Ik5KSLzA6C
//test lol note thingh
//-----------------------------------------------------------
//    [do `^help` for help and join official server!]

bot.login(process.env.BOT_TOKEN);
