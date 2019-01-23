<template>
  <el-container id="app">
    <el-header class="header" style="height:135px;">
      <Nav />
    </el-header>
    <el-main class="main">
      <router-view></router-view>
    </el-main>
    <el-footer class="footer">
      <Footer />
    </el-footer>
  </el-container>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'app',
  components: {
    Nav,
    Footer
  }
}
</script>

<style lang="less">
#app {
  .header{
    padding:40px 55px;
  }

  .main{
    padding:0;
  }

  .footer{
    padding:0 150px;
  }
}
</style>
