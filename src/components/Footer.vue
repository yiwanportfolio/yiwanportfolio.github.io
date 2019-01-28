<template>
  <div class="footer-wrap">
    <el-row :gutter="20" class="contract">
      <el-col :span="6">
        CONTACT ME
      </el-col>
      <el-col :span="6">
        <i class="el-icon-message"></i> yeewan912@gmail.com
      </el-col>
      <el-col :span="6">
        <i class="el-icon-phone-outline"></i>(+64) 0211068631
      </el-col>
      <el-col :span="6">
        <i class="fa fa-weixin" aria-hidden="true"></i>wanyi0912
      </el-col>
    </el-row>

    <div class="back">
      Design by Yi Wan &#169 2018 Last update: December 10th, 2018 @ Christchurch,New Zealand
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
.footer-wrap{
  border-top: 1px solid #d4c7c7;
  columns: #4a4a4a;

  i{
    margin:3px;
  }

  .el-col{
    padding:0!important;
    text-align: center;
  }

  .contract{
    font-size:22px;
    margin:42px 0;
  }

  .back{
    padding:30px 0 15px 0;
    text-align: center;
    font-size:8px;
    font-family:HelveticaNeue-Light;
    font-weight:300;
  }
}
</style>
