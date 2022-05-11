const ApiRootUrl = 'http://127.0.0.1:8360/api/';

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
  applyCheck:ApiRootUrl + 'auth/applyCheck',
  playRecord: ApiRootUrl + 'auth/playRecord'
};