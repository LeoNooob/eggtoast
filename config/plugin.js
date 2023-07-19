'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  swaggerdoc: {
    enable: true,
    package: 'egg-swagger-doc',
  },
  mongoose: { enable: false, package: 'egg-mongoose' },
  jwt: {
    enable: true,
    package: 'egg-jwt'
  }
};
