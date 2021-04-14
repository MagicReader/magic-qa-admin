<template>
  <div>
    <el-row style="margin: 1%">
      <el-col :span="6">
        <div>
          <span>身份认证ID：</span>
          <span v-if="data.certification_id">{{ data.certification_id }}</span>
          <span v-else>-</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div>
          <span>认证状态：</span>
          <span v-if="data.state">{{ data.state }}</span>
          <span v-else>-</span>
        </div>
      </el-col>
    </el-row>
    <el-row style="margin: 1%">
      <el-col :span="6">
        <div>
          <span>真实姓名：</span>
          <span v-if="data.real_name">{{ data.real_name }}</span>
          <span v-else>-</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div>
          <span>手机号：</span>
          <span v-if="data.phone_number">{{ data.phone_number }}</span>
          <span v-else>-</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div>
          <span>身份证号：</span>
          <span v-if="data.id_number">{{ data.id_number }}</span>
          <span v-else>-</span>
        </div>
      </el-col>
    </el-row>
    <el-row style="margin: 1%">
      <el-col :span="6">
        <div>
          <span>学校：</span>
          <span v-if="data.school">{{ data.school }}</span>
          <span v-else>-</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div>
          <span>专业：</span>
          <span v-if="data.major">{{ data.major }}</span>
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
          v-if="data.major"
          style="width: 400px; height: 400px"
          :fit="fit"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        >
        </el-image>
        <span v-else>未上传认证照片</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'certificationInfo',
  props: {
    data: {
      type: Object,
      required: true,
      default: null
    }
  },
  data () {
    return {
      fit: 'fill'
    }
  }
}
</script>

<style></style>
