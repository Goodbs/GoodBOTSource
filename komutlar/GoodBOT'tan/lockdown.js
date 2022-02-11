module.exports = {
  name: "kilitle",
  aliases:["lock"],
  code: `
 $color[FFFFFF]
 $modifyChannelPerms[$channelID;-sendmessages;$roleID[@everyone]]
 $description[**Kanal başarıyla kilitlendi** <:warned:875168397095206923>]
 $onlyPerms[managechannels;Bu komutu kullanman için kanalları yönet iznine sahip  olmalısın!]

  `
}