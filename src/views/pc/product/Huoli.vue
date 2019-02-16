<template>
  <div class="huoli">

    <Carousel :prev="prevOptions">
      <div class="top">
        <div class="title bold center">Huoli</div>
        <div class="desc center gray">Cognitive products and service for Private Kitchen</div>

        <div class="intro space-between center">
          <div>
            <div class="bold fs28">MY ROLES</div>
            <div class="normal fs22">Product Manager</div>
          </div>
          <div>
            <div class="bold fs28">DATE</div>
            <div class="normal fs22">May 2015 - Dec 2016</div>
          </div>
          <div>
            <div class="bold fs28">METHODS</div>
            <div class="normal fs22 padding40">Storymapping</div>
            <div class="normal fs22 padding40">Rapid Prototyping</div>
            <div class="normal fs22">Usability Testing</div>
          </div>
          <div>
            <div class="bold fs28">What I Did</div>
            <div class="normal fs22 padding40">User Reasearch</div>
            <div class="normal fs22 padding40">Identify Painpoints</div>
            <div class="normal fs22">Product Design</div>
          </div>
        </div>
      </div>

      <section class="section zoom">
        <div class="fs22 padding40">
          <span class="red">Huoli</span>  
          is a platform to provide private kitchen food. It is hoped that based on “sharing economy” it could solve the problems of yong people in big cities who has “eating issues”, like too busy to cook and restaurant food is not healthy, or service those who are desire for “fresh things”
        </div>

        <div class="fs22 padding40">
          I've been leading the UX design work of this project from its initial concept generation to launch. Behind its each release, you would find me in the end-to-end design cycle: researching pain points, brainstorming ideas, storymapping flows, wireframing and prototyping design concepts, usability testing to get feedback, and working with cross-functional teams to get it launched.
        </div>

        <div class="fs22 padding40">
          I'm going to showcase my work by a few case studies here.Don't hesitate to reach out to learn more!
        </div>

        <div class="fs22 padding40">
          <span class="red">Check it out on iTunes (Chinese version only)</span>It is a shame that Huoli decided has stoped updating in the early of 2018.
        </div>
      </section>

      <section class="section zoom">
        <div class="bold fs28 padding40">Case study 1: Reorganize all service</div>

        <div class="fs22 padding40">
          One very important thing is to reorganize our products and service,try to deliver them to users in a more acceptable way. When a user opens the app to find something interesting, they usually don't have a clear answer. We want to influence user decisions through content rather than price. It was a challenge to distinguish from traditional e-commerce collections.I’ve spent a good amount of time on improving this experience and testing the changes.
        </div>

        <div class="image">
          <img :src="images[0]" />
        </div>

        <div class="bold fs22 padding40">Improvement 1: Improving home page</div>
        <div class="fs22 padding40">
          we have tried a variety of different products and finally found that "offline dining" is different from accommodation or cars, they are completely idle resources, but “making meals” is not. So we can not like Airbnb or Uber rely on a single service, that’s why we kept the products of online e-commerce. But I tried to clearly distinguish the two by improving home page.
        </div>
        <div class="image">
          <img :src="images[1]" />
        </div>

        <div class="bold fs22 padding40">Improvement 2: Simplify pages</div>
        <div class="fs22 padding40">
          I moved the bottom tab bar to the secondary page to reduce information noise so that users could be immersed into the content in the maximum range.
        </div>
        <el-row 
          :gutter="64"
          style="width:90%;margin:0 auto"
          class="row"
        >
          <el-col :span="12">
            <img style="width:100%;" :src="images[2][0]" />
            <div class="tip fs22 bold">Before</div>
          </el-col>
          <el-col :span="12">
            <img style="width:100%;" :src="images[2][1]" />
            <div class="tip fs22 bold">After</div>
          </el-col>
        </el-row>

      </section>

      <section class="section">
        <div class="bold fs28 zoom">Case study 2: Enrich ways of search</div>

        <div class="fs22 zoom">
          With the increasing of products, users have higher requirements for the accuracy and effectiveness of search. To help users find what they are interested in as quickly as possible, we have enriched ways to search. Added "Connecting Search”,”Popular searches”
        </div>

        <el-row 
          :gutter="24"
          style="margin:0 90px;"
          class="row"
        >
          <el-col :span="6">
            <img style="width:100%;" :src="images[3][0]" />
            <div class="tip fs22 bold">Connecting Search</div>
          </el-col>
          <el-col :span="6">
            <img style="width:100%;" :src="images[3][1]" />
            <div class="tip fs22 bold">Popular Searches + Search History</div>
          </el-col>
          <el-col :span="6">
            <img style="width:100%;" :src="images[3][2]" />
            <div class="tip fs22 bold">Calendar Search</div>
          </el-col>
          <el-col :span="6">
            <img style="width:100%;" :src="images[3][3]" />
            <div class="tip fs22 bold">Map Search</div>
          </el-col>
        </el-row>
      </section>

      <section class="section padding40">
        <div class="bold fs28 zoom">Case study 3: Improve the supplier's back office system</div>

        <div class="fs22 zoom">
          Since huoli is aimed at the bilateral market, providing an easy-to-use back-end system for suppliers can both improve the user experience and greatly reduce the workload of the business unit. I paired with a UI designer to ideate, design and create this product from scratch - it was a very challenging and rewarding journey. It gave me the chance to experience a whole UX design cycle from user research all the way to high-fidelity design. Its technical complexity and business logic made the design process extra fun.
        </div>

        <div class="fs22 zoom">
          Here are some pages of the system
        </div>

        <el-row 
          :gutter="12"
          style="margin:0 20px;"
          class="row padding10"
        >
          <el-col :span="12">
            <img style="width:100%;" :src="images[4][0]" />
          </el-col>
          <el-col :span="12">
            <img style="width:100%;" :src="images[4][1]" />
          </el-col>
        </el-row>
        <el-row 
          :gutter="12"
          style="margin:0 20px;"
          class="row padding10"
        >
          <el-col :span="12">
            <img style="width:100%;" :src="images[4][2]" />
          </el-col>
          <el-col :span="12">
            <img style="width:100%;" :src="images[4][3]" />
          </el-col>
        </el-row>
        <div class="tip fs22 bold padding40">
          How to vertify the vouchers
        </div>

        <el-row 
          :gutter="12"
          style="margin:0 20px;"
          class="row padding10"
        >
          <el-col :span="12">
            <img style="width:100%;" :src="images[5][0]" />
            <img style="width:100%;" :src="images[5][1]" />
          </el-col>
          <el-col :span="12">
            <img style="width:100%;" :src="images[5][2]" />
          </el-col>
        </el-row>

        <el-row 
          :gutter="12"
          style="margin:0 20px;"
          class="row padding10"
        >
          <el-col :span="12">
            <img style="width:100%;" :src="images[5][3]" />
          </el-col>
          <el-col :span="12">
            <img style="width:100%;" :src="images[5][4]" />
            <img style="width:100%;" :src="images[5][5]" />
          </el-col>
        </el-row>
        <div class="tip fs22 bold padding40">
          How to upload a product
        </div>


        <el-row 
          :gutter="12"
          style="margin:0 20px;"
          class="row padding10"
        >
          <el-col :span="12">
            <img style="width:100%;" :src="images[6][0]" />
          </el-col>
          <el-col :span="12">
            <img style="width:100%;" :src="images[6][1]" />
          </el-col>
        </el-row>
        <el-row 
          :gutter="12"
          style="margin:0 20px;"
          class="row padding10"
        >
          <el-col :span="12">
            <img style="width:100%;" :src="images[6][2]" />
          </el-col>
          <el-col :span="12">
            <img style="width:100%;" :src="images[6][3]" />
          </el-col>
        </el-row>
        <div class="tip fs22 bold">
          How to settle bills
        </div>

      </section>

    </Carousel>

  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import config from '@/config/huoli'

export default {
  components: {
    Carousel
  },
  data() {
    return {
      prevOptions: {
        url: '/product/flightbutler',
        title: 'Flight Bulter / 航班管家',
        desc: 'UX Design'
      },
      images: config.images
    }
  }
}
</script>

<style lang="less">
.huoli{
  .zoom{
    padding:0 165px 40px 165px;
  }

  .section{

    .image{
      padding-bottom:40px;

      img{
        width:100%;
      }
    }

    .tip{
      color: #D75667;
      text-align: center;
      padding:20px 30px 40px 30px;
    }
  }
}
</style>
