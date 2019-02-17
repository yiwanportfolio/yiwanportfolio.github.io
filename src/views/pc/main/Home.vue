<template>
  <div class="home">
    <el-row class="section">
      <el-col :span="12" class="text">
        <h2>Hi, I’m Yi</h2>
        <h2 style="margin-top: -0.41em">A UX/UI designer.</h2>

        <span>
          I'm a UX Designer passionate about transforming complex problems into meaningful and effortless solutions. Having worked with both startups and enterprises.I'm skilled at practicing agile, connecting different stakeholders and thinking about both user and business values. On weekends, you will find me walking around with my camera to capture the beauty of life or sketching what I see.
        </span>
      </el-col>
      <el-col :span="12">
        <img class="self" :src="require('@/assets/yi.png')" />
      </el-col>
    </el-row>

    <div class="card">
      <el-card
        v-for="(card, index) in cardItems"
        :key="index"
        class="card-item"
        :body-style="{ padding: '0px' }"
      >
        <div :class="'image ' + card.color" @click="onRoute(index)">
          <img :src="card.logo">
        </div>
        <div style="padding: 14px;" @click="onRoute(index)">
          <h4>{{card.product}}</h4>
          <h5>{{card.role}}</h5>
        </div>
      </el-card>
    </div>

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
          <img class="wechat" :src="require('@/assets/wechat.png')" />wanyi0912
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import home from '@/config/home'

const PATH = [
  '/tripal',
  '/yiming',
  '/flightbutler',
  '/huoli'
]

export default {
  name: 'home',
  data () {
    return {
      cardItems: home.products
    }
  },
  methods: {
    onRoute (index) {
      this.$router.push('/product' + PATH[index])
    }
  }
}
</script>

<style lang="less">
.home{
  .section{
    overflow: hidden;
    height:473px;
    padding:0 100px 0 150px;
    background-color: #E4EFD3;

    .text{
      padding-top:40px;
      overflow: hidden;

      h2{
        font-size:40px;
        font-family:HelveticaNeue-Bold;
        font-weight:bold;
        color:#46515F;
        line-height:40px;
      }

      span{
        font-size:18px;
        font-family:Helvetica-Light;
        font-weight:300;
        color:#46515F;
        line-height:28px;
      }
    }

    .self{
      display: block;
      float:right;
      height:475px;
    }
  }

  .card{
    padding:80px 150px;
    display: -webkit-flex; /* Safari */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .card-item{
      cursor: pointer;
      margin-bottom:50px;
      width:48%;
      max-width: 520px;
      border-radius: 10px;

      h4{
        font-size:20px;
        margin: 0;
        color: #4A4A4A;
        font-weight: normal;
      }
      h5{
        font-size:18px;
        font-family:Helvetica-Light;
        margin:0;
        color: #A9A8AA;
        font-weight: normal;
      }

      .image{
        display: -webkit-flex; /* Safari */
        display: flex;
        justify-content: center;
        height:250px;

        img{
          height: 250px;
        }
      }

      .yellow{background-color: #F9FEBF}
      .green{background-color:#C4EBDC}
      .blue{background-color:#BFF0FE}
      .red{background-color:#FFDED6}
    }
  }

  .footer-wrap{
    border-top: 1px solid #d4c7c7;
    margin:0 150px;
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
      margin:80px 0;
      color: #4A4A4A;

      .wechat{
        width:22px;
        height:22px;
        padding-right:4px;
        vertical-align: middle;
      }
    }

  }
}
</style>
