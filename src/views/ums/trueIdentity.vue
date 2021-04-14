<template>
<el-card>
    <div>
    <el-row style="margin: 1%">
      <el-col :span="6">
        <div>
          <span>身份认证ID：</span>
          <span v-if="certificationInfo.certification_id">{{ certificationInfo.certification_id }}</span>
          <span v-else>-</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div>
          <span>认证状态：</span>
          <span v-if="certificationInfo.state">{{ certificationInfo.state }}</span>
          <span v-else>-</span>
        </div>
      </el-col>
    </el-row>
    <el-row style="margin: 1%">
      <el-col :span="6">
        <div>
          <span>真实姓名：</span>
          <span v-if="certificationInfo.real_name">{{ certificationInfo.real_name }}</span>
          <span v-else>-</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div>
          <span>手机号：</span>
          <span v-if="certificationInfo.phone_number">{{ certificationInfo.phone_number }}</span>
          <span v-else>-</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div>
          <span>身份证号：</span>
          <span v-if="certificationInfo.id_number">{{ certificationInfo.id_number }}</span>
          <span v-else>-</span>
        </div>
      </el-col>
    </el-row>
    <el-row style="margin: 1%">
      <el-col :span="6">
        <div>
          <span>学校：</span>
          <span v-if="certificationInfo.school">{{ certificationInfo.school }}</span>
          <span v-else>-</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div>
          <span>专业：</span>
          <span v-if="certificationInfo.major">{{ certificationInfo.major }}</span>
          <span v-else>-</span>
        </div>
      </el-col>
    </el-row>
    <el-row style="margin: 1%">
      <el-col :span="2">
        <span>身份认证照片：</span>
      </el-col>
      <el-col :span="10">
        <el-image
          v-if="certificationInfo.major"
          style="width: 400px; height: 400px"
          :fit="fit"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        >
        </el-image>
        <span v-else>未上传认证照片</span>
      </el-col>
    </el-row>
    <el-row style="text-align:center">
      <el-button  plain type="primary" @click="onClickBtn(3)">否定</el-button>
      <el-button  plain type="primary" @click="onClickBtn(4)">通过</el-button>
    </el-row>
  </div>
</el-card>
</template>

<script>
import { startCertification, finishCertification } from '../../api/requsetMethods'
export default {
  name: 'trueIdentity-index',
  data () {
    return {
      fit: 'fill',
      certificationInfo: {
        certification_id: '',
        state: '',
        real_name: '',
        phone_number: '',
        id_number: '',
        school: '',
        major: ''
      }
    }
  },
  created () {
    startCertification()
      .then(res => {
        const statusCode = res.data.status_code
        switch (statusCode) {
          case 351:
            console.log('成功', res.data)
            this.certificationInfo = res.data.certificationInfo
            break
          case 352:
            alert('其他原因失败')
            break
          case 353:
            alert('当前无待认证数据')
            break
        }
      })
      .catch(error => {
        console.log('失败', error)
      })
  },
  methods: {
    onClickBtn (newState) {
      const postData = {
        certification_id: this.certificationInfo.certification_id,
        state: newState
      }
      finishCertification(postData)
        .then(res => {
          const statusCode = res.data.status_code
          switch (statusCode) {
            case 351:
              alert('状态修改成功')
              console.log('状态修改成功', res.data)
              location.reload()
              break
            case 352:
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

<style>

</style>
