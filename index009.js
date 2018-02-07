const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = ">"
const package = require("./package.json");

client.on("message", (message) => {
//Copyright DanGamingTV 2017

client.on("ready", () => {
  console.log(`Horizon has started!`)
  //console.log(client.guilds) //(this shows all info about the guilds the bot is in)
  //client.user.setGame(client.guilds.size + ' servers | ' + '>commands')
  client.user.setActivity(`${client.guilds.size.toString()} servers`, {type: 'WATCHING'})
  //client.guilds.forEach((key) => {
  //key.owner.sendMessage('Hi there, thank you for inviting Horizon!')
  //key.owner.sendMessage("Disclaimer: user activity such as command use is logged, so if you don't want that, please do not use Horizon.")
  //console.log('done')
//})
 
});
let ownerid = 242111808125534208
let ownerid2 = '242111808125534208'

client.on("message", message => {
  let args = message.content.substring(prefix.length).split(" ");
  if (message.author.equals(client.user)) return;
  if (!message.content.startsWith(prefix)) return;
  if (message.channel.type !== 'text') return;

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
  message.channel.sendEmbed(embed)
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
message.channel.sendEmbed(embed)
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
  let kickMember = message.guild.member(message.mentions.users.first());
  let reason = message.content.split(/\s+/g).slice(2).join(" ");
      message.guild.member(kickMember).kick(reason);
      message.channel.sendMessage(" " + message.author.toString() + " has kicked " + kickMember + " for the reason " + reason);
	  console.log(message.author.toString(), ` kicked ` + kickMember + ` reason: ` + reason);
    } else {
      return message.reply("You don\'t have the permissions to use this command!");
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
         let seconds = client.uptime / 1000 + ' seconds'
         let minutes = client.uptime / 60000 + ' minutes'
         let hours = client.uptime / 3600000 + ' hours'
         let days = client.uptime / 86400000 + ' days'
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
	  .addField('Servers', client.guilds.size)
      .addField('Uptime (MS)', client.uptime)
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
    message.channel.send('Your anwser is: ' + random8Ball());
	console.log(message.author.toString(), `used 8ball`)
 		break;
	function coinflip() {
	var rand = ['Heads!', 'Tails!', 'Heads!', 'Tails!','Heads!', 'Tails!','Heads!', 'Tails!',]
	return rand[Math.floor(Math.random()*rand.length)];
}
	case "coinflip":
    message.channel.send('We have, ' + coinflip());
	console.log(message.author.toString(), `used coinflip`)
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
    	client.user.setGame('Starting');
    	client.user.setStatus('online');
    	client.user.setGame('Online! | V1.0 | Please report any bugs to DanGamingTV#3643');
		console.log(message.author.toString(), `used onlinebot`);
		} else {
			return message.reply("You don\'t have the permissions to use this command!");
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
    	client.user.setStatus('dnd');
    	client.user.setGame('Notifiers = Off');
		console.log(message.author.toString(), `used dndbot`);
		} else {
			return message.reply("You don\'t have the permissions to use this command!");
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
    	client.user.setStatus('invisible');
    	client.user.setGame('Offline for updates');
		console.log(message.author.toString(), `used invisbot`);
		} else {
			return message.reply("You don\'t have the permissions to use this command!");
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
    	client.user.setStatus('idle');
    	client.user.setGame('Updating');
		console.log(message.author.toString(), `used idlebot`);
		} else {
			return message.reply("You don\'t have the permissions to use this command!");
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
});
client.login("MzczMjQ2ODc0MTQ2MTc3MDI1.DNP8wg.5o1cdjQJ6TfU9hmBC0SAgKRsz6s");