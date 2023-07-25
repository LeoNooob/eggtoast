const { Controller } = require('egg');
const jimp = require('jimp')
const faceapi = require('face-api.js')

var qrcode_detector = null

/**
 * @controller QrcodeController
 * @summary 二维码识别模块
 */
class QrcodeController extends Controller {
  /**
   * @router post /detectAndDecode
   * @summary 识别上传来的图片中的二维码
   * @description 根据上传来的照片，探测照片里所有的二维码类型并加以识别破译结果，并整合成JSON数组返回
   * @response 200 indexJsonBody
   */
  async detectAndDecode() {
    const { ctx } = this;

    try {

      const file = ctx.request.files[0]
      const newImage = await faceapi.fetchImage('http://121.41.109.1:8090/i/2023/07/21/qrjuul.jpg')
      const newCanvas = await faceapi.createCanvasFromMedia(newImage)
      const result = await faceapi.detectAllFaces(newCanvas)
      const res = { result: result };
      ctx.helper.success({ ctx, res });
    } catch (error) {
      console.log(error)
    } finally {
      await ctx.cleanupRequestFiles()
    }

  }
}
module.exports = QrcodeController;
