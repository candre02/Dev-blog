const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const blogRoutes = require('./blog-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/blogs', blogRoutes);

module.exports = router;
