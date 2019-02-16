<template>
  <el-container class="carousel">


    <el-header class="cheader">
      <img src="../assets/avatar.jpg" class="avatar" />

      <div>
        <img v-show="prev.url" src="../assets/Previous.png" @click="onRoute(prev.url)" class="button" />
        <img v-show="next.url" src="../assets/next.png" @click="onRoute(next.url)" class="button" />
      </div>
    </el-header>


    <el-main style="padding:0">
      <slot></slot>
    </el-main>


    <el-footer class="cfooter">
      <div class="button-area">
        <div v-show="prev.url">
          <span class="area-wrap">
            <span class="area-title">{{prev.title || ''}}</span>
            <span class="area-desc">{{prev.desc || ''}}</span>
          </span>
          <img v-show="prev.url" src="../assets/Previous.png" class="button" @click="onRoute(prev.url)" />
        </div>
      </div>
      <div class="button-area">
        <div v-show="next.url"> 
          <span class="area-wrap">
            <span class="area-title textRight">{{next.title || ''}}</span>
            <span class="area-desc textRight">{{next.desc || ''}}</span>
          </span>
          <img v-show="next.url" src="../assets/next.png" class="button" @click="onRoute(next.url)" />
        </div>
      </div>
    </el-footer>


  </el-container>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: function () {
        return {}
      }
    },
    next: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },

  methods: {
    onRoute(url){
      this.$router.push(url)
    }
  }
}
</script>

<style lang="less">
.carousel{
  padding: 0 0 100px 0;

  .button{
    display: inline-block;
    width:55px;
    height:55px;
    padding: 0 15px;
    cursor: pointer;
  }

  .textRight{text-align: right;}

  .cheader{
    display: -webkit-flex; /* Safari */
    display: flex;
    justify-content:space-between;
    padding: 0 50px 0 50px;

    .avatar{
      display: block;
      width:55px;
      height:55px;
      border-radius: 27px;
    }
  }

  .cfooter{
    display: -webkit-flex; /* Safari */
    display: flex;
    justify-content:space-between;
    padding: 20px 50px;

    .button-area{

      .area-wrap{
        display: inline-block;

        .area-title{
          display: block;
          font-size:28px;
          font-family:Helvetica-Bold;
          font-weight:bold;
          color:#4A4A4A;
          line-height:34px;
        }

        .area-desc{
          display: block;
          font-size:26px;
          font-family:Helvetica;
          color:#4A4A4A;
          line-height:31px;
        }

      }

      

    }
    
  }

}
</style>
