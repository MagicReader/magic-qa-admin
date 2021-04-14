<template>
  <div>
    <el-row style="margin: 1%">
      <el-col :span="6">
        <div>
          <span class="resume-item">用户ID：</span>
          <span class="resume-item" v-if="data.uid">{{ data.uid }}</span>
          <span class="resume-item" v-else>-</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div>
          <span class="resume-item">用户状态：</span>
          <span class="resume-item" v-if="data.state">{{ data.state }}</span>
          <span class="resume-item" v-else>-</span>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
        <div>
          <span class="resume-item">用户名：</span>
          <span class="resume-item" v-if="data.name">{{ data.name }}</span>
          <span class="resume-item" v-else>-</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div>
          <span class="resume-item">密码：</span>
          <span class="resume-item" v-if="data.password">{{ data.password }}</span>
          <span class="resume-item" v-else>-</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'userInfo',
  props: {
    data: {
      type: Object,
      required: true,
      default: null
    }
  }
}
</script>

<style></style>
