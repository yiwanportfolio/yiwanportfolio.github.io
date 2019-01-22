# yiwanportfolio.github.io

##		一、准备工作
以下是启动项目需要的一些准备安装工作，首先你需要一台mac电脑（因为我没有window所以不写了），请按照下面的流程注意安装，有问题......自行google！！:-D

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