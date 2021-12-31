const router = require('express').Router();
const { Blog } = require('../../models');

// Get all Blogs
router.get('/', (req, res) => {
  Blog.findAll()
    .then(dbBlogData => res.json(dbBlogData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Post: create new blogs
router.post('/', (req, res) => {
  // expects => {blog_text: "This is the blog", user_id: 1, post_id: 2}
  if (req.session) {
    Blog.create({
      blog_text: req.body.blog_text,
      user_id: req.session.user_id,
      post_id: req.body.post_id
    })
      .then(dbBlogData => res.json(dbBlogData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  }
});

// DELETE by its id 
router.delete('/:id', (req, res) => {
  if (req.session) {
    Blog.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbBlogData => {
        if (!dbBlogData) {
          res.status(404).json({ message: 'No blog found with this id!' });
          return;
        }
        res.json(dbBlogData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  }
});

module.exports = router;