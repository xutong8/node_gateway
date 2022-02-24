const Router = require('koa-router');

const router = new Router();

router.get('/', (ctx, next) => {
  ctx.body = 'index page';
});

module.exports = router.routes();