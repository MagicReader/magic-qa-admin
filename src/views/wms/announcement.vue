<template>
  <div>
    <el-form
      label-width="80px"
      :model="announcementInfo"
    >
      <el-form-item label="公告标题">
        <el-input v-model="announcementInfo.title"></el-input>
      </el-form-item>
      <el-form-item label="公告内容">
        <el-input
          type="textarea"
          :autosize="{ minRows: 10, maxRows: 100 }"
          v-model="announcementInfo.context"
        ></el-input>
      </el-form-item>
      <el-form-item style="text-align:center">
        <template>
          <el-popconfirm
            confirm-button-text="确定"
            cancel-button-text="不用了"
            icon="el-icon-info"
            icon-color="red"
            title="确定发布该公告吗？"
            @confirm="onClickSendBtn"
          >
            <el-button plain type="primary" slot="reference">发布</el-button>
          </el-popconfirm>
        </template>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { sendAnnouncement } from '../../api/requsetMethods'
export default {
  name: 'announcement',
  data () {
    return {
      announcementInfo: {
        title: '',
        context: '',
        admin_id: localStorage.getItem('admin_id')
      }
    }
  },
  methods: {
    onClickSendBtn () {
      sendAnnouncement(this.announcementInfo)
        .then(res => {
          const statusCode = res.data.status_code
          switch (statusCode) {
            case 341:
              alert('发送公告成功')
              console.log('成功', res.data)
              break
            case 342:
              alert('其他原因失败')
              break
          }
        })
        .catch(error => {
          console.log('失败', error)
        })
    }
  }
}
</script>

<style></style>
