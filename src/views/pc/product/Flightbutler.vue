<template>
  <div class="flight">

    <Carousel :prev="prevOptions" :next="nextOptions">
      <div class="top">
        <div class="title bold center">Flight Butler</div>
        <div class="desc center gray">Redesign membership card system</div>

        <div class="intro space-between center">
          <div>
            <div class="bold fs18 padding20">MY ROLES</div>
            <div class="normal fs16">UX Designer</div>
          </div>
          <div>
            <div class="bold fs18 padding20">DATE</div>
            <div class="normal fs16">Jul-Aug 2016</div>
          </div>
          <div>
            <div class="bold fs18 padding20">METHODS</div>
            <div class="normal fs16 padding20">Usability Testing</div>
            <div class="normal fs16">Rapid Prototyping</div>
          </div>
          <div>
            <div class="bold fs18 padding20">What I Did</div>
            <div class="normal fs16 padding20">User Reasearch</div>
            <div class="normal fs16">Identify Painpoints</div>
          </div>
        </div>
      </div>

      <section class="section">
        <div class="fs18 padding30">
          <span class="blue">Flight Butler</span>  is a travel mobile app that provides one-stop travel services including flight delay inquiries, airfare, hotel reservations, mobile check-in, airport information navigation and more.
        </div>

        <div class="fs18 padding30">
          Based on the business travel scene, the flight butler also made several extended scene products, including the “Huoli Hotel” (provide hotel reservation and recommendation service), “Huoli Cars” (provide drop off and pick up service), “Huoli Selection” (online Shopp), and strive to provide a closed-loop travel experience for users.
        </div>

        <div class="fs18">
          <div>It has more than 100 million users, the number of daily active users reached 4 million.</div>
          <div><a class="red" href="https://itunes.apple.com/nz/app/%E8%88%AA%E7%8F%AD%E7%AE%A1%E5%AE%B6-%E5%AE%8C%E7%BE%8E%E8%A1%8C%E7%A8%8B%E5%BF%85%E5%A4%87/id320479357?mt=8">Check it out on iTunes (Chinese version only)</a></div>
        </div>
      </section>

      <section class="section">
        <div class="fs24 padding30">Membership Card redesign</div>
          
        <div class="fs18 padding30">
          Under the trend of consumption upgrading, people are not only satisfied with the most basic needs of food, clothing, housing and transportation, but also prefer the quality and personalized travel consumption concept, and would like to obtain a perfect travel service experience. The Flight Bulter witch has been deep-diving travel service field, with a large number of users traveling data, continues to pay close attention to the personalized travel needs of various travel groups, and digging into diversified travel scene services, thereby we would like to update a new membership growth system, aiming at offering a more refined and customized one-stop travel service experience.
        </div>

        <div class="fs18 padding30">
          As a product manager of Huoli ( Huoli and Flight Bulter are brother products in the same company.), I was invited to join in the whole membership card redesign.
        </div>

        <div class="fs18 padding30">
          We did have a membership system, and actually got some key data from it. Our persona was very clear—— frequent business travelers. 62% of them are male, aged from 28-45. With 100 million users, less than 500,000 upgraded to be a member. We need to figure out why.
        </div>

        <div class="fs18 padding30">
          We asked users to complete survey by offering coupons, and talked to some of them, there are some reasons why our users don’t want to upgrade.
        </div>

        <div class="image center">
          <img :src="images[0]" />
        </div>

        <div class="fs18">
          With these finding, I did a thorough evaluation on the existing membership card and provided design suggestions. Some selected highlights and recommendations:
        </div>
      </section>

      <section class="section">
        <div class="fs24 padding30">Design issues with existing versions</div>
        <el-row 
          :gutter="48"
          class="row"
        >
          <el-col :span="10">
            <img style="width:100%;" :src="images[1]" />
          </el-col>
          <el-col class="text" :span="14">
            <div>

              <div class="title padding20"><span class="pot"></span>The color tone is too calm</div>
              <div class="info padding60">Even if most users are business travellers, the color scheme is still too calm, lacking of a lively and active atmosphere.</div>

              <div class="title padding20"><span class="pot"></span>The card style lacks texture</div>
              <div class="info padding60">It’s hard to notice the specialities of being a member from the card design. I suggesed to design a unique logo for each level of membership and improviethe texture of the card.</div>

              <div class="title padding20"><span class="pot"></span>The level rights are not clear</div>
              <div class="info">The rights of members are not intuitive enough which has greatly reduced the attractiveness. I recommended listing all membership rights so that users can have a complete understanding of the whole system. Meanwhile using illustrations to describ scenes and rights will help users understand.</div>
            
            </div>
          </el-col>
        </el-row>
      </section>

      <section class="section">
        <div class="fs24 padding30">Redesigned membership card system</div>
        <div class="fs22 padding30">The suggestions I gave to Flight Bulter design team led great design improvements for the current membership system design</div>
       
        <el-row 
          :gutter="48"
          class="row padding30"
        >
          <el-col :span="10">
            <img style="width:100%;" :src="images[2]" />
          </el-col>
          <el-col class="text" :span="14">
            <div>

              <div class="title padding20"><span class="pot"></span>Membership benefits display</div>
              <div class="info padding60">Show all benefits directly and highlights the ones alreay have. TIt allows users have an overall understanding of membership benefits and imply them to upgrade to unlock other rights.</div>

            </div>
          </el-col>
        </el-row>

        <el-row 
          :gutter="48"
          class="row padding30"
        >
          <el-col :span="10">
            <img style="width:100%;" :src="images[3]" />
          </el-col>
          <el-col class="text" :span="14">
            <div>

              <div class="title padding20"><span class="pot"></span>Color matching and design logos for each level members.</div>
              <div class="info padding60">Select active colors and design unique logos for each level of membership. Easy to tell the differences and attract more female users.</div>

            </div>
          </el-col>
        </el-row>

        <el-row 
          :gutter="48"
          class="row"
        >
          <el-col :span="10">
            <img style="width:100%;" :src="images[4]" />
          </el-col>
          <el-col class="text" :span="14">
            <div>

              <div class="title padding20"><span class="pot"></span>Illustrating all benefits based on scenarios</div>
              <div class="info padding60">Explain which specific scenarios can have benefits so that can easily understand the value of membership rights</div>

            </div>
          </el-col>
        </el-row>

      </section>

    </Carousel>
    
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import config from '@/config/flightbutler'

export default {
  components: {
    Carousel
  },
  data() {
    return {
      prevOptions: {
        url: '/product/yiming',
        title: 'Yiminghui / 亿民惠',
        desc: 'User Research + Product Design'
      },
      nextOptions: {
        url: '/product/huoli',
        title: 'Huoli / 伙力食',
        desc: 'Product Manage + UX Design'
      },
      images: config.images
    }
  }
}
</script>

<style lang="less">
.flight{
  .section{
    padding:0 165px 80px 165px;

    .image{
      padding:0 38px 40px 38px;

      img{
        width:80%;
      }
    }

    .row{
      display: flex;
      align-items: center;

      .text{
        display: flex;
        align-items: center;
        color:#4A4A4A;

        .pot{
          width:10px;
          height:10px;
          background-color: #2E8DFE;
          display: inline-block;
          margin-right:10px;
          border-radius: 10px;
        }

        .title{
          font-size:22px;
          font-family:HelveticaNeue;
          color:#4A4A4A;
          line-height:27px;
        }

        .info{
          font-size:18px;
          font-family:Helvetica-LightOblique;
          font-weight:normal;
          color:4A4A4A;
          line-height:22px;
        }
      }

      img{
        box-shadow: 0 8px 20px rgba(151, 151, 151, 40%)
      }

    }
  }
}
</style>
