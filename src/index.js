const Koa = require('koa');
const koaBody = require('koa-body');
const router = require('./routers');
const cors = require('koa2-cors');
const logger = require('koa-logger');

const PORT = 8000;

const app = new Koa();

app.use(logger());

// body parser middleware
app.use(koaBody({
  multipart: true,
  formidable: {
    // 设置上传文件大小最大限制，默认2M
    maxFileSize: 200 * 1024 * 1024
  }
}));

// cors
app.use(cors());

// configure router
app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});