/*
 * @Author: duantao-ds
 * @Date: 2018-08-22 18:54:10
 * @Last Modified by:   duantao-ds
 * @Last Modified time: 2018-08-22 18:54:10
 */

const webpackHot = require('webpack-hot-middleware')
const PassThrough = require('stream').PassThrough;

const hotMiddleware = (compiler, opts) => {
  const middleware = webpackHot(compiler, opts);
  return async (ctx, next) => {
    let stream = new PassThrough();
    ctx.body = stream;
    await middleware(ctx.req, {
        write: stream.write.bind(stream),
        writeHead: (status, headers) => {
          ctx.status = status;
          ctx.set(headers);
        }
      }, next);
  };
};


module.exports = hotMiddleware;
