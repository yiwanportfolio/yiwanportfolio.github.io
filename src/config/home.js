//  首页配置入口

export default {

  //  四个作品卡片的配置信息
  products: [{
    //  背景颜色，这里需要在代码中先声明后再使用，目前四个基本色（yellow, green, blue, red）已定义，可重复使用
    color: 'yellow',
    //  作品logo图片，建议放到asset当中，采用小体积图片
    //  如果是外部引入的图片，则使用完整路径，与摄影页面的图片配置规则相同
    logo: require('../assets/TriPal.png'),
    //  产品名称（粗体文字）
    product: 'TriPal ( Concept product )',
    //  职位or角色（浅色补充字体）
    role: 'Product Design'
  }, {
    color: 'green',
    logo: require('../assets/Yiminghui.png'),
    product: '益民惠 / Yiming',
    role: 'User Research + Product Design'
  }, {
    color: 'blue',
    logo: require('../assets//Flight Bulter.png'),
    product: '航班管家 / Flight Butler',
    role: 'User experience design'
  }, {
    color: 'red',
    logo: require('../assets/Huoli.png'),
    product: '伙力食 / Huoli',
    role: 'Product Manager + UX'
  }]
}
