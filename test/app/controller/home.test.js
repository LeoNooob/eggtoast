'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/home.test.js', () => {
  it('should assert', async () => {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));

    // const ctx = app.mockContext({});
    // yield ctx.service.xx();
  });

  it('should GET /', async () => {
    return app.httpRequest()
      .get('/')
      .expect({ code: 0, data: { abc: 123 }, msg: '请求成功' })
      .expect(200);
  });
});
