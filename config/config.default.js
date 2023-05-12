/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1682651587407_6916';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  // swaggerdoc
  config.swaggerdoc = {
    dirScanner: './app/controller', // 配置自动扫描的控制器路径
    apiInfo: {
      title: '接口文档', // 接口文档的标题
      description: 'swagger 测试接口文档', // 接口文档描述
      version: '1.0.0', // 接口文档版本
      termsOfService: 'http://swagger.io/terms/', // 服务条件
      contact: {
        email: 'sunjianfeng@csxiaoyao.com', // 联系方式
      },
      license: {
        name: 'Apache 2.0',
        url: 'http://www.apache.org/licenses/LICENSE-2.0.html',
      },
    },
    basePath: '/', // 配置基础路径
    schemes: [ 'http', 'https' ], // 配置支持的协议
    consumes: [ 'application/json' ], // 指定处理请求的提交内容类型 (Content-Type)，如 application/json、text/html
    produces: [ 'application/json' ], // 指定返回的内容类型，仅当 request 请求头中的(Accept)类型中包含该指定类型才返回
    securityDefinitions: {}, // 配置接口安全授权方式
    enableSecurity: false, // 是否启用授权，默认 false
    // enableValidate: true, // 是否启用参数校验，默认 true
    routerMap: false, // 是否启用自动生成路由(实验功能)，默认 true
    enable: true, // 默认 true
  };
  // 中间件-错误处理,Gzip压缩
  config.middleware = [ 'errorHandle', 'compress' ];
  config.compress = {
    threshold: 2048,
  };
  // 开启代理
  config.proxy = true;
  config.ipHeaders = 'X-Real-Ip, X-Forwarded-For';
  // Mongodb
  config.mongoose = {
    url: process.env.MONGO_URL || 'mongodb://121.41.109.1:27017/eggtoast',
    options: {
      // useMongoClient: true
      // autoReconnect: true,
      // reconnectTries: Number.MAX_VALUE,
      // bufferMaxEntries: 0,
    },
  };
  config.jwt = {
    secret: `wwpoij1oi2WS@2123`,
  }
  return {
    ...config,
    ...userConfig,
  };
};
