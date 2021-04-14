// 定义项目里需要的所有接口

const BASE = 'http://localhost:8080/'

// 定义需要的接口
const constant = {
  // post
  LOGIN: BASE + 'admin/login',
  SEND_ANNOUNCEMENT: BASE + 'admin/sendAnnouncement',
  FINISH_CERTIFICATION: BASE + 'admin/finishCertification',
  // get
  USER_INFO: BASE + 'admin/userInfo',
  POST_INFO: BASE + 'admin/postInfo',
  COMMENT_INFO: BASE + 'admin/commentInfo',
  REPLY_INFO: BASE + 'admin/replyInfo',
  USER_INFO_DETAIL: BASE + 'admin/userInfoDetail?uid=',
  START_CERTIFICATION: BASE + 'admin/startCertification'
}

export default constant