const Router = require('koa-router');
const upload = require('./upload');
const index = require('./entry');
const search = require('./search');

const BASE_URL = '/gateway';

const router = new Router({
  prefix: BASE_URL
});

router.use('/index', index);
router.use('/upload', upload);
router.use('/search', search);

module.exports = router;