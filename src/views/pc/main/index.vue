<template>
  <div class="main">
    <el-header class="header">
      <Nav />
    </el-header>
    <el-main style="padding: 20px 0;">
      <router-view></router-view>
    </el-main>
  </div>
</template>

<script>
import Nav from '@/components/Nav'

export default {
  components: {
    Nav
  }
}
</script>

<style lang="less">
.main{
  .header{
    height:135px;
  }
}
</style>
