<template>
  <div class="illustrations">
    <section class="desc">
      <p>I draw and illustrate frequently, based off of what I see and love. </p>
      <p>I like digital art even though I’m still in the learning stage. </p>
      <p>Here are some of my recent work.All of them are for fun or gifts for friends. </p>
      <p>Some of them are linyi works for daily pratice，I’ve already marked .</p>
    </section>

    <div class="photo">
      <image-card
        :images="[{
          url: require('@/assets/2.5D-animinal.png')
        }]"
        title="2.5D ANIMAL ICON DESIGN"
      />

      <div class="float">
        <image-card
          :images="[{
            url: require('@/assets/Team of Huoli.png')
          }]"
          title="HUOLI TEAM AVATARS"
          class="half"
        />
        <image-card
          :images="[{
            url: require('@/assets/Team of Flight Bulter.png')
          }]"
          title="FLIGHT BULTER TEAM AVATARS"
          class="half"
        />
      </div>

      <image-card
        :images="[{
          url: require('@/assets/Camera.png'),
          width: '48%'
        },{
          url: require('@/assets/basketball.png'),
          width: '48%'
        }]"
        title="PHOTOSHOP DAILY PRACTICE"
        desc="(COPYRIGTH BELONGS TO ORIGINAL AUTHOR)"
      />

      <image-card
        :images="[{
          url: require('@/assets/beijing.jpg')
        }]"
        title="BEIJING SERIES"
        desc="(THE GREAT WALL / CANDIED HAW / SIHEYUAN)"
      />
    </div>

    <image-card
      align="center"
      :images="[{
        url: require('@/assets/IMG_0058.jpg'),
        width: '30%'
      },{
        url: require('@/assets/Procreate-leaf.jpg'),
        width: '48%'
      }]"
      title="PROCREATE PRATICE"
      desc="(COPYRIGTH BELONGS TO GAL SHIR)"
    />

    <image-card
      align="center"
      :images="[{
        url: require('@/assets/Procreate-man.jpg'),
        width: '48%'
      }]"
      title="PROCREATE PRATICE"
      desc="(COPYRIGTH BELONGS TO ORIGINAL AUTHOR)"
    />

    <image-card
      :images="[{
        url: require('@/assets/IMG_3675.jpg'),
        width: '48%'
      },{
        url: require('@/assets/Procreate-couple.jpg'),
        width: '48%'
      }]"
      title="PROCREATE PRATICE"
      desc="(I TOOK THIS PHOTO ON THE TOP OF CHRISTCHURCH GONDOLA)"
    />
  </div>
</template>

<script>
import ImageCard from '@/components/ImageCard.vue'

export default {
  components: {
    ImageCard
  },
  data() {
    return {
      images: (() => {})()
    }
  }
}
</script>

<style lang="less">
.illustrations{
  padding:40px 150px 50px;

  .desc{
    margin: 0 auto;

    p{
      font-size:22px;
      font-family:Helvetica-Light;
      font-weight:300;
      color:#4A4A4A;
      line-height:30px;
      text-align: center;
    }
  }

  .photo{

    .float{
      display: -webkit-flex; /* Safari */
      display: flex;
      justify-content: space-between;

      .half{
        width:48%;
      }
    }

  }
}
</style>
