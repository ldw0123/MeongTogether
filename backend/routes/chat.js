const express = require("express");
const controller = require("../controller/Cchat");
const router = express.Router();

// 채팅방 생성
router.post("/createRoom", controller.createChatRoom);

module.exports = router;
