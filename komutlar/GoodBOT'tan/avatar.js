module.exports = {
  name: "avatar",
  aliases:["av"],
  code: `
  
$author[$username;$authorAvatar]
$color[$random[0;9999]]
$image[$userAvatar[$mentioned[1;yes]]?size=2048] 
$addTimestamp




  `
  
}