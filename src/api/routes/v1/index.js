const express = require('express');
const userRoutes = require('./user.route');
const authRoutes = require('./auth.route');

const router = express.Router();

// NOTE: 這邊的 route 管理，跟我們目前採用的類似
// 個人認為這樣的方法比 node-express-boilerplate 好
// 不只 route 明瞭，各個 route 也可以彈性增加中間層

/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.send('OK'));

/**
 * GET v1/docs
 */
router.use('/docs', express.static('docs'));

router.use('/users', userRoutes);
router.use('/auth', authRoutes);

module.exports = router;
