/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  // const { router, controller } = app;
  // router.get('/', controller.home.index);
  // router.get('/user', controller.user.index)
  // router.post('/user/register', controller.user.register);
    const { router, controller } = app;
    router.get('/', controller.home.index);
};
