const Router = require('koa-router');
const httpRequest = require('../../services');

const router = new Router();

router.post('/', async (ctx, next) => {
  const res = await httpRequest.post('/search');
  ctx.body = res?.data ?? {};
});

module.exports = router.routes();