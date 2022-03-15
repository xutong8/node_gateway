const Router = require('koa-router');

const router = new Router();

router.post('/', async (ctx, next) => {
  const { request } = ctx;
  const reqBody = request?.body ?? {};
  const res = await httpRequest.post('/addT', reqBody);
  ctx.body = res?.data ?? {};
});

module.exports = router.routes();