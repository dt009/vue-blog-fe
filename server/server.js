/*
 * @Author: duantao-ds
 * @Date: 2018-08-09 11:10:08
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2019-01-07 16:41:26
 */

const config = require('../config/config');
const Koa = require('koa');
const webpackDevMiddleware = require('koa-webpack-dev-middleware');
const webpackHotMiddleware = require('koa-webpack-hot-middleware');
const app = new Koa();
const fetch = require('node-fetch');

// 中间件容器，把webpack处理后的文件传递给一个服务器
const devMiddleware = require('./middleware/devMiddleware');
// 在内存中编译的插件，不写入磁盘来提高性能
const hotMiddleware = require('./middleware/hotMiddleware');

const webpack = require('webpack');

const webpackConfig = require('../webpack-config/webpack.dev');

const compiler = webpack(webpackConfig);

app.use(devMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
}))

app.use(hotMiddleware(compiler));

function proxy(...args) {
    return fetch.apply(null, args).then(res => res.json())
}


// app.use(async (ctx, next) => {
//     console.log('url ==>> ', ctx.method, ctx.url);
//     await next();
//     ctx.body = {
//         a:111
//     }
// })

// app.use(async (ctx, next) => {
//     console.log('url ===>> ', ctx.url, ctx.method);
//     await next();
//     let a = await proxy('http://localhost:8080/test-post', 'POST')
//     console.log(a);
//     ctx.body = a;
// })

app.listen(config.port)

console.log('服务启动: http://loaclhost:' + config.port);
