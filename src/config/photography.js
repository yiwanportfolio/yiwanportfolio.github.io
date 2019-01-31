//  摄影作品配置入口，用于直接接入图库作品
//  增加图片只需要找到对应的列，然后将图片的网络完整地址加入即可

export default {
  columns: [
    //  第一列
    [
      require('../assets/2.5D-animinal.png'),
      require('../assets/Huoli.png'),
      require('../assets/IMG_0058.jpg'),
      require('../assets/basketball.png')
    ],
    //  第二列
    [
      require('../assets/basketball.png'),
      require('../assets/IMG_0058.jpg'),
      require('../assets/2.5D-animinal.png')
    ],
    //  第三列
    [
      require('../assets/IMG_0058.jpg'),
      require('../assets/basketball.png'),
      require('../assets/Huoli.png')
    ]
  ]
}
