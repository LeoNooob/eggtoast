/* eslint-disable jsdoc/check-tag-names */
'use strict';

const { Controller } = require('egg');

/**
 * @controller HomeController
 */
class HomeController extends Controller {
  /**
   * @router get /index  路径
   * @summary 接口的小标题信息
   * @description 接口的描述信息
   * @request query integer id 对参数id的描述
   * @request query string name 对参数name的描述
   * @response 200 indexJsonBody
   */
  async index() {
    const { ctx } = this;
    const res = { abc: 123 };
    // ctx.body = 'hi, egg';
    ctx.helper.success({ ctx, res });
  }
}

module.exports = HomeController;
