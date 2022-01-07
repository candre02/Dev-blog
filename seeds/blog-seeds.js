// import files
const { Blog } = require('../models');


const blogdata = [
    {
      blog_text: 'Nunc rhoncus dui vel sem.',
      user_id: 9,
      post_id: 6
    },
    {
        blog_text: 'Nunc rhoncus dui vel sem.',
        user_id: 7,
        post_id: 9
    },
    {
        blog_text: 'Nunc rhoncus dui vel sem.',
        user_id: 4,
        post_id: 19
    },
    {
        blog_text: 'Nunc rhoncus dui vel sem.',
        user_id: 10,
        post_id: 1
    },
    {
        blog_text: 'Nunc rhoncus dui vel sem.',
        user_id: 2,
        post_id: 19
    },
    {
        blog_text: 'Nunc rhoncus dui vel sem.',
        user_id: 10,
        post_id: 1
    },
    {
        blog_text: 'Nunc rhoncus dui vel sem.',
        user_id: 10,
        post_id: 12
    },
    {
        blog_text: 'Nunc rhoncus dui vel sem.',
        user_id: 4,
        post_id: 6
    },
    {
        blog_text: 'Nunc rhoncus dui vel sem.',
        user_id: 2,
        post_id: 11
    },
    {
        blog_text: 'Nunc rhoncus dui vel sem.',
        user_id: 10,
        post_id: 10
    }
];

const seedBlogs = () => Blog.bulkCreate(blogdata);

module.exports = seedBlogs;