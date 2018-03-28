const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
const chratis_cooldown_time = 10;
const chratis_talked_users = new Set();

const warn_cooldown_time = 1440;
const warn_talked_users = new Set();

const warntwo_cooldown_time = 1440;
const warntwo_talked_users = new Set();

const button_cooldown_time = 60;
const button_talked_users = new Set();

const twitch_cooldown_time = 60;
const twitch_talked_users = new Set();

function ad(bot, message) {
   let adschannel = message.guild.channels.find(`name`, "ads");
   message.channel.createInvite()
    	.then(invite => {
	    bot.channels.filter(c => c.name === 'ads').forEach(channel => channel.send(`:oncoming_police_car: **${message.guild.name}** has been bumped.\n\n:notepad_spiral: Genre: **Not Set\n\n**:link: Join **-** https://discord.gg/${invite.code}\n\n:globe_with_meridians: User ID **-** ${message.author.id}\n\`\`\`AdBot: make a #adbot-updates channel for all the newest updates.\`\`\``));
        });
 setTimeout(() => ad(bot, message), 30*60000);
}

function twitch(bot, message, args) {
   let adschannel = message.guild.channels.find(`name`, "ads");
	 const sayMessage = args.join(" ");
	 bot.channels.filter(c => c.name === 'ads').forEach(channel => channel.send(`:oncoming_police_car: **${message.guild.name}** has been bumped.\n\n:notepad_spiral: Genre: **Twitch\n\n**💜 Follow **-** https://www.twitch.tv/${sayMessage}\n\n:globe_with_meridians: User ID **-** ${message.author.id}\n\`\`\`AdBot: make a #adbot-updates channel for all the newest updates.\`\`\``));
 setTimeout(() => twitch(bot, message, args), 30*60000);
}

function invites(bot, message) {
   bot.channels.forEach(channel => {
		 channel.createInvite()
    	.then(invite => message.channel.send(`https://discord.gg/${invite.code}`));
	 });
}

function animead(bot, message) {
   let adschannel = message.guild.channels.find(`name`, "ads");
   message.channel.createInvite()
    	.then(invite => {
	    bot.channels.filter(c => c.name === 'ads').forEach(channel => channel.send(`:oncoming_police_car: **${message.guild.name}** has been bumped.\n\n:cartwheel: Genre: **Anime\n\n**:link: Join **-** https://discord.gg/${invite.code}\n\n:globe_with_meridians: User ID **-** ${message.author.id}\n\`\`\`AdBot: make a #adbot-updates channel for all the newest updates.\`\`\``));
        });
 setTimeout(() => animead(bot, message), 30*60000);
}

function comedyad(bot, message) {
   let adschannel = message.guild.channels.find(`name`, "ads");
   message.channel.createInvite()
    	.then(invite => {
	    bot.channels.filter(c => c.name === 'ads').forEach(channel => channel.send(`:oncoming_police_car: **${message.guild.name}** has been bumped.\n\n:laughing: Genre: **Comedy\n\n**:link: Join **-** https://discord.gg/${invite.code}\n\n:globe_with_meridians: User ID **-** ${message.author.id}\n\`\`\`AdBot: make a #adbot-updates channel for all the newest updates.\`\`\``));
        });
 setTimeout(() => comedyad(bot, message), 15*60000);
}

function programmingad(bot, message) {
   let adschannel = message.guild.channels.find(`name`, "ads");
   message.channel.createInvite()
    	.then(invite => {
	    bot.channels.filter(c => c.name === 'ads').forEach(channel => channel.send(`:oncoming_police_car: **${message.guild.name}** has been bumped.\n\n:file_folder: Genre: **Programming\n\n**:link: Join **-** https://discord.gg/${invite.code}\n\n:globe_with_meridians: User ID **-** ${message.author.id}\n\`\`\`AdBot: make a #adbot-updates channel for all the newest updates.\`\`\``));
        });
 setTimeout(() => programmingad(bot, message), 30*60000);
}

function dramaad(bot, message) {
   let adschannel = message.guild.channels.find(`name`, "ads");
   message.channel.createInvite()
    	.then(invite => {
	    bot.channels.filter(c => c.name === 'ads').forEach(channel => channel.send(`:oncoming_police_car: **${message.guild.name}** has been bumped.\n\n:clapper: Genre: **Drama\n\n**:link: Join **-** https://discord.gg/${invite.code}\n\n:globe_with_meridians: User ID **-** ${message.author.id}\n\`\`\`AdBot: make a #adbot-updates channel for all the newest updates.\`\`\``));
        });
 setTimeout(() => dramaad(bot, message), 30*60000);
}

function gamingad(bot, message) {
   let adschannel = message.guild.channels.find(`name`, "ads");
   message.channel.createInvite()
    	.then(invite => {
	    bot.channels.filter(c => c.name === 'ads').forEach(channel => channel.send(`:oncoming_police_car: **${message.guild.name}** has been bumped.\n\n:video_game: Genre: **Gaming\n\n**:link: Join **-** https://discord.gg/${invite.code}\n\n:globe_with_meridians: User ID **-** ${message.author.id}\n\`\`\`AdBot: make a #adbot-updates channel for all the newest updates.\`\`\``));
        });
 setTimeout(() => gamingad(bot, message), 30*60000);
}

function musicad(bot, message) {
   let adschannel = message.guild.channels.find(`name`, "ads");
   message.channel.createInvite()
    	.then(invite => {
	    bot.channels.filter(c => c.name === 'ads').forEach(channel => channel.send(`:oncoming_police_car: **${message.guild.name}** has been bumped.\n\n:musical_note: Genre: **Music/Voice Chat\n\n**:link: Join **-** https://discord.gg/${invite.code}\n\n:globe_with_meridians: User ID **-** ${message.author.id}\n\`\`\`AdBot: make a #adbot-updates channel for all the newest updates.\`\`\``));
        });
 setTimeout(() => musicad(bot, message), 30*60000);
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
  //member.send(`I, AdBot, welcome you to this new server you just joined.\n\n**About**: I am dedicated to help grow servers one member at a time!\n\nType \`^help\` for all my commands or \`^invite\` to add me to your server!`);
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
	if (message.content === '^genres') {
		return message.channel.send(`<@${message.author.id}> here are my genres:\n\t\t\`anime\`\n\t\t\`comedy\`\n\t\t\`drama\`\n\t\t\`programming\`\n\t\t\`music\`\n\t\t\`gaming\`\n\nYou can use it like: \`^ad <genre>\``)	
	}
	if (message.content.startsWith('^warn')) {
		let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Couldn't find user.");
    let rreason = args.join(" ").slice(22);
		
    //let reportEmbed = new Discord.RichEmbed()
    //.setDescription("Reports")
    //.setColor("#15f153")
    //.addField("Reported User", `${rUser} with ID: ${rUser.id}`)
    //.addField("Reported By", `${message.author} with ID: ${message.author.id}`)
    //.addField("Channel", message.channel)
    //.addField("Time", message.createdAt)
    //.addField("Reason", rreason);
		
		message.delete().catch(O_o=>{});
		rUser.send(`You have been warned in **${message.guild.name}** for \`${rreason}\``)

    let reportschannel = message.guild.channels.find(`name`, "logs");
    if(!reportschannel) return message.channel.send("Create a channel with the name **#logs** to store reports.");
 
    reportschannel.send(`:warning: **__WARNING__** :warning:\n\n:cop: Warned by: <@${message.author.id}>\n\n:bookmark_tabs: Warned: <@${rUser.id}>\n\n:clock1030: Time: ${message.createdAt}\n\n:tickets: Reason: ${rreason}`);
		if (warntwo_talked_users.has(rUser.id)) {
			await rUser.kick(rreason)
      	.catch(error => message.reply(`Sorry, I couldn't ban because of : ${error}`));
			rUser.send(`<@${message.author.id}> has kicked you from ${message.guild.name} because you have committed 3 violations today.`)
			return message.channel.send(`<@${message.author.id}>, I have kicked <@${rUser.id}> because he has committed 3 violations today.`)
		}
		if (warn_talked_users.has(rUser.id)) {
			warntwo_talked_users.add(rUser.id);
    	setTimeout(() => {
      	warntwo_talked_users.delete(rUser.id);
    	}, warntwo_cooldown_time * 60000);
			return
		}
		warn_talked_users.add(rUser.id);
    setTimeout(() => {
      warn_talked_users.delete(rUser.id);
    }, warn_cooldown_time * 60000);
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
    return message.author.send(`<@${message.author.id}> here is my list of commands:\n:question: **^help** - Shows list of commands in the channel the command is sent in.\n:grey_question: **^dmhelp** - DMs you a list of my commands.\n:closed_book: **^test** - Helps you set up your server.\n:open_file_folder: **^create** - Automaticly sets up your server for you.\n\n:hammer: **^ban** - Bans a member in the server.\n:boot: **^kick** - Kicks a member in the server.\n:recycle: **^recycle** - Clears messages. Equivilent to \`purge\` or \`clear\` on other bots.\n:cloud: **^purge-check** - Checks and tells you how many people will be pruned.\n:thunder_cloud_rain: **^purge** - Prunes members who have been inactive for a week.\n⚠ **^warn** - Warns a member in the server.\n\n:arrow_heading_up: **^ad** - Bumps your server to the top of the advertising slot.\n:stuck_out_tongue_winking_eye: **^emoji** - Adds the AdBot emoji to your server.\n:gear: **^genres** - Displays all current genres the bot has.\n:mailbox: **^info** - Gives various info about AdBot.\n\n:e_mail: **^invite** - Sends you and invite to add AdBot to your server.\n:pizza: **^server** - Links you to AdBot's official server.\n\n\`WARNING\` any NSFW or spam server names will result in ban from using the bot. The ban will include no access to all bot features to ensure no further rule breaking.`)
  }
	if (message.content === '^help') {
    return message.channel.send(`<@${message.author.id}> here is my list of commands:\n:question: **^help** - Shows list of commands in the channel the command is sent in.\n:grey_question: **^dmhelp** - DMs you a list of my commands.\n:closed_book: **^test** - Helps you set up your server.\n:open_file_folder: **^create** - Automaticly sets up your server for you.\n\n:hammer: **^ban** - Bans a member in the server.\n:boot: **^kick** - Kicks a member in the server.\n:recycle: **^recycle** - Clears messages. Equivilent to \`purge\` or \`clear\` on other bots.\n:cloud: **^purge-check** - Checks and tells you how many people will be pruned.\n:thunder_cloud_rain: **^purge** - Prunes members who have been inactive for a week.\n⚠ **^warn** - Warns a member in the server.\n\n:arrow_heading_up: **^ad** - Bumps your server to the top of the advertising slot.\n:stuck_out_tongue_winking_eye: **^emoji** - Adds the AdBot emoji to your server.\n:gear: **^genres** - Displays all current genres the bot has.\n:mailbox: **^info** - Gives various info about AdBot.\n\n:e_mail: **^invite** - Sends you and invite to add AdBot to your server.\n:pizza: **^server** - Links you to AdBot's official server.\n\n\`WARNING\` any NSFW or server spam names will result in ban from using the bot. The ban will include no access to all bot features to ensure no further rule breaking.`)
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
    message.channel.send("`Ads have been enabled!`\nYou can add a genre behind your ad. Type `^genres` for more info.")
    chratis_talked_users.add(message.author.id);
    setTimeout(() => {
      chratis_talked_users.delete(message.author.id);
    }, chratis_cooldown_time * 60000);
  }
	if (message.content.startsWith('^twitch ')) {
		let adschannel = message.guild.channels.find(`name`, "ads");
    if(!adschannel) return message.channel.send("The bot is not properly set up for this command! Please type `^test`.");
		if (message.author.id !== '346687165868015616') {
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No. Why would I do this for you? I have a **Admin only** policy.");
		}
		if (message.author.id !== '346687165868015616') {
		  if (twitch_talked_users.has(message.author.id)) return message.reply("You have to wait before using this command again.\n*[10 min cooldown]*");
		}
	  twitch(bot, message, args)
		message.channel.send("`Twitch ads have been enabled!`")
    twitch_talked_users.add(message.author.id);
    setTimeout(() => {
      twitch_talked_users.delete(message.author.id);
    }, twitch_cooldown_time * 60000);
  }
  if (message.content === '^ad anime') {
    let adschannel = message.guild.channels.find(`name`, "ads");
    if(!adschannel) return message.channel.send("The bot is not properly set up for this command! Please type `^test`.");
		if (message.author.id !== '346687165868015616') {
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No. Why would I do this for you? I have a **Admin only** policy.");
		}
		if (message.author.id !== '346687165868015616') {
		  if (chratis_talked_users.has(message.author.id)) return message.reply("You have to wait before using this command again.\n*[10 min cooldown]*");
		}
		animead(bot, message)
    message.channel.send("`Ads with anime genre have been enabled!`")
    chratis_talked_users.add(message.author.id);
    setTimeout(() => {
      chratis_talked_users.delete(message.author.id);
    }, chratis_cooldown_time * 60000);
  } 
	if (message.content === '^ad comedy') {
    let adschannel = message.guild.channels.find(`name`, "ads");
    if(!adschannel) return message.channel.send("The bot is not properly set up for this command! Please type `^test`.");
		if (message.author.id !== '346687165868015616') {
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No. Why would I do this for you? I have a **Admin only** policy.");
		}
		if (message.author.id !== '346687165868015616') {
		  if (chratis_talked_users.has(message.author.id)) return message.reply("You have to wait before using this command again.\n*[10 min cooldown]*");
		}
		comedyad(bot, message)
    message.channel.send("`Ads with comedy genre have been enabled!`")
    chratis_talked_users.add(message.author.id);
    setTimeout(() => {
      chratis_talked_users.delete(message.author.id);
    }, chratis_cooldown_time * 60000);
  } 
	if (message.content === '^ad programming') {
    let adschannel = message.guild.channels.find(`name`, "ads");
    if(!adschannel) return message.channel.send("The bot is not properly set up for this command! Please type `^test`.");
		if (message.author.id !== '346687165868015616') {
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No. Why would I do this for you? I have a **Admin only** policy.");
		}
		if (message.author.id !== '346687165868015616') {
		  if (chratis_talked_users.has(message.author.id)) return message.reply("You have to wait before using this command again.\n*[10 min cooldown]*");
		}
		programmingad(bot, message)
    message.channel.send("`Ads with programming genre have been enabled!`")
    chratis_talked_users.add(message.author.id);
    setTimeout(() => {
      chratis_talked_users.delete(message.author.id);
    }, chratis_cooldown_time * 60000);
  } 
	if (message.content === '^ad drama') {
    let adschannel = message.guild.channels.find(`name`, "ads");
    if(!adschannel) return message.channel.send("The bot is not properly set up for this command! Please type `^test`.");
		if (message.author.id !== '346687165868015616') {
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No. Why would I do this for you? I have a **Admin only** policy.");
		}
		if (message.author.id !== '346687165868015616') {
		  if (chratis_talked_users.has(message.author.id)) return message.reply("You have to wait before using this command again.\n*[10 min cooldown]*");
		}
		dramaad(bot, message)
    message.channel.send("`Ads with drama genre have been enabled!`")
    chratis_talked_users.add(message.author.id);
    setTimeout(() => {
      chratis_talked_users.delete(message.author.id);
    }, chratis_cooldown_time * 60000);
  } 
	if (message.content === '^ad gaming') {
    let adschannel = message.guild.channels.find(`name`, "ads");
    if(!adschannel) return message.channel.send("The bot is not properly set up for this command! Please type `^test`.");
		if (message.author.id !== '346687165868015616') {
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No. Why would I do this for you? I have a **Admin only** policy.");
		}
		if (message.author.id !== '346687165868015616') {
		  if (chratis_talked_users.has(message.author.id)) return message.reply("You have to wait before using this command again.\n*[10 min cooldown]*");
		}
		gamingad(bot, message)
    message.channel.send("`Ads with gaming genre have been enabled!`")
    chratis_talked_users.add(message.author.id);
    setTimeout(() => {
      chratis_talked_users.delete(message.author.id);
    }, chratis_cooldown_time * 60000);
  } 
	if (message.content === '^ad music') {
    let adschannel = message.guild.channels.find(`name`, "ads");
    if(!adschannel) return message.channel.send("The bot is not properly set up for this command! Please type `^test`.");
		if (message.author.id !== '346687165868015616') {
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No. Why would I do this for you? I have a **Admin only** policy.");
		}
		if (message.author.id !== '346687165868015616') {
		  if (chratis_talked_users.has(message.author.id)) return message.reply("You have to wait before using this command again.\n*[10 min cooldown]*");
		}
		musicad(bot, message)
    message.channel.send("`Ads with music genre have been enabled!`")
    chratis_talked_users.add(message.author.id);
    setTimeout(() => {
      chratis_talked_users.delete(message.author.id);
    }, chratis_cooldown_time * 60000);
  } 
  if (message.content === '^info') {
    return message.channel.send(`<@${message.author.id}> my info:\n\n:computer: Version: 4.8.1\n\n:pencil: I was programmed by HalfBakedGaming#6768.\n\n:loudspeaker: I am broadcasting to ${bot.guilds.size} servers.\n\n:eye: I am watching ${bot.users.size} online users.`)
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
	if (message.content === '^purge-check') {
		message.guild.pruneMembers(7, true)
      .then(pruned => message.channel.send(`${pruned} people are scheduled to be purged!\n\`I scanned for people who have not been on for 7 which are scheduled to be purged.\``))
      .catch(console.error);
	}
	if (message.content === '^purge') {
	  message.guild.pruneMembers(7)
      .then(pruned => message.channel.send(`I just purged ${pruned} inactive people!\n\`Purged members are members who havn't been on in 7 days.\``))
      .catch(console.error);
	}
	if (message.content === '^all-servers') {
		if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No.");
		invites(bot, message)
	}
});

//Ik5KSLzA6C
//test lol note thingh
//-----------------------------------------------------------
//    [do `^help` for help and join official server!]

bot.login(process.env.BOT_TOKEN);
