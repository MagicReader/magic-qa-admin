<template>
<div>
  <el-card v-for="item in data" :key="item.post_id" @click="onClickCard(item.post_id)">
    <el-row style="margin: 1%">
        <div>
          <span>发言名称：</span>
          <span v-if="item.name">{{ item.name }}</span>
          <span v-else>-</span>
        </div>
        <div>
          <span>内容：</span>
          <span v-if="item.context">{{ item.context }}</span>
          <span v-else>-</span>
        </div>
        <div>
          <span>时间：</span>
          <span v-if="item.time">{{ timestampToTime(item.time) }}</span>
          <span v-else>-</span>
        </div>
    </el-row>
  </el-card>
</div>
</template>

<script>
import time from '../../../../mixins/time'
export default {
  name: 'commentInfo',
  mixins: [time],
  props: {
    data: {
      type: Array,
      required: true,
      default: null
    }
  },
  methods: {
    onClickCard (id) {
      this.$router.push({ path: '帖子的路径', query: { post_id: id } })
    }
  }
}
</script>

<style>

</style>
