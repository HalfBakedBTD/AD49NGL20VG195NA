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
 setTimeout(() => ad(bot, message), 15*60000);
}

function finished(bot, message) {
  message.channel.send(`\`AdBot emoji has been added to the server!\``)
}

function emojis(bot, message) {
	message.guild.createEmoji('./pictures/Sign Airhorn.jpg', 'adbot-sign')
    .then(emoji => console.log(`AdBot emoji added! You can now type \`:adbot:\` to see it!`))
   	.catch(console.error);
 setTimeout(() => finished(bot, message), 2*100);
}

function emoji(bot, message) {
	message.guild.createEmoji('./pictures/Static Airhorn.jpg', 'static-adbot')
    .then(emoji => console.log(`AdBot emoji added! You can now type \`:adbot:\` to see it!`))
   	.catch(console.error);
 setTimeout(() => emojis(bot, message), 2*100);
}

function emoj(bot, message) {
	message.guild.createEmoji('./pictures/Sparkle Airhorn.jpg', 'sparkle-adbot')
    .then(emoji => console.log(`AdBot emoji added! You can now type \`:adbot:\` to see it!`))
   	.catch(console.error);
 setTimeout(() => emoji(bot, message), 2*100);
}

function emo(bot, message) {
	message.guild.createEmoji('./pictures/Japan Airhorn.png', 'japan-adbot')
    .then(emoji => console.log(`AdBot emoji added! You can now type \`:adbot:\` to see it!`))
    .catch(console.error);
 setTimeout(() => emoj(bot, message), 2*100);
}

function em(bot, message) {
	message.guild.createEmoji('./pictures/MLG Airhorn.jpg', 'mlg-adbot')
    .then(emoji => console.log(`AdBot emoji added! You can now type \`:adbot:\` to see it!`))
   	.catch(console.error);
 setTimeout(() => emo(bot, message), 2*100);
}

function e(bot, message) {
	message.guild.createEmoji('./pictures/airhorn.png', 'adbot')
    .then(emoji => console.log(`AdBot emoji added! You can now type \`:adbot:\` to see it!`))
    .catch(console.error);
 setTimeout(() => em(bot, message), 2*100);
}

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
	bot.channels.filter(c => c.name === 'adbot-status').forEach(channel => channel.send(`AdBot has just restarted.`));
});

bot.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  member.send(`I, AdBot, welcome you to this new server you just joined.\n\n**About**: I am dedicated to help grow servers one member at a time!\n\nType \`^help\` for all my commands or \`^invite\` to add me to your server!`);
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
  if (message.content === '^dmhelp') {
		message.channel.send(`I have DMed you <@${message.author.id}>`)
    return message.author.send(`<@${message.author.id}> here is my list of commands:\n:question: **^help** - Shows list of commands in the channel the command is sent in.\n:grey_question: **^dmhelp** - DMs you a list of my commands.\n:closed_book: **^test** - Helps you set up your server.\n:open_file_folder: **^create** - Automaticly sets up your server for you.\n\n:hammer: **^ban** - Bans a member in the server.\n:boot: **^kick** - Kicks a member in the server.\n:recycle: **^recycle** - Clears messages. Equivilent to \`purge\` or \`clear\` on other bots.\n\n:arrow_heading_up: **^ad** - Bumps your server to the top of the advertising slot.\n:stuck_out_tongue_winking_eye: **^emoji** - Adds the AdBot emoji to your server.\n:mailbox: **^info** - Gives various info about AdBot.\n\n\n:e_mail: **^invite** - Sends you and invite to add AdBot to your server.\n:pizza: **^server** - Links you to AdBot's official server.\n\n\`WARNING\` any NSFW or spam server names will result in ban from using the bot. The ban will include no access to all bot features to ensure no further rule breaking.`)
  }
	if (message.content === '^help') {
    return message.channel.send(`<@${message.author.id}> here is my list of commands:\n:question: **^help** - Shows list of commands in the channel the command is sent in.\n:grey_question: **^dmhelp** - DMs you a list of my commands.\n:closed_book: **^test** - Helps you set up your server.\n:open_file_folder: **^create** - Automaticly sets up your server for you.\n\n:hammer: **^ban** - Bans a member in the server.\n:boot: **^kick** - Kicks a member in the server.\n:recycle: **^recycle** - Clears messages. Equivilent to \`purge\` or \`clear\` on other bots.\n\n:arrow_heading_up: **^ad** - Bumps your server to the top of the advertising slot.\n:stuck_out_tongue_winking_eye: **^emoji** - Adds the AdBot emoji to your server.\n:mailbox: **^info** - Gives various info about AdBot.\n\n\n:e_mail: **^invite** - Sends you and invite to add AdBot to your server.\n:pizza: **^server** - Links you to AdBot's official server.\n\n\`WARNING\` any NSFW or server spam names will result in ban from using the bot. The ban will include no access to all bot features to ensure no further rule breaking.`)
  }
  if (message.content === '^invite') {
    message.channel.send("I DMed you a link to add me to your server!")
    return message.channel.send("**Invite me** to your discord:\n:link: https://discordapp.com/api/oauth2/authorize?client_id=421744026740457474&permissions=2146958583&scope=bot :link:")
  }
  if (message.content === '^test') {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No. Why would I test for you? I have a **Admin only** policy.");
    let adschannel = message.guild.channels.find(`name`, "ads");
    if(!adschannel) return message.channel.send("You don't have a **#ads** channel in the server! Please create one then type `^test`!");
    message.channel.send("```- Checkpoint 1: Basic AdBot command channel added.```")
		let logschannel = message.guild.channels.find(`name`, "logs");
    if(!logschannel) return message.channel.send("You don't have a **#logs** channel in the server! Please create one then type `^test`!");
    message.channel.send("```- Checkpoint 2: #logs channel has been added to record moderation data.```")
		let adsupchannel = message.guild.channels.find(`name`, "adbot-updates");
    if(!adsupchannel) return message.channel.send("You don't have a **#adbot-updates** channel in the server! Please create one then type `^test`!");
    message.channel.send("```- Checkpoint 3: #adbot-updates channel has been added to keep you up to date.```")
		let welchannel = message.guild.channels.find(`name`, "adbot-updates");
    if(!welchannel) return message.channel.send("You don't have a **#welcome** channel in the server! Please create one then type `^test`!");
    message.channel.send("```- Checkpoint 4: #welcome channel has been added to welcome newcomers.```")
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
	if (message.content === '^server') {
		return message.channel.send(`<@${message.author.id}>, here is my server: **:link: https://discord.gg/4T22QKn :link:**`)
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
	if (message.content === '^create') {
		if (message.author.id !== '346687165868015616') {
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No. Why would I do this for you? I have a **Admin only** policy.");
		}
    message.channel.send(`:page_facing_up: **Info** - This command is used to auto create channels needed for bot setup.\n\n:dividers: Use - \`^create <creation level from 1-4>\`\n\n:ice_cream: Example - \`^create 4\``)
	}
	if (message.content === '^create 1') {
		if (message.author.id !== '346687165868015616') {
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No. Why would I do this for you? I have a **Admin only** policy.");
		}
		message.channel.send("`Creating dope new channels!`")
		message.guild.createChannel('ads', 'text')
      .then(console.log)
      .catch(console.error);
		message.channel.send("`Construction finished.`")
	}
	if (message.content === '^create 2') {
		if (message.author.id !== '346687165868015616') {
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No. Why would I do this for you? I have a **Admin only** policy.");
		}
		message.channel.send("`Creating dope new channels!`")
		message.guild.createChannel('welcome', 'text')
      .then(console.log)
      .catch(console.error);
		message.guild.createChannel('ads', 'text')
      .then(console.log)
      .catch(console.error);
		message.channel.send("`Construction finished.`")
	}
	if (message.content === '^create 3') {
		if (message.author.id !== '346687165868015616') {
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No. Why would I do this for you? I have a **Admin only** policy.");
		}
		message.channel.send("`Creating dope new channels!`")
		message.guild.createChannel('welcome', 'text')
      .then(console.log)
      .catch(console.error);
		message.guild.createChannel('ads', 'text')
      .then(console.log)
      .catch(console.error);
		message.guild.createChannel('adbot-updates', 'text')
      .then(console.log)
      .catch(console.error);
		message.channel.send("`Construction finished.`")
	}
	if (message.content === '^create 4') {
		if (message.author.id !== '346687165868015616') {
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No. Why would I do this for you? I have a **Admin only** policy.");
		}
		message.channel.send("`Creating dope new channels!`")
		message.guild.createChannel('welcome', 'text')
      .then(console.log)
      .catch(console.error);
		message.guild.createChannel('ads', 'text')
      .then(console.log)
      .catch(console.error);
		message.guild.createChannel('adbot-updates', 'text')
      .then(console.log)
      .catch(console.error);
		message.guild.createChannel('logs', 'text')
      .then(console.log)
      .catch(console.error);
		message.channel.send("`Construction finished.`")
	}
	if (message.content === '^emoji') {
	  e(bot, message)
	}
	if (message.content.startsWith('^kick')) {
		if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Sorry, you don't have permissions to use this!");
		
		let logschannel = message.guild.channels.find(`name`, "logs");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a member!");
    if(!member.kickable) 
      return message.reply("I cannot kick this user!");
    
    // slice(1) removes the first part, which here should be the user mention!
    let reason = args.slice(1).join(' ');
    if(!reason)
      return message.reply("Please indicate a reason for the kick!");
    
    await member.kick(reason)
      .catch(error => message.reply(`Sorry, I couldn't kick because of : ${error}`));
    message.channel.send(`${member.user.username} has been kicked by ${message.author.username} because: ***${reason}***`);
    if(!logschannel) return message.channel.send("Make a channel named `#logs` to record moderation data.");
		
		logschannel.send(`:boot: **__User Kicked__** :boot: \n\n**:anger: Kicker:** <@${message.author.id}>\n\n**:scream: Kicked:** <@${member.user.id}>\n\n**:newspaper: Reason:** ${reason}`)
	}
	if (message.content.startsWith('^ban')) {
		if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Sorry, you don't have permissions to use this!");
    let logschannel = message.guild.channels.find('name', 'logs');
		let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention member to ban!");
    if(!member.bannable) 
      return message.reply("I cannot ban this user!");

    let reason = args.slice(1).join(' ');
    if(!reason)
      return message.reply("Please indicate a reason for the ban!");
    
    await member.ban(reason)
      .catch(error => message.reply(`Sorry, I couldn't ban because of : ${error}`));
    message.channel.send(`${member.user.username} has been banned by ${message.author.username} because: **__${reason}__**`);
		if (!logschannel) return message.channel.send('If you create a `#logs` channel I can record your moderation data!')
		logschannel.send(`:hammer: **__User Banned__** :hammer: \n\n**:anger: Banner:** <@${message.author.id}>\n\n**:scream: Banned:** <@${member.user.id}>\n\n**:newspaper: Reason:** ${reason}`)    
	}
	if (message.content.startsWith('^recycle')) {
		let logschannel = message.guild.channels.find('name', 'logs');
		if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No. Why would I purge for you?");
  	if(!args[0]) return message.channel.send(`:page_facing_up: **Info** - This command is used to clear messages.\n\n:dividers: Use - \`^recycle <number of messages to purge>\`\n\n:ice_cream: Example - \`^recycle 8\``);
  	message.channel.bulkDelete(args[0]).then(() => {
			message.channel.send(`**__Cleared ${args[0]} messages.__**`).then(msg => msg.delete(8000));
		});
		if (!logschannel) return message.channel.send('If you create a `#logs` channel I can record your moderation data!')
		logschannel.send(`:recycle: **__Messages Recycled__** :recycle:\n\n:person_with_blond_hair: **User:** <@${message.author.id}>\n\n:hash: **Channel:** <#${message.channel.id}>\n\n:fire: **Amount:** ${args[0]}`)
	}
});

//Ik5KSLzA6C
//test lol note thingh
//-----------------------------------------------------------
//    [do `^help` for help and join official server!]

bot.login(process.env.BOT_TOKEN);
