const { Controller } = require('egg');

/**
 * @controller UserController
 * @summary 用户管理模块
 */
class UserController extends Controller {
  /**
   * @router get /user
   * @summary 获取用户列表
   * @description 获取所有用户列表
   * @response 200 indexJsonBody
   */
  async index() {
    const { ctx } = this;
    const { pageNumber, pageSize } = ctx.params
    const condition = ctx.query
    try {
      const res = await ctx.model.User.find(condition).skip(Number(pageNumber) * Number(pageSize)).limit(Number(pageSize))
      const msg = res.length > 0 ? `找到${res.length}条记录` : '未查询到用户列表'
      ctx.helper.success({ ctx, res, msg })   
    } catch (error) {
      
    }
    
  }
  /**
   * @router post /user/register  注册用户
   * @summary 注册用户
   * @description 注册用户
   * @request body string username 用户名
   * @request body string password 密码
   * @request body string phone  电话号码
   * @response 200 indexJsonBody
   */
  
  async register(body) {
    const { ctx, app } = this;
    const { username, password, phone } = body
    const newUser = ctx.request.body
    const { id } = await ctx.model.User.create(newUser)
    const msg = `新增成功, id: ${id}`
    ctx.helper.success({ ctx, res: { id: id }, msg }) 
  }
}

module.exports = UserController;
