const router = require("express").Router();
const { Conversation, Message } = require("../../db/models");
const onlineUsers = require("../../onlineUsers");

// expects { conversationId } in body (conversationId will be null if no conversation exists yet)
router.get("/", async (req, res, next) => {
    console.log("exec");

    try{
        console.log(req);
        console.log("hi hop");
        res.json({hi: "hop"});
    }
    catch(err){
        next(err);
    }
});

module.exports = router;