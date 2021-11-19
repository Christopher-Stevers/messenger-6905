const router = require("express").Router();
const { Conversation, Message } = require("../../db/models");
const onlineUsers = require("../../onlineUsers");

// expects { senderId, conversationId,  } in body (conversationId will be null if no conversation exists yet)
router.post("/", async (req, res, next) => {
    const { senderId, conversationId } = req.body;
    try {
        if (conversationId&&senderId) {
            const result = await Message.update({ read: true }, {
                where: {
                    senderId: senderId,
                    conversationId,
                    read: false,
                }
            })
        }
        res.json({ conversationId });
    }
    catch (err) {
        next(err);
    }
});

module.exports = router;