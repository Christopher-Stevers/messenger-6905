const Conversation = require("./conversation");
const User = require("./user");
const Message = require("./message");
const Group = require("./group");
const Unread = require("./unread");

// associations

User.hasMany(Conversation, { through: "Group" });
Conversation.hasMany(User, { through: "Group" });
Message.belongsTo(Conversation);
Conversation.hasMany(Message);
// one User to many Messages sent by that User
User.hasMany(Message, {as: "Sender", foreignKey: "senderId"})
Message.belongsTo(User)
// Many Users to many Unreads.
// Each Unread will be deleted when the User reads the associated message.
User.hasMany(Message, { through: "Unread" });
Message.hasMany(User, { through: "Unread" });
/* 
Each Message has many unreads.
Using messageInstance.addUser([userArray]) we'll create an
association in the Unread table for every where userArray is 
the other Users in that conversation. 
We'll delete those as they are read using
userInstance.removeMessages([messageArray])
where userInstance is an instance of the user
reading the messages and messageArr is an
array of instance of the Message Model from the current conversation.otherUser

The other possible implementation for unreads
and users would be to create read records instead.
Then we wouldn't need to create records for every 
user when a message is sent.
Every time a user hits the readmessage endpoint
and we'd run userInstance.addMessage(messageInstance),
where messageInstance is the new message and
userInstance is the user hitting the endpoint.
Then in our conversation endpoint we'd return conversation.unread
as the number of messages - number of reads. Which solution we use
will depend on the expected use of the app. The first solution
should be optimal for read and the second should be optimal for write.
*/


module.exports = {
  User,
  Conversation,
  Group,
  Message,
  Unread
};
