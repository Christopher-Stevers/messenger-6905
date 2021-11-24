const Conversation = require("./conversation");
const User = require("./user");
const Message = require("./message");
const Group = require("./group");
const Unread = require("./unread");

// associations

User.belongsToMany(Conversation, { through: Group });
Conversation.belongsToMany(User, { through: Group });
Message.belongsTo(Conversation);
Conversation.hasMany(Message);
User.hasMany(Message, { as: "Sender", foreignKey: "senderId" })
Message.belongsTo(User)
// Many Users to many Unreads.
// Each Unread will be deleted when the User reads the associated message.
User.belongsToMany(Message, { through: Unread });
Message.belongsToMany(User, { through: Unread });

module.exports = {
  User,
  Conversation,
  Message,
  Group,
  Unread
};
