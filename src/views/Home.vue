<template>
  <div class="home">
    <el-row class="section">
      <el-col :span="12" class="text">
        <h2>Hi, I’m Yi</h2>
        <h2>A UX/UI designer.</h2>

        <span>
          I'm a UX Designer passionate about transforming complex problems into meaningful and effortless solutions. Having worked with both startups and enterprises.I'm skilled at practicing agile, connecting different stakeholders and thinking about both user and business values. On weekends, you will find me walking around with my camera to capture the beauty of life or sketching what I see.
        </span>
      </el-col>
      <el-col :span="12">
        <img class="self" src="../assets/yi.png" />
      </el-col>
    </el-row>

    <div class="card">
      <div class="card-list">
        <el-card class="card-item" :body-style="{ padding: '0px' }">
          <div class="image yellow">
            <img src="../assets/TriPal.png">
          </div>
          <div style="padding: 14px;">
            <h4>TriPal ( Concept product )</h4>
            <h5>Product Design</h5>
          </div>
        </el-card>
        <el-card class="card-item" :body-style="{ padding: '0px' }">
          <div class="image green">
            <img src="../assets/Yiminghui.png">
          </div>
          <div style="padding: 14px;">
            <h4>益民惠 / Yiming</h4>
            <h5>User Research + Product Design</h5>
          </div>
        </el-card>
      </div>
      <div class="card-list">
        <el-card class="card-item" :body-style="{ padding: '0px' }">
          <div class="image blue">
            <img src="../assets/Flight Bulter.png">
          </div>
          <div style="padding: 14px;">
            <h4>航班管家 / Flight Butler</h4>
            <h5>User experience design</h5>
          </div>
        </el-card>
        <el-card class="card-item" :body-style="{ padding: '0px' }">
          <div class="image red">
            <img src="../assets/Huoli.png">
          </div>
          <div style="padding: 14px;">
            <h4>伙力食 / Huoli</h4>
            <h5>Product Manager + UX</h5>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home'
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
        font-size:16px;
        font-family:Helvetica-Light;
        font-weight:300;
        color:#46515F;
        line-height:24px;
      }
    }

    .self{
      display: block;
      float:right;
      height:475px;
    }
  }

  .card{
    padding:80px 150px 50px 150px;

    .card-list{
      display: -webkit-flex; /* Safari */
      display: flex;
      justify-content: space-between;

      .card-item{
        margin-bottom:50px;
        width:45%;
        max-width: 520px;
        border-radius: 10px;

        h4{
          font-size:28px;
          margin: 0;
          color: #4A4A4A;
        }
        h5{
          font-size:22px;
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
  }

}
</style>
