<template>
  <div class="pc">
    <el-main style="padding: 20px 0;">
      <router-view></router-view>
    </el-main>
    <el-footer class="footer">
      <div class="back">
        Design by Yi Wan @ 2018 Last update: December 10th, 2018 @ Christchurch,New Zealand
      </div>
    </el-footer>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
.pc{
  min-width: 1200px;

  .footer{
    padding:0 150px;

    .back{
      padding-bottom:30px;
      text-align: center;
      font-size:8px;
      font-family:HelveticaNeue-Light;
      font-weight:300;
    }
  }
}
</style>
