module.exports = {
  name: "idbul",
  code: `
$color[FFFFFF]  
$author[ID Sorgulama] 
$onlyIf[$isNumber[$noMentionMessage[1]]!=false;ID Rakamlardan Oluşur !] 
$description[$thumbnail[$userAvatar[$noMentionMessage[1]]]
$addField[**🔎 Sorgulayan Kullanıcı**;__$username#$discriminator[$authorID]__ | <@$authorID>]
$addField[**🗓 Hesap kuruluş tarihi**:;__$creationDate[$noMentionMessage[1]]__]
$addField[**👤 Bulunan kullanıcı**:; 
__$username[$noMentionMessage[1]]#$discriminator[$noMentionMessage[1]]__]]
$argsCheck[1;Başarısız, kullanıcının ID'sini girmelisin]




  `
  
}