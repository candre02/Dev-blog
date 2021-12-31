// import files
const { Blog } = require('../models');


const blogData = [
    {
      blog_text: 'Nunc rhoncus dui vel sem.',
      user_id: 1,
      post_id: 1
    },
    {
        blog_text: 'Nunc rhoncus dui vel sem.',
        user_id: 2,
        post_id: 2
    },
    {
        blog_text: 'Nunc rhoncus dui vel sem.',
        user_id: 3,
        post_id: 3
    },
    {
        blog_text: 'Nunc rhoncus dui vel sem.',
        user_id: 4,
        post_id: 4
    },
    {
        blog_text: 'Nunc rhoncus dui vel sem.',
        user_id: 5,
        post_id: 5
    },
    {
        blog_text: 'Nunc rhoncus dui vel sem.',
        user_id: 6,
        post_id: 6
    },
    {
        blog_text: 'Nunc rhoncus dui vel sem.',
        user_id: 7,
        post_id: 7
    },
    {
        blog_text: 'Nunc rhoncus dui vel sem.',
        user_id: 8,
        post_id: 8
    },
    {
        blog_text: 'Nunc rhoncus dui vel sem.',
        user_id: 9,
        post_id: 9
    },
    {
        blog_text: 'Nunc rhoncus dui vel sem.',
        user_id: 10,
        post_id: 10
    }
];

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;