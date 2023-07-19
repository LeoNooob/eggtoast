/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    router.post('/qrcode/detectAndDecode', controller.qrcode.detectAndDecode);
};