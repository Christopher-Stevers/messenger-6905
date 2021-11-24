const Conversation = require("./conversation");
const User = require("./user");
const Message = require("./message");
const Group = require("./group");
const Unread = require("./unread");

// associations

User.hasMany(Conversation, { through: Group });
Conversation.hasMany(User, { through: Group });
Message.belongsTo(Conversation);
Conversation.hasMany(Message);
User.hasMany(Message, { as: "Sender", foreignKey: "senderId" })
Message.belongsTo(User)
// Many Users to many Unreads.
// Each Unread will be deleted when the User reads the associated message.
User.hasMany(Message, { through: Unread });
Message.hasMany(User, { through: Unread });

module.exports = {
  User,
  Conversation,
  Message,
  Group,
  Unread
};
