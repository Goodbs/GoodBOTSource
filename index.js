const aoijs = require("aoi.js")
const bot = new aoijs.Bot({
token:process.env.bottoken,
prefix: "prefix"
})
bot.onMessage({
  guildOnly: false
})


bot.loadCommands('./komutlar/')

const goodbot = require("express")();goodbot.get
('/', (req, res) =>{res.send("");});goodbot.listen(8000);
//Buraya Ellemeyin

bot.variables({
  örnek: "değer"
})

