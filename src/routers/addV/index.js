const Router = require('koa-router');
const httpRequest = require('../../services');

const router = new Router();

router.post('/', async (ctx, next) => {
  const { request } = ctx;
  const reqBody = request?.body ?? {};
  const res = await httpRequest.post('/addV', reqBody);
  ctx.body = res?.data ?? {};
});

module.exports = router.routes();