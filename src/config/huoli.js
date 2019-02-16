//  huoli页面图片配置入口

export default {
  //  图片模块按照从上到下，从左到右的顺序配置。
  //  如果当前业务模块内有多张同级图片，则新开数组配置，按照从左到右的顺序排列
  images: [
    require('../assets/basketball.png'),
    require('../assets/basketball.png'),

    //  以下为第3个业务模块中的两张并排的图片配置入口
    //  Improvement 2: Simplify pages
    [
      require('../assets/IMG_0058.jpg'),
      require('../assets/IMG_0058.jpg')
    ],

    //  以下为第4个业务模块中的四张并排的图片配置入口
    //  Case study 2: Enrich ways of search
    [
      require('../assets/IMG_0058.jpg'),
      require('../assets/IMG_0058.jpg'),
      require('../assets/IMG_0058.jpg'),
      require('../assets/IMG_0058.jpg')
    ],

    //  以下为第5个业务模块中的四张并排的图片配置入口
    //  How to vertify the vouchers
    [
      require('../assets/basketball.png'),
      require('../assets/basketball.png'),
      require('../assets/basketball.png'),
      require('../assets/basketball.png')
    ],

    //  以下为第6个业务模块中的四张并排的图片配置入口
    //  How to upload a product
    [
      //  上半部分左上
      require('../assets/basketball.png'),
      //  上半部分左下
      require('../assets/basketball.png'),
      //  上半部分右长图
      require('../assets/IMG_0058.jpg'),

      //  下半部分左长图
      require('../assets/IMG_0058.jpg'),
      //  下半部分右上
      require('../assets/basketball.png'),
      //  下半部分右下
      require('../assets/basketball.png')
    ],

    //  以下为第7个业务模块中的四张并排的图片配置入口
    //  How to settle bills
    [
      require('../assets/basketball.png'),
      require('../assets/basketball.png'),
      require('../assets/basketball.png'),
      require('../assets/basketball.png')
    ]
  ]

}
