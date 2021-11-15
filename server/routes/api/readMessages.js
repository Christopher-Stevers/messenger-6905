const router = require("express").Router();
const { Conversation, Message } = require("../../db/models");
const onlineUsers = require("../../onlineUsers");

// expects { conversationId } in body (conversationId will be null if no conversation exists yet)
router.post("/", async (req, res, next) => {

    try{

        if (!req.user) {
            return res.sendStatus(401);
          }
          if(!conversation){
              next()

          }
    }
    catch(err){
        next(err);
    }
});

module.exports = router;