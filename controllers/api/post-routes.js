// import files
const router = require('express').Router();
const sequelize = require('../../config/connection');
const { User, Post, Blog } = require('../../models');

// Get all posts
router.get('/', (req, res) => {
    console.log('======================');
    Post.findAll({
      attributes: [
        'id',
        'post_url',
        'title',
        'created_at'
      ],
      include: [
        {
          model: Blog,
          attributes: ['id', 'blog_text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  // Get by a single id
  router.post('/', (req, res) => {
    if (req.session) {
        Post.create({
          title: req.body.title,
          post_url: req.body.post_url,
          user_id: req.session.user_id
        })
          .then(dbPostData => res.json(dbPostData))
          .catch(err => {
            console.log(err);
            res.status(500).json(err);
          });
        }
  });

  // Update by its id
router.put('/:id', (req, res) => {
    Post.update(
      {
        title: req.body.title
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  // Delete by its id
  router.delete('/:id', (req, res) => {
    console.log('id', req.params.id);
    Post.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  module.exports = router;