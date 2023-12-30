const { User, Chat_Room, Chat_Member, Message } = require("../model");

// 채팅방 생성
exports.createChatRoom = async (req, res) => {
  try {
    const { chat_name, chat_category } = req.body;

    await Chat_Room.create({
      chat_name: chat_name,
      chat_category: chat_category,
    });

    res.send({ result: true, message: "채팅방이 성공적으로 생성되었습니다." });
  } catch (error) {
    console.error(error);
    res.send({ result: false, message: "서버 오류 발생" });
  }
};
