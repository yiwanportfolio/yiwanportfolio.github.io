//  huoli页面图片配置入口

export default {
  //  图片模块按照从上到下，从左到右的顺序配置。
  //  如果当前业务模块内有多张同级图片，则新开数组配置，按照从左到右的顺序排列
  images: [
    require('../assets/huoli/case study1.png'),
    require('../assets/huoli/improvement1.png'),

    //  以下为第3个业务模块中的两张并排的图片配置入口
    //  Improvement 2: Simplify pages
    [
      require('../assets/huoli/improvement 2_before.png'),
      require('../assets/huoli/improvement 2_after.png')
    ],

    //  以下为第4个业务模块中的四张并排的图片配置入口
    //  Case study 2: Enrich ways of search
    [
      require('../assets/huoli/Connecting search.png'),
      require('../assets/huoli/Popular searches+search history.png'),
      require('../assets/huoli/Calendar search.png'),
      require('../assets/huoli/Map search.png')
    ],

    //  以下为第5个业务模块中的四张并排的图片配置入口
    //  How to vertify the vouchers
    [
      require('../assets/huoli/1-11.png'),
      require('../assets/huoli/1-17.png'),
      require('../assets/huoli/1-36.png'),
      require('../assets/huoli/1-15.png')
    ],

    //  以下为第6个业务模块中的四张并排的图片配置入口
    //  How to upload a product
    [
      //  上半部分左上
      require('../assets/huoli/1-22.png'),
      //  上半部分左下
      require('../assets/huoli/1-23.png'),
      //  上半部分右长图
      require('../assets/huoli/1-32.png'),

      //  下半部分左长图
      require('../assets/huoli/2-05.png'),
      //  下半部分右上
      require('../assets/huoli/2-08.png'),
      //  下半部分右下
      require('../assets/huoli/2-10.png')
    ],

    //  以下为第7个业务模块中的四张并排的图片配置入口
    //  How to settle bills
    [
      require('../assets/huoli/2-11.png'),
      require('../assets/huoli/2-12.png'),
      require('../assets/huoli/2-13.png'),
      require('../assets/huoli/2-18.png')
    ]
  ]

}
