const { Controller } = require('egg');
var cv = require('../utils/opencv')
// var Utils = require('../utils/utils')
// const utils = new Utils()
const jimp = require('jimp')

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
      //加载OpenCV模块
      cv = await cv
      await loadModel()
      const file = ctx.request.files[0]
      const image = await jimp.read(file.filepath)
      const res = { abc: 123 };
      ctx.helper.success({ ctx, res });
    } catch (error) {
      console.log(error)
    } finally {
      await ctx.cleanupRequestFiles()
    }

  }
}
async function loadModel() {
  

  const detect_proto = "detect.prototxt";
  const detect_weight = "detect.caffemodel";
  const sr_proto = "sr.prototxt";
  const sr_weight = "sr.caffemodel";

  if (qrcode_detector != undefined) {
    updateStatus("Model Existed");
  } else {
    const dp = await utils.fetchModelsData(detect_proto);
    const dw = await utils.fetchModelsData(detect_weight);
    const sp = await utils.fetchModelsData(sr_proto);
    const sw = await utils.fetchModelsData(sr_weight);

    cv.FS_createDataFile("/", "detect.prototxt", dp, true, false, false);
    cv.FS_createDataFile("/", "detect.caffemodel", dw, true, false, false);
    cv.FS_createDataFile("/", "sr.prototxt", sp, true, false, false);
    cv.FS_createDataFile("/", "sr.caffemodel", sw, true, false, false);

    qrcode_detector = new cv.wechat_qrcode_WeChatQRCode(
      "detect.prototxt",
      "detect.caffemodel",
      "sr.prototxt",
      "sr.caffemodel"
    );
    updateStatus("OpenCV Model Created");
  }
}
function updateStatus(text)
{
  console.log(text)
}
module.exports = QrcodeController;
