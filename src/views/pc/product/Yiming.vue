<template>
  <div class="yiming">

    <Carousel :prev="prevOptions" :next="nextOptions">
      <div class="top">
        <div class="title bold center">Yiminghui Food</div>
        <div class="desc center gray">Create a online shop and order and customer management system to improve sales</div>

        <div class="intro space-between center">
          <div>
            <div class="bold fs18 padding20">TEAM</div>
            <div class="normal fs16 padding20">Yi Wan</div>
            <div class="normal fs16 padding20">Min Zhang</div>
            <div class="normal fs16">Chang Liu</div>
          </div>
          <div>
            <div class="bold fs18 padding20">MY ROLES</div>
            <div class="normal fs16 padding20">UX/UI Designer</div>
            <div class="bold fs16 padding20">DATE</div>
            <div class="normal fs16">Aug-Dec 2018</div>
          </div>
          <div>
          </div>
          <div>
            <div class="bold fs18 padding20">UR METHODS</div>
            <div class="normal fs16 padding20">Observe</div>
            <div class="normal fs16 padding20">Interview</div>
            <div class="normal fs16">Affinity Diagramming</div>
          </div>
          <div>
            <div class="bold fs18 padding20">DESIGN METHODS</div>
            <div class="normal fs16 padding20">Visioning/Storyboarding</div>
            <div class="normal fs16 padding20">Storytelling</div>
            <div class="normal fs16">Rapid Prototyping</div>
          </div>
        </div>
      </div>

      <section class="section">
        <div class="fs24 padding30">Challenge: Establishing online system to generate sales and data management .</div>
        
        <div class="fs18 padding30">
          Yiminghui Food Factory is a traditional rice noodle manufacturer which serves the customers in the central part of Wuhan and surrounding cities.
        </div>   

        <div class="fs18 padding30">
          It is using the quite tradition business way, they don’t have any online system to manage their sales and products. More than 400 orders are made by telephone everyday.
        </div>
             
        <div class="fs18">
          I worked with them on this 3-month project to tackle the problem by creating a postive online experience. I did comprehensive user research to collect needs and pain-points, and then brought ideas to fruition after rounds of validation and iteration.
        </div>
      </section>

      <section class="section">
        <div class="fs24 padding30">User research to find problems and gather insights</div>
        
        <div class="fs18 padding30">
          I spent one week gathering customers’ stories to understand how the factory works and who are their clients
        </div>  

        <el-row 
          :gutter="12"
          class="row"
        >
          <el-col :span="12">
            <img style="width:100%;" :src="images[0][0]" />
            <div class="tip">Customer service department calls all clients (400+) to get the order at 3:00 pm, then put the information in the excel sheet</div>
          </el-col>
          <el-col :span="12">
            <img style="width:100%;" :src="images[0][1]" />
            <div class="tip">Manufacturing department gets started to manufacture according to the orders at 6:00 pm.</div>
          </el-col>
        </el-row>

        <el-row 
          :gutter="12"
          class="row"
        >
          <el-col :span="12">
            <img style="width:100%;" :src="images[0][2]" />
            <div class="tip">Transportation department delivers the orders based on different regions</div>
          </el-col>
          <el-col :span="12">
            <img style="width:100%;" :src="images[0][3]" />
            <div class="tip">Business department collects bills from clients according to the excel sheet every 10 days.</div>
          </el-col>
        </el-row>
      </section>

      <section class="section">
        <div class="fs24 padding30">Research findings</div>
        
        <div class="fs18 padding30">
          By analyzing and synthesizing the data I gathered, I was able to get the heart of the matter and see what the research was telling me. This led to four insights of the internal problems and two insights of the clients’ need.These realizations helped me formulate what specific areas and problems my solution needs to target.
        </div>  

        <div class="img-tip padding20">
          Internal Problems
        </div>
        <el-row 
          :gutter="32"
          class="row zoom"
        >
          <el-col :span="12">
            <img style="width:100%;" :src="images[1][0]" />
          </el-col>
          <el-col :span="12">
            <img style="width:100%;" :src="images[1][1]" />
          </el-col>
        </el-row>
        <el-row 
          :gutter="32"
          class="row zoom padding30"
        >
          <el-col :span="12">
            <img style="width:100%;" :src="images[1][2]" />
          </el-col>
          <el-col :span="12">
            <img style="width:100%;" :src="images[1][3]" />
          </el-col>
        </el-row>

        <div class="img-tip padding20">
          Customer Needs
        </div>
        <el-row 
          :gutter="32"
          class="row zoom"
        >
          <el-col :span="12">
            <img style="width:100%;" :src="images[2][0]" />
          </el-col>
          <el-col :span="12">
            <img style="width:100%;" :src="images[2][1]" />
          </el-col>
        </el-row>

      </section>

      <section class="section">
        <div class="fs24 padding30">Persona</div>
        
        <div class="fs18 padding30">
          I created two personas reflecting the two main groups of clients I targeted at: old couples with low level of education and young independent entrepreneur.
        </div>  

        <div>
          <img :src="images[3]" />
        </div>
      </section>

      <section class="section">
        <div class="fs24 padding30">Product proposal</div>
        
        <div class="fs18 padding30">
          After discussion, we reached an agreement that our goal is to establish a comprehensive customer and order management system, as well as an online shop, or we can say a useful ordering tool. Considering the development cost and user characteristics, we finally decided to develop a mini app based on WeChat and build a CRM of our own
        </div>  

        <div class="fs18 padding30">
          <div>The benefits of doing this are: </div>
          <div>1.Almost all Chinese have WeChat, which greatly reduces the cost of learning for our customers. Moreover, most of our customers are elderly people who lack network experience. </div>
          <div>2, reduced development costs, small programs provide a lot of interfaces according to different industries, the adaptation of Android and ios is also easier. </div>
          <div>3, The traffic on WeChat is huge, which is helpful for the promotion and branding.</div>
        </div>  

        <div class="fs18 padding30">
          Since the front end uses a mini app, the backend cannot apply the existing service platform, so we decided to design a management system separately.
        </div>

        <div class="fs18 padding30">
          One point need to mention is that the Yiminghui does not want to make a traditional e-commerce to expand sales on a large scale, because their products need to be delivered in time. According to the scale of the factory, it can only serve cities within 5 hours drive, which determines that the online store is not a typical e-commerce, it’s more like a convenient tool to place orders
        </div>

        <div>
          <img :src="images[4]" />
        </div>

      </section>

      <section class="section">
        <div class="fs24 padding30">Prototyping</div>
        
        <div class="fs18 padding30">
          After validating various concepts with participants and clients, their feedback led me to create and develop prototypes. For both internal management system and online shop. I went through 1 round of paper prototyping, 2 rounds of medium fidelity, and 2 rounds of high-fidelity. The low-fidelity prototypes focused on concept validation and simple usability. The medium-fidelity rounds were more concerned with testing usability and flow between screens. Lastly, the high-fidelity prototypes focused on content and visual design.
        </div>  

        <div class="img-tip padding20">
          Low-fidelity Prototype of internal management system
        </div>
        <div class="image">
          <img :src="images[5]" />
        </div>

        <div class="img-tip padding20">
          Medium-fidelity Prototype of online shop
        </div>
        <div>
          <img :src="images[6]" />
        </div>
      </section>

      <section class="section">
        <div class="fs24 padding30">Usability Testing</div>
        
        <div class="fs18">
          During our medium-fidelity prototyping phase,the accountant、customer service、sales person and two of the clients participated in the usability testing.It consisted of 2 rounds with a total of 6 participants. For both rounds, we used Sketch and mockingbot to create a clickable prototype that participants interacted with inside a web browser.
        </div> 
      </section>
      
      <section class="section">
        <div class="fs24 padding30">The Final Design</div>
        
        <div class="fs18 padding30">
          For the CRM, I divided it into four modules——Clients managemt, Order management, Product management and Data analysis.
        </div> 

        <div class="image">
          <img :src="images[7]" />
        </div>
        <div class="info padding30">All clients’ infomation are collected and then assigned to different sales person by manager. So the clients can still be reached even though sales person left.</div>
      
        <div class="image">
          <img :src="images[8]" />
        </div>
        <div class="info padding30">Considering some clients may prefer the traditional way to make orders, the order list can be filtered by “Paid orders”, “Unpaid orders” and “No-order cilents”. Customers service only have to call “no order clients” and add the orders manually. All orders list can be export into excel sheet to double check with generation and transport department.</div>
      
        <div class="image">
          <img :src="images[9]" />
        </div>
        <div class="info padding30">For the last ten years, Yiminhui Food Factory has been focused on these four products and made a big sucess. They are planning to develop some other products. The card style makes it easy to understand their main products.</div>
        
        <div class="image">
          <img :src="images[10]" />
        </div>
        <div class="info">Daily orders ( both paid online orders and unpaid phone orders ) can be checked. Sales volum can be easily compared between products and sales areas. Sales performance is clear and all data can be export directly to support finance accounting.</div>
      
      </section> 

    </Carousel>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import config from '@/config/yiming'

export default {
  components: {
    Carousel
  },
  data() {
    return {
      prevOptions: {
        url: '/product/tripal',
        title: 'Tripflow',
        desc: 'Product Design'
      },
      nextOptions: {
        url: '/product/flightbutler',
        title: 'Flight Butler / 航班管家',
        desc: 'UX Design'
      },
      images: config.images
    }
  }
}
</script>

<style lang="less">
.yiming{
  .zoom{
    padding-left:30px;
    padding-right:30px;
  }

  .section{
    padding:0 165px 80px 165px;

    .image{
      padding-bottom:30px;

      img{
        width:100%;
      }
    }

    .tip{
      text-align: center;
      padding:5px 15px 0 15px;
      font-size:18px;
      font-family:Helvetica-Light;
      font-weight:300;
      color: #4A4A4A;
      line-height:22px;
    }

    .img-tip{
      font-size:24px;
      font-family:Helvetica-Bold;
      font-weight:bold;
      color:#B04746;
      line-height:29px;
      text-align: center;
    }

    .info{
      font-size:16px;
      font-family:Helvetica-LightOblique;
      font-weight:normal;
      color:#4A4A4A;
      line-height:19px;
    }
  }
}
</style>
