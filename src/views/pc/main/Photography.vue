<template>
  <div class="photo">
    <div class="desc">
      <div>I love those moments when I press down the shutter.</div>
      <div>it’s also an important way to record what I see and love. </div>
      <div>Here are some of my recent work. All of them are for fun or daily records.</div>
    </div>

    <el-row :gutter="20">
      <el-col
        v-for="(col, index) in columns"
        :key="index"
        :span="8">
        <img
          class="image-item"
          v-for="(image, imgIndex) in col"
          :key="imgIndex"
          :src="image.url || image"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import config from '@/config/photography'

export default {
  data () {
    return {
      columns: config.columns
    }
  }
}
</script>

<style lang="less">
.photo{
  padding:25px 110px;

  .desc{
    font-size:22px;
    font-family:Helvetica-Light;
    font-weight:300;
    color:rgba(74,74,74,1);
    line-height:30px;
    text-align: center;
    margin-bottom:80px;
  }

  .image-item{
    width:100%;
    margin-bottom:15px;
  }
}
</style>
