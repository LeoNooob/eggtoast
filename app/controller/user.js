/* eslint-disable jsdoc/check-tag-names */
'use strict';

const { Controller } = require('egg');

/**
 * @controller UserController
 */
class UserController extends Controller {
  /**
   * @router get /user/register  路径
   * @summary 接口的小标题信息
   * @description 接口的描述信息
   * @request query integer id 对参数id的描述
   * @request query string name 对参数name的描述
   * @response 200 indexJsonBody
   */
  async register(body) {
    const { ctx, app } = this;
    // const res = { abc: 123 };
    // ctx.body = 'hi, egg';
    const { username, password, phone } = body
    const newUser = ctx.request.body
    const { id } = await ctx.model.User.create(newUser)
    return 'success'
  }
}

module.exports = UserController;
