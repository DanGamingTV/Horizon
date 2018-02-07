const Discord = require("discord.js");
const bot = new Discord.Client();
const prefix = ">"
const package = require("./package.json");
//Copyright DanGamingTV 2017
}
bot.on("ready", () => {
  console.log(`Horizon has started!`)
  bot.guilds.forEach(async ga => {
	console.log(`Bot Servercount: ${bot.guilds.size}\nBot Usercount:${bot.users.size}\nBot Channelcount:${bot.channels.size}`)
  	console.log(`[SERVER] [${guild.memberCount}] ${guild.name} (${guild.id}) | Joined: ${bot.joinedAt.toString()}\n`)
  })
  bot.user.setActivity(`for >commands | ${bot.guilds.size} servers`, {type: 'WATCHING'})
  bot.on("guildCreate", guild => {
  	guild.owner.send("Heyo! Thanks for Inviting Horizon! This bot doesn't currently have many commands, but is in development!")
  }) 
 
});
let ownerid = 242111808125534208
let ownerid2 = '242111808125534208'

bot.on("message", message => {
  let args = message.content.split(" ").slice(0);
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  if (message.channel.type == "dm") return;

  switch (args[0].toLowerCase()) {
//Utilities
case "question":
    var ciiembed = new Discord.RichEmbed()
      .setColor(`00FF00`)
      .setDescription('You must provide a query')
      .addField('>question <query>','<query> = Your question')
	  .setFooter('Horizon V2')

    let questionn = message.content.split(' ').slice(1).join(' ')
    if(questionn.length < 1) return message.channel.sendEmbed(ciiembed).catch(console.issue);
      console.log('Query: ' + questionn + ' from ' + message.author.toString() + '.' + ' User ID: ' + message.author.id + '.')
      message.delete()
      message.channel.send('Query sent! We will get back to you soon :)')
      break;
case "consoleissue":		
    var ciembed = new Discord.RichEmbed()
      .setColor(`00FF00`)
      .setDescription('You must provide an issue')
      .addField('>consoleissue <issuereport>','<issuereport> = Your issue')
	  .setFooter('Horizon V2')

    let issuereport = message.content.split(' ').slice(1).join(' ')
    if(issuereport.length < 1) return message.channel.sendEmbed(ciembed).catch(console.issue);
      console.log('Issue report: ' + issuereport + ' from ' + message.author.toString() + '.')
      message.delete()
      message.channel.send('Issue Reported to console')
      message.channel.send('Thank you :)')
      break;
case "ban":
      var embed = new Discord.RichEmbed()
     .setColor("FFA500")
  .setTitle('Ban Usage')
  .setDescription('This command will only work if your role is named Owner, Admin, or Moderator')
  .addField('Usage','>banuser @User Reason')
  .setFooter("Horizon V2 (Ban Usage)","https://cdn.discordapp.com/avatars/344976644752015380/1d758cef2dff6795a904c91f06d2ca91.webp?size=128")
  message.channel.send({ embed })
          break;
      case "banuser":
          if(message.channel.guild.id === '273169968202252289')return;
        let staffRoleIDs = message.channel.guild.roles.filter(r => r.name == "Owner" || r.name == "Admin" || r.name == "Admins" || r.name == "Administrator").map(r => r.id);
let isStaff = false;
for (const id of staffRoleIDs) {
    if (message.member.roles.has(id)) {
        isStaff = true;
        break;
    }
}
if (isStaff) {
let banMember = message.guild.member(message.mentions.users.first());
let reason = message.content.split(/\s+/g).slice(2).join(" ");
        message.guild.member(banMember).ban(reason);
      message.channel.sendMessage(" " + message.author.toString() + " has banned " + banMember + " for the reason " + reason);
	  console.log(message.author.toString(), ` banned ` + banMember + ` reason: ` + reason)
    } else {
      return message.reply("You don\'t have the permissions to use this command!");
	  console.log(message.author.toString(), ` tried to ban ` + banMember + ` but failed miserably.`);
    }
    break;
	case "kick":
  var embed = new Discord.RichEmbed()
 .setColor("FFA500")
.setTitle('Kick Usage')
.setDescription('This command will only work if your role is named Owner, Admin, or Moderator')
.addField('Usage','>kickuser @User Reason')
.setFooter("Horizon V2 (Kick Usage)","https://cdn.discordapp.com/avatars/344976644752015380/1d758cef2dff6795a904c91f06d2ca91.webp?size=128")
message.channel.send({ embed })
      break;
    case "kickuser":
    if(message.guild.id === '273169968202252289')return;
        let staffRoleID = message.guild.roles.filter(r => r.name == 'Owner' || r.name == 'Admin' || r.name == 'Moderator' || r.name == 'Moderators' || r.name == 'Mods' || r.name == "Admins" || r.name == "Administrator").map(r => r.id);
let isStaffs = false;
for (const id of staffRoleID) {
    if (message.member.roles.has(id)) {
        isStaffs = true;
        break;
    }
}
if (isStaffs) {
  let kickMember = message.mentions.members.first();
  let reason = message.content.split(/\s+/g).slice(2).join(" ");
      kickMember.kick(reason);
      message.channel.sendMessage(" " + message.author.toString() + " has kicked " + kickMember + " for the reason " + reason);
	  console.log(message.author.toString(), ` kicked ` + kickMember + ` reason: ` + reason);
    } else {
      return message.reply("you don\'t have the permissions to use this command!");
	  console.log(message.author.toString(), ` tried to kick ` + kickMember + ` but failed miserably.`);
    }
    break;
//Imformation
  case "test":
    message.channel.send('Testing...')
    message.channel.sendFile('https://media.giphy.com/media/8GY3UiUjwKwhO/giphy.gif')
	console.log(message.author.toString(), `used test`)
    	break;	
  case "serverinfo":
        message.channel.send("Here is the server info," + message.author.toString() + ".")
        var embed = new Discord.RichEmbed()
        .setColor("FF0000")
        .setTitle('Server Info')
        .setImage("" + message.guild.iconURL)
		.setDescription("Server Name: " + message.guild.name.toString())
		.addField('Server ID: ', + message.guild.id.toString())
		.addField('Members: ', + message.guild.memberCount.toString())
		.addField('Created at: ', + message.guild.createdAt.toString())
		.setFooter('Horizon V2')
        message.channel.sendEmbed(embed)
		console.log(message.author.toString(), `used serverinfo`)
        break;
  case "invite":
      message.channel.send("Invite Horizon to your server! " + message.author.toString() + " https://discordapp.com/oauth2/authorize?client_id=373246874146177025&scope=bot&permissions=469773358")
      console.log(message.author.toString(), `used invite`)
		break;
  case "uptime":
         let seconds = bot.uptime / 1000 + ' seconds'
         let minutes = bot.uptime / 60000 + ' minutes'
         let hours = bot.uptime / 3600000 + ' hours'
         let days = bot.uptime / 86400000 + ' days'
         var embed = new Discord.RichEmbed()
         .setColor()
         .setTitle('Horizon Uptime')
         .addField('Uptime Seconds', seconds)
         .addField('Uptime Minutes', minutes)
         .addField('Uptime Hours', hours)
         .addField('Uptime Days', days)
		 .setFooter('Horizon V2')
         message.channel.sendEmbed(embed)
		 console.log(message.author.toString(), `used uptime`)
        break;
  case "info":
      var embed = new Discord.RichEmbed()
      .setColor("ffff00")
      .setTitle('Horizon Info')
      .setImage("https://cdn.discordapp.com/avatars/344976644752015380/1d758cef2dff6795a904c91f06d2ca91.webp?size=128")
      .addField('Owner','DangamingTV')
      .addField('API','Discord.js')
      .addField('Version', '2')
	  .addField('Servers',  bot.guilds.size)
      .addField('Uptime (MS)', bot.uptime)
	  .addField('Check out the new commands!','>commands')
	  .setFooter('Horizon V2')
	  message.channel.sendEmbed(embed)
	  console.log(message.author.toString(), `used info`)
    	break;
//Randomizers
    function random8Ball() {
    var rand = ['Yes', 'No', 'Answer is hazy, try again later.', 'It seems likely', 'Maybe yes, maybe no', 'It doesn\'t seem likely', 'Yes','No'];
    return rand[Math.floor(Math.random()*rand.length)];
}
	case "8ball":
		 let params = encodeURIComponent(message.content.toString())
		 let uri = 'https://8ball.delegator.com/magic/JSON/' + params
		 fetch(uri)
		  .then((response) => { return response.json() })
		  .then((json) => { message.channel.send(json) })
	        console.log(message.author.toString(), `used 8ball`)
 		break;
	function coinflip() {
	let result = Math.round(Math.random())
	if (result) message.channel.send("Heads!")
    if (!result) message.channel.send("Tails!")
}
	case "coinflip":
    message.channel.send('We have, ' + coinflip());
	console.log(`${message.author.username} used coinflip`)
 		break;
	function rpsFunc() {
	var rand = ['Rock!', 'Paper','Scissors', 'Rock!', 'Paper','Scissors', 'Rock!', 'Paper','Scissors', 'Rock!', 'Paper','Scissors', 'Rock!', 'Paper','Scissors', ]
	return rand[Math.floor(Math.random()*rand.length)];
}
	case "rps":
    message.channel.send('You got, ' + rpsFunc());
	console.log(message.author.toString(), `used rps`)
 		break;
//Bot status commands
    case "onlinebot":
		let isOwnerrrr = false
        if (message.author.id === "216368711559413760") {
			isOwnerrrr = true;
		} else {
			isOwnerrrr = false;
		}
		if (isOwnerrrr === true){
    	message.channel.send('Starting');
    	bot.user.setGame('Starting');
    	bot.user.setStatus('online');
	setTimeout(() => {
	   bot.user.setGame('Online! | V1.0 | Please report any bugs to <@216368711559413760>');
	}, 1)
    			console.log(`${message.author.username} used onlinebot`);
		} else {
			return message.reply("you don't have the permissions to use this command!");
		}
    		break;
    case "dndbot":
	let isOwnerr = false
        if (message.author.id === "216368711559413760") {
			isOwnerr = true;
		} else {
			isOwnerr = false;
		}
		if (isOwnerr === true){
    	message.channel.send('Turning off Notifiers for Security');
    	bot.user.setStatus('dnd');
    	bot.user.setActivity('Notifiers = Off', {type: "PLAYING"});
		console.log(`${message.author.username} used dndbot`);
		} else {
			return message.reply("You don't have the permissions to use this command!");
		}
    		break;
    case "invisbot":
	    let isOwner = false
        if (message.author.id === "216368711559413760") {
			isOwner = true;
		} else {
			isOwner = false;
		}
		if (isOwner === true){
    	message.channel.send('Offline for updates!');
    	bot.user.setStatus('invisible');
    	bot.user.setGame('Offline for updates');
		console.log(message.author, `used invisbot`);
		} else {
			return message.reply("you don't have the permissions to use this command!");
		}
    		break;
		case "idlebot":
		let isOwnerrr = false
        if (message.author.id === "216368711559413760") {
			isOwnerrr = true;
		} else {
			isOwnerrr = false;
		}
		if (isOwnerrr === true){
    	    	message.channel.send('Updating');
    	bot.user.setStatus('idle');
    	bot.user.setGame('Updating');
		console.log(message.author.toString(), `used idlebot`);
		} else {
			return message.reply("you don't have the permissions to use this command!");
		}
    		break;
//Help
	case "commands":
    	message.channel.send("Commands sent to DM's!")
    	var embed = new Discord.RichEmbed()
    	.setColor('ASF000')
    	.setTitle('Horizon Commands')
    	.addField('>rps','Play rock paper scissors!')
    	.addField('>coinflip','Flip a coin!')
    	.addField('>8ball','Have your questions answered')
		.addField('>ban', 'Use this command to ban users')
		.addField('>kick', 'Use this command to kick users')
		.addField('>uptime', 'View the uptime status of the bot')
		.addField('>info', 'View info about Horizon')
		.addField('>invite', 'Invite Horizon to your server!')
		.addField('>serverinfo', 'View the info of the current server you are in')
		.setFooter('Horizon V2')
    	message.author.sendEmbed(embed)
		console.log(message.author.toString(), `used commands`)
   	  	break;
  }
});

bot.login("");
