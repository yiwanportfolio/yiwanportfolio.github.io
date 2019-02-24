<template>
  <div class="resume">
    <el-card>
      <section class="info">
        <el-row>
          <el-col :span="8">
            <img class="avatar" :src="require('@/assets/avatar.jpg')" />
          </el-col>
          <el-col :span="16">
            <div class="title">
              <span class="red" style="padding-right:30px;">YI WAN</span>
              <span class="pink">UX/UI DESIGNE</span>
            </div>

            <div class="role gray">UX UI WEB MOBILE PRODUCT PHOTOGRAPHY</div>
            <div class="portforlio black">Portforlio : https://yiwanportfolio.github.io</div>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">
            <div class="red ex-title">EXPERIENCE</div>
          </el-col>
        </el-row>

        <el-row :gutter="22" class="exper">
          <el-col :span="8">
            <div class="bold black">Yiminghui Food Ltd</div>
            <div class="normal black">Aug 2018 - Dec 2018</div>
          </el-col>
          <el-col :span="16">
            <div class="bold">
              <span class="black">Product Designer</span>
              <span class="gray"> (Freelance)</span>
            </div>
            <div class="normal black">Research,ideate,design and prototype for Yiminghui Food Ltd online shop and internal management products and service.</div>
          </el-col>
        </el-row>

        <el-row :gutter="22" class="exper">
          <el-col :span="8">
            <div class="bold black">NZ Messenger</div>
            <div class="normal black">May 2018 - Aug 2018</div>
          </el-col>
          <el-col :span="16">
            <div class="bold">
              <span class="black">Graphic Designer</span>
              <span class="gray"> (Full-time)</span>
            </div>
            <div class="normal black">Responsible for NZ Messenger weekly newspaper typography and advertising design, monthly magazine content design, typography and advertising design for customers.</div>
          </el-col>
        </el-row>

        <el-row :gutter="22" class="exper">
          <el-col :span="8">
            <div class="bold black">Huolitianhui Tech</div>
            <div class="normal black">May 2015 - Dec 2016</div>
          </el-col>
          <el-col :span="16">
            <div class="bold">
              <span class="black">PM/UX Designer of Huoli Product</span>
              <span class="gray"> (Full-time)</span>
            </div>
            <div class="normal black">Lead the UX design work of this project from its initial concept generation to launch. Behind its each release, you would find me in the end-to-end design cycle: researching pain points, brainstorming ideas, story mapping flows, wireframing and prototyping design concepts, usability testing to get feedback, and working with cross-functional teams to get it launched.</div>

            <div class="bold" style="margin-top:15px;">
              <span class="black">UX Designer of Flight Bulter Product</span>
              <span class="gray"> (Volunteer)</span>
            </div>
            <div class="normal black">Conducted interviews and heuristic evaluation to identify user pain points of the membership card system and provided design recommendations.</div>
          </el-col>
        </el-row>

        <el-row :gutter="22" class="exper">
          <el-col :span="8">
            <div class="bold black">Mobotap Tech</div>
            <div class="normal black">Feb 2014 - May 2015</div>
          </el-col>
          <el-col :span="16">
            <div class="bold">
              <span class="black">Overseas Marketing Assistant</span>
              <span class="gray"> (Full-time)</span>
            </div>
            <div class="normal black">Responsible for promotions of Dolphin Browser in the US market</div>
          </el-col>
        </el-row>

      </section>

      <div class="contract">
        <el-row class="exper">
          <el-col :span="8">
            <div class="bold red ex-title">EDUCATION</div>
            <div class="normal black">Aug 2012</div>
            <div class="normal black">Jianghan University</div>
            <div class="normal black" style="font-family:Helvetica;">Social psychology</div>

            <div class="split"></div>

            <div class="bold red ex-title">CONTACT</div>
            <div class="normal black"><i class="el-icon-message"></i>0211068631</div>
            <div class="normal black"><i class="el-icon-phone-outline"></i>yeewan912@gmail.com</div>
            <div class="normal black"><img class="wechat" :src="require('@/assets/wechat.png')" />wanyi0912</div>
          </el-col>
          <el-col :span="16">
            <el-row>
              <el-col :span="12">
                <div class="bold red ex-title center">SKILLS</div>
                <img class="image" :src="require('@/assets/Skills.png')" />
              </el-col>
              <el-col :span="12">
                <div class="bold red ex-title center">TOOLS</div>
                <img class="image" :src="require('@/assets/tools.png')" />
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </el-card>

    <div class="opera">
      <a class="red download" :href="downloadUrl" target="_blank">Download</a>
    </div>
  </div>
</template>

<script>
import config from '@/config/resume'
export default {
  data(){
    return {
      downloadUrl: config.downloadUrl
    }
  }
}
</script>

<style lang="less">
.resume{
  padding: 80px 170px 40px;

  .red{color:#C54744}
  .pink{color: #E19B99}
  .black{color: #2F3138}
  .gray{color: #BBBBBB}

  .bold{
    font-size:24px;
    font-family:HelveticaNeue-Medium;
    font-weight:500;
    line-height:29px;
    padding:0 10px 10px 0;
  }
  .normal{
    font-size:22px;
    font-family:HelveticaNeue-Light;
    font-weight:300;
    line-height:27px;
    padding:0 10px 5px 0;
  }

  .center{text-align: center}

  .info{
    padding: 28px 84px;

    .avatar{
      width:60%;
      max-width: 160px;
      border-radius: 200px;
    }

    .title{
      padding:8px 0;
      font-size:40px;
      font-family:HelveticaNeue-Light;
      font-weight:300;
      line-height:49px;
    }

    .role{
      padding:8px 0;
      font-size:24px;
      font-family:HelveticaNeue-Light;
      font-weight:300;
      line-height:29px;
    }

    .portforlio{
      font-size:26px;
      font-family:HelveticaNeue-Light;
      font-weight:300;
      line-height:32px;
    }

    .ex-title{
      font-size:26px;
      font-family:HelveticaNeue;
      line-height:32px;
      padding:20px 0;
    }

    .exper{
      margin-bottom:30px;
    }
  }

  .contract{
    padding:30px 0 30px 52px;

    .split{height:43px;}

    .ex-title{padding-bottom: 20px;}

    i{padding-right:8px;}

    .wechat{
      width:22px;
      height:22px;
      padding-right:8px;
      vertical-align: middle;
    }

    .half{
      width:50%;
      padding: 0 10px;
    }

    .image{
      width:100%;
    }
  }

  .opera{
    padding:80px 0;

    .download{
      outline: 0;
      margin:0 auto;
      display: block;
      cursor: pointer;
      width:226px;
      height:66px;
      font-size:24px;
      font-family:Helvetica;
      line-height:66px;
      background-color:#fff;
      border: 3px solid #C44542;
      border-radius:48px;
      text-align: center;
      text-decoration: none;
    }
  }
}
</style>
