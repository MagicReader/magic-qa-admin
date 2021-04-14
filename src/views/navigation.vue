<template>
  <el-container>
    <el-header height="10%"><h1>管理中心</h1></el-header>
    <el-container>
      <el-aside width="15%">
        <el-menu
          :default-active="activeIndex"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          @select="handleSelect"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">
                用户管理
              </span>
            </template>
            <el-menu-item index="1-1">
              <i class="el-icon-user-solid"></i>
              <span>用户信息</span>
            </el-menu-item>
            <el-menu-item index="1-2">
              <i class="el-icon-picture"></i>
              <span>真实身份审核</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">网站管理</span>
            </template>
            <el-submenu  index="2-1">
              <template slot="title"
                ><i class="el-icon-chat-line-round"></i>
                <span slot="title">发言信息管理</span></template
              >
              <el-menu-item index="2-1-1">发帖信息</el-menu-item>
              <el-menu-item index="2-1-2">评论信息</el-menu-item>
              <el-menu-item index="2-1-3">回复信息</el-menu-item>
            </el-submenu>
            <el-menu-item index="2-2">
              <i class="el-icon-edit"></i>
              <span slot="title">公告</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'navigation',
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
      this.activeIndex = key
      switch (key) {
        case '1-1':
          this.$router.push({ name: 'userInfo-index' })
          break
        case '1-2':
          this.$router.push({ name: 'trueIdentity-index' })
          break
        case '2-1-1':
          this.$router.push({ name: 'qa-postInfo' })
          break
        case '2-1-2':
          this.$router.push({ name: 'qa-commentInfo' })
          break
        case '2-1-3':
          this.$router.push({ name: 'qa-replyInfo' })
          break
        case '2-2':
          this.$router.push({ name: 'announcement' })
          break
        default:
          break
      }
    }
  },
  data () {
    return {
      activeIndex: '1-1'
    }
  },
  created () {}
}
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  display: block;
  position: absolute;
  top: 10%;
  bottom: 0;
  left: 0;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  position: absolute;
  left: 15%;
  right: 0;
  top: 10%;
  bottom: 0;
}
</style>
