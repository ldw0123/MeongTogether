const express = require("express");
const controller = require("../controller/Cuser");
const router = express.Router();

// 회원가입
router.post("/signup", controller.signUp);
// 로그인
router.post("/signin", controller.signIn);
// 아이디 중복확인
router.post("/checkid", controller.checkId);
// 닉네임 중복확인
router.post("/checknickname", controller.checkNickname);
// 아이디 찾기
router.post("/findid", controller.FindId);
// 비밀번호 변경
router.patch("/updatepassword", controller.updatePassword);

// 닉네임 수정
router.patch("/updatenickname", controller.updateNickname);
// 회원 탈퇴
router.delete("/deleteuser", controller.deleteUser);
// 회원 강아지 정보 입력
router.patch("/updatedoginfo", controller.updateDogInfo);

module.exports = router;
