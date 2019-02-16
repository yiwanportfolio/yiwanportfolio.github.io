<template>
  <div class="tripal">
    <Carousel :next="nextOptions">
      <div class="top">
        <div class="title bold center">TriPal</div>
        <div class="desc center gray">Improve travel experience with artificial intelligence</div>

        <div class="intro space-between center">
          <div>
            <div class="bold fs28">TEAM</div>
            <div class="normal fs22">Yi Wan</div>
          </div>
          <div>
            <div class="bold fs28">MY ROLES</div>
            <div class="normal fs22">Product Designer</div>
          </div>
          <div>
            <div class="bold fs28">DATE</div>
            <div class="normal fs22">Nov-Dec 2018</div>
          </div>
          <div>
            <div class="bold fs28">DESIGN TOOLS</div>
            <div class="normal fs22">Sketch + Principle</div>
          </div>
        </div>
      </div>
      <div>
        <img style="width:100%; padding-bottom:40px;" :src="require('@/assets/tripal-top.png')" />
      </div>

      <section class="section">
        <div class="bold fs28 padding60">What is TriPal ?</div>
        <div class="normal fs22 padding40">Travelling is good. But what if you are responsible for planning the trip? Places, air tickets, weather, accommodations, food, budget…A lot has to be considered to ensure a perfect journey. However, none of the existing web service take all these into account.</div>
        <div class="normal fs22 padding40">That’s not the worst. You suddenly realized that you can neither remember the name of restaurant recommended by a friend, nor figure out the less well-known site you brushed on the Instagram.</div>
        <div class="normal fs22 padding40">You just get lost when you are immersed into all of these stuff.</div>
        <div class="normal fs22 padding40">Now you can plan your trip without digging into the chaos.Because of TriPal.</div>
        <div class="normal fs22 padding40 ">During my last trip in Thailand, I envisioned how the travel experience would be improved with the development of artificial intelligence in the future.</div>
      </section>

      <div class="video">
        <video :src="video.url">{{video.noVideoTips}}</video>
      </div>

      <section class="section">
        <div class="bold fs28 padding40">What does TriPal do ?</div>

        <el-row 
          v-for="(imageUrl, index) in images" 
          :key="index"
          :gutter="32"
          class="gif-block"
        >
          <el-col :span="12">
            <img class="gif" :src="imageUrl" />
          </el-col>
          <el-col class="text" :span="12">
            <div>{{tripalCards[index]}}</div>
          </el-col>
        </el-row>

      </section>
    </Carousel>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import config from '@/config/tripal'

export default {
  components: {
    Carousel
  },
  data(){
    return {
      nextOptions: {
        url: '/product/yiming',
        title: 'Yiminghui / 亿民惠',
        desc: 'User Research + Product Design'
      },
      video: {
        url: config.videoUrl,
        noVideoTips: config.noVideoTips
      },

      images: config.gifs,

      tripalCards: [
        'As your bestie, TriPal keeps track of your daily lives on all platforms. You liked the photo of elephant on Instagram. You collected the homestay on airbnb, and your bestie recommend a Thai restaurant through WeChat …TriPal knows all your preferences.',
        'With TriPal, you just select dates and places of interest, and it will plan your journey automatically.',
        'You can modify any details with super intelligent suggestions.Such as you can encounter a festival if rearrange the order of activities.Or do not go to that island because typhoon is coming.',
        'TriPal works on any platforms, and will ring you smart suggestions when you are on the go.Like remind you to make a reservation two days in advance since the restaurant is quite popular. And please wear long-sleeved today because you are going to visit temples.',
        'Forget the souvenirs? Don’t worry, TriPal has arranged everything, you just click the payment bottom, and pick up your gifts at the airport.'
      ]
    }
  }
}
</script>

<style lang="less">
.tripal{

  .section{
    padding: 40px 150px;

    .gif-block{
      padding-bottom: 40px;

      .gif{
        width:100%;
        height:317px;
      }

      .text{
        font-size:22px;
        font-family:Helvetica-Light;
        font-weight:300;
        color:rgba(74,74,74,1);
        line-height:26px;
        display: flex;
        align-items: center;
        height:317px;
      }
    }
    
  }

  .video{
    padding: 40px 150px;

    video{
      width:100%;
      border: 1px solid #ccc;
    }
  }
}
</style>
