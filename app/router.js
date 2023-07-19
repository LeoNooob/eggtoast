'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  // const { router, controller } = app;
  // router.get('/', controller.home.index);
  // router.get('/user', controller.user.index)
  // router.post('/user/register', controller.user.register);
  require('./routers/home')(app)
  require('./routers/user')(app)
  require('./routers/qrcode')(app)
};
