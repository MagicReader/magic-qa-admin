<template>
  <el-card>
    <el-card>
      <user-info :data="userInfoDetail.userInfo"></user-info>
    </el-card>
  <el-tabs v-model="tabsActiveName">
        <el-tab-pane label="身份认证信息" name="certification">
          <certification-info ref="certificationInfo" class="tab-pane-card" :data="userInfoDetail.certificationInfo"></certification-info>
        </el-tab-pane>
        <el-tab-pane label="发帖记录" name="post">
          <post-info ref="postInfo" class="tab-pane-card" :data="userInfoDetail.postInfo"></post-info>
        </el-tab-pane>
        <el-tab-pane label="评论记录" name="comment">
          <comment-info ref="commentInfo" class="tab-pane-card" :data="userInfoDetail.commentInfo"></comment-info>
        </el-tab-pane>
        <el-tab-pane label="回复记录" name="reply">
          <reply-info ref="replyInfo" class="tab-pane-card" :data="userInfoDetail.replyInfo"></reply-info>
        </el-tab-pane>
      </el-tabs>
  </el-card>
</template>

<script>
import { getUserInfoDetail } from '../../../api/requsetMethods'
import userInfo from './components/userInfo'
import certificationInfo from './components/certificationInfo'
import postInfo from './components/postInfo'
import commentInfo from './components/commentInfo'
import replyInfo from './components/replyInfo'
export default {
  name: 'userInfo-detail',
  components: {
    'user-info': userInfo,
    'certification-info': certificationInfo,
    'post-info': postInfo,
    'comment-info': commentInfo,
    'reply-info': replyInfo
  },
  data () {
    return {
      // 与 标签页tabs 双向绑定
      tabsActiveName: 'certification',
      // this.$route.params.id
      uid: this.$route.query.uid,
      userInfoDetail: {
        userInfo: {},
        certificationInfo: {},
        postInfo: [],
        commentInfo: [],
        replyInfo: []
      }
    }
  },
  created () {
    getUserInfoDetail(this.uid).then(res => {
      console.log(res.data)
      const statusCode = res.data.status_code
      switch (statusCode) {
        case 331:
          console.log('成功', res.data)
          this.userInfoDetail = res.data
          break
        case 332:
          alert('获取用户数据失败')
          break
      }
    }).catch(error => {
      console.log('失败', error)
    })
  },
  methods: {
  }
}
</script>

<style></style>
