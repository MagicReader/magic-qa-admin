import service from './service'
import constant from './constant'

/**
 * getUID接口调用-post
 * @data data 关键字
 */
/**
 * login接口调用-post
 * @param data 关键字
 */
export function login (data) {
  const obj = data
  return service({
    url: constant.LOGIN,
    method: 'post',
    data: obj
  })
}

/**
 * getUserInfo-get
 * @data data 关键字
 */
export function getUserInfo (data) {
  const obj = data
  return service({
    url: constant.USER_INFO,
    method: 'get',
    params: obj
  })
}
/**
 * getPostInfo-get
 * @data data 关键字
 */
export function getPostInfo (data) {
  const obj = data
  return service({
    url: constant.POST_INFO,
    method: 'get',
    params: obj
  })
}
/**
 * getCommentInfo-get
 * @data data 关键字
 */
export function getCommentInfo (data) {
  const obj = data
  return service({
    url: constant.COMMENT_INFO,
    method: 'get',
    params: obj
  })
}
/**
 * getReplyInfo-get
 * @data data 关键字
 */
export function getReplyInfo (data) {
  const obj = data
  return service({
    url: constant.REPLY_INFO,
    method: 'get',
    params: obj
  })
}

/**
 * getUserInfoDetail-get
 * @data data 关键字
 */
export function getUserInfoDetail (uid) {
  return service({
    url: constant.USER_INFO_DETAIL + uid,
    method: 'get'
  })
}

/**
 * getUserInfoDetail-post
 * @data data 关键字
 */
export function sendAnnouncement (data) {
  const obj = data
  return service({
    url: constant.SEND_ANNOUNCEMENT,
    method: 'post',
    data: obj
  })
}

/**
 * startCertification-get
 * @data data 关键字
 */
export function startCertification () {
  return service({
    url: constant.START_CERTIFICATION,
    method: 'get'
  })
}

/**
 * finishCertification-post
 * @data data 关键字
 */
export function finishCertification (data) {
  const obj = data
  return service({
    url: constant.FINISH_CERTIFICATION,
    method: 'post',
    data: obj
  })
}
