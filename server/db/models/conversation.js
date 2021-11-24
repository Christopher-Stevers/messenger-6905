const { Op } = require("sequelize");
const db = require("../db");
const Message = require("./message");

const Conversation = db.define("conversation", {});

// find conversation given two user Ids

Conversation.findConversation = async function (group) {
  const conversation = await Conversation.findOne({
    where: {
      group
    }
  });
  // return conversation or null if it doesn't exist
  return conversation;
};

module.exports = Conversation;
