//index.js
const app = getApp()

Page({
  data: {
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: '',
    list: [{
      text: "速查手册",
      },
      {
        text: "知识点图谱",
      },
      {
        text: "教学计划",
      },
      {
        text: "创建题目",
      }]
  },

})
