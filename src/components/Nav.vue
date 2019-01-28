<template>
  <div class="nav">
    <img src="../assets/avatar.jpg" class="avatar" />
    <el-menu
      mode="horizontal"
      :default-active="activeIndex"
      @select="onMenuSelect"
    >
      <el-menu-item index="/">PROJECTS</el-menu-item>
      <el-menu-item index="/illustrations">ILLUSTRATIONS</el-menu-item>
      <el-menu-item index="/photography">PHOTOGRAPHY</el-menu-item>
      <el-menu-item index="/resume">RESUME</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '/'
    }
  },
  methods: {
    onMenuSelect (key) {
      this.$router.push(key)
    }
  },
  mounted () {
    this.activeIndex = this.$route.path
  },
  watch: {
    '$route' (to, from) {
      this.activeIndex = to.path
    }
  }
}
</script>

<style lang="less">
.nav{
  display: -webkit-flex; /* Safari */
  display: flex;
  justify-content:space-between;

  .avatar{
    display: block;
    width:55px;
    height:55px;
    border-radius: 27px;
  }

  .el-menu.el-menu--horizontal{
    border-bottom: 0;
  }

  .el-menu-item{
    font-size:20px;
    font-family:HelveticaNeue-Bold;
    font-weight:bold;
    padding:0;
    height:45px !important;
    margin:0 30px !important;
    color: #A9A8AA;
  }

  .is-active{
    font-weight: bold;
    border-bottom: 2px solid #303133!important;
    color: #4A4A4A;
  }
}
</style>
