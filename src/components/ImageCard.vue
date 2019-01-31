<template>
  <div class="image-card"
    :style="{
      height: height + 'px'
    }"
  >
    <div
      class="image-box"
      :style="{
        justifyContent: align || 'space-between'
      }"
    >
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image.url"
        :style="{
          width: image.width || '100%'
        }"
      />
    </div>

    <div class="text">
      <p>{{title}}</p>
      <p>{{desc}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    align: {
      type: String
    },
    width: {
      type: Number
    },
    height: {
      type: Number
    },
    images: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String
    }
  },
  mounted () {
  }
}
</script>

<style lang="less">
.image-card{
  margin:25px 0;

  .image-box{
    display: -webkit-flex; /* Safari */
    display: flex;
    align-items:center;

    img{
      margin: 0 15px;
    }
  }

  .text{
    padding: 30px 0;
    p{
      font-size:18px;
      font-family:Helvetica-Light;
      font-weight:300;
      color:#4A4A4A;
      line-height:24px;
      text-align: center;
    }
  }
}
</style>
