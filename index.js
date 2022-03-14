const Discord = require("discord.js")

const TOKEN = "OTUyOTU0OTE4OTAwMjExNzUy.Yi9ibQ.jD-ZJyZVJob53144rs9_Cl8Qvpk"

const Client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

Client.on("ready", () => {
    console.log(`se logeó ${Client.user.tag}`)
})

Client.on("messageCreate", (message) => {
    if (message.content == "R/xing xeng hanji"){
        message.reply("<:mas15creditossociales:952718544146145361> Bing Chilling <:yosiempre:949435860426850304>")
    }
})

Client.login(TOKEN)