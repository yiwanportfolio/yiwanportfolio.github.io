# yiwanportfolio.github.io

##		一、准备工作
以下是启动项目需要的一些准备工作，首先你需要一台mac电脑，请按照下面的流程逐步安装，有问题......自行google！！:-D

###	1.安装nodejs  
   
点击[这里](https://nodejs.org/en/download/)，选择系统信息后点击下载即可。下载完之后就是一路无脑next，即可完成安装       
    
打开终端，敲入如下命令，如果你看到预期的结果，恭喜你，你成功通关node安装 
   
```
# node -v	    //查看node版本
-> v10.xx.xx     //安装成功时的输出结果   

# npm -v        //查看node包管理工具版本
-> 6.xx.xx.     //输出结果
```

###	2.安装vue-cli 
这个是vue的开发工具，安装后方便后续项目的维护。你应该还没关闭终端吧，很好，后面全靠它     
     
```
# npm install -g @vue/cli
......			//安装过程（long * 2 time）

# vue --version     //安装完成后查看版本
-> 3.x.x     //开发工具版本    
```  

###		3.项目启动
到此为止，你所需要启动该项目的工具已经全部搞定。你只需要clone下项目代码，执行一下命令，然后根据项目的提示打开浏览器即可看到最新的效果.    

```
# cd yiwanportfolio.github.io		

# npm install    //安装项目依赖包（long * 3 time）

# npm run serve      //开发模式启动

```

##		二、规范说明
###		1.图片资源的管理
对于图片及视频资源采用配置的方式进行管理，对应的配置入口在项目以下路径中.   

```
src/config/xxxx.js      //文件名为对应的业务页面，文件内包含详细注释
```    

以photography页面为例，该页面为三列结构，用于显示所有图片信息，因此在 ***src/config/photography.js*** 文件内列出以下内容     

```
export default {
  columns: [
    //  第一列，所有图片按照从上到下的顺序加载和显示
    [
      //  方式1
      require('../assets/image1.png'),
      //  方式2
      'http://www.xxxx.com/disk/xxxx/image2.png',
      'http://www.xxxx.com/disk/xxxx/image3.png',
      'http://www.xxxx.com/disk/xxxx/image4.png',
      require('../assets/image5.png'),
      'http://www.xxxx.com/disk/xxxx/image6.png'
    ],
    //  第二列
    [
    	//同上
    ],
    //  第三列
    [
    	//同上
    ]
  ]
}
```
columns表示列配置，对应有三列数组，可以选择两种方式引入图片资源。     
     
+ 方式1：用于载入项目内置的图片。图片资源统一存放在 ***assets*** 目录下，建议体积较小的图片使用该方式管理和引入
+ 方式2：用于引入项目之外的图片。如果图片存放在项目之外或图库中，可以使用这种方式引入，建议体积较大的图片采用这种方式引入