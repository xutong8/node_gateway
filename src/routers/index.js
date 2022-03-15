const Router = require('koa-router');
const upload = require('./upload');
const index = require('./entry');
const search = require('./search');
const addT = require('./addT');

const BASE_URL = '/gateway';

const router = new Router({
  prefix: BASE_URL
});

router.use('/index', index);
router.use('/upload', upload);
router.use('/search', search);
router.use('/addT', addT);

module.exports = router;