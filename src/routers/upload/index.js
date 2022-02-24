const Router = require('koa-router');
const fs = require('fs');
const csv = require('csv-parser');
const httpRequest = require('../../services');

const router = new Router();

router.post('/', async (ctx, next) => {
  const { request, response } = ctx;
  // 上传文件
  const file = request.files.file;
  // 创建可读流
  const reader = fs.createReadStream(file.path);
  const promise = new Promise((resolve, reject) => {
    const dataSource = [];
    reader.pipe(csv())
      .on('data', (data) => dataSource.push(data))
      .on('end', () => {
        resolve(dataSource);
      })
  });
  const dataSource = await promise;
  if (!Array.isArray(dataSource)) {
    throw new TypeError('csv data must be an array.');
  }
  const headers = Object.keys(dataSource?.[0] ?? {});
  const body = [];
  dataSource.forEach(item => {
    const newItem = {};
    headers.forEach(header => {
      newItem[header] = Number.isNaN(+item[header]) ? item[header] : Number.parseFloat(item[header]);
    });
    body.push(newItem);
  });

  const res = await httpRequest.post('/csv', {
    body,
    headers
  });
  ctx.body = res?.data ?? {}; 
});

module.exports = router.routes();