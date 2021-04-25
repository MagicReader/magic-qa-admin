<template>
  <div>
    <el-row style="margin: 1%">
      <el-col :span="6">
        <div>
          <span >用户ID：</span>
          <span  v-if="data.uid">{{ data.uid }}</span>
          <span  v-else>-</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div>
          <span >用户状态：</span>
          <span  v-if="data.state">{{ data.state }}</span>
          <span  v-else>-</span>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
        <div>
          <span >用户名：</span>
          <span  v-if="data.name">{{ data.name }}</span>
          <span  v-else>-</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div>
          <span >密码：</span>
          <span  v-if="data.password">{{ data.password }}</span>
          <span  v-else>-</span>
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
