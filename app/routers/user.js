/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    router.get('/user/:pageNumber/:pageSize', controller.user.index)
    router.post('/user/register', controller.user.register);
};