const ApiRootUrl = 'http://192.168.1.7:8360/api/';

module.exports = {
  IndexUrl: ApiRootUrl + 'index/index', //首页数据接口
  CatalogList: ApiRootUrl + 'catalog/index',  //分类目录全部分类数据接口
  CatalogCurrent: ApiRootUrl + 'catalog/current',  //分类目录当前分类数据接口

  AuthLoginByWeixin: ApiRootUrl + 'auth/loginByWeixin', //微信登录
  Userinfochange: ApiRootUrl + 'auth/school', //绑定学号
  Userinfocheck: ApiRootUrl + 'auth/schoolCheck', //初始化学号
  play: ApiRootUrl + 'auth/play', //打卡提交
  SchoolInformCheck: ApiRootUrl + 'auth/schoolInformCheck', //学院通知查询
  SchoolOutInformCheck: ApiRootUrl + 'auth/schoolOutInformCheck',
  apply:ApiRootUrl + 'auth/apply',
  qrcode:ApiRootUrl + 'auth/qrcode',
  qrcodeCheck:ApiRootUrl + 'auth/qrcodeCheck',
  qrcodeExprieCheck:ApiRootUrl + 'auth/qrcodeExprieCheck',

  GoodsCount: ApiRootUrl + 'goods/count',  //统计商品总数
  GoodsList: ApiRootUrl + 'goods/list',  //获得商品列表
  GoodsCategory: ApiRootUrl + 'goods/category',  //获得分类数据
  GoodsDetail: ApiRootUrl + 'goods/detail',  //获得商品的详情
  GoodsNew: ApiRootUrl + 'goods/new',  //新品
  GoodsHot: ApiRootUrl + 'goods/hot',  //热门
  GoodsRelated: ApiRootUrl + 'goods/related',  //商品详情页的关联商品（大家都在看）

  BrandList: ApiRootUrl + 'brand/list',  //品牌列表
  BrandDetail: ApiRootUrl + 'brand/detail',  //品牌详情

  CartList: ApiRootUrl + 'cart/index', //获取购物车的数据
  CartAdd: ApiRootUrl + 'cart/add', // 添加商品到购物车
  CartUpdate: ApiRootUrl + 'cart/update', // 更新购物车的商品
  CartDelete: ApiRootUrl + 'cart/delete', // 删除购物车的商品
  CartChecked: ApiRootUrl + 'cart/checked', // 选择或取消选择商品
  CartGoodsCount: ApiRootUrl + 'cart/goodscount', // 获取购物车商品件数
  CartCheckout: ApiRootUrl + 'cart/checkout', // 下单前信息确认

  OrderSubmit: ApiRootUrl + 'order/submit', // 提交订单
  PayPrepayId: ApiRootUrl + 'pay/prepay', //获取微信统一下单prepay_id

  CollectList: ApiRootUrl + 'collect/list',  //收藏列表
  CollectAddOrDelete: ApiRootUrl + 'collect/addordelete',  //添加或取消收藏

  CommentList: ApiRootUrl + 'comment/list',  //评论列表
  CommentCount: ApiRootUrl + 'comment/count',  //评论总数
  CommentPost: ApiRootUrl + 'comment/post',   //发表评论

  TopicList: ApiRootUrl + 'topic/list',  //专题列表
  TopicDetail: ApiRootUrl + 'topic/detail',  //专题详情
  TopicRelated: ApiRootUrl + 'topic/related',  //相关专题

  SearchIndex: ApiRootUrl + 'search/index',  //搜索页面数据
  SearchResult: ApiRootUrl + 'search/result',  //搜索数据
  SearchHelper: ApiRootUrl + 'search/helper',  //搜索帮助
  SearchClearHistory: ApiRootUrl + 'search/clearhistory',  //搜索帮助
  
  FootprintList: ApiRootUrl + 'footprint/list',  //足迹列表
  FootprintDelete: ApiRootUrl + 'footprint/delete',  //删除足迹
};