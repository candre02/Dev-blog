// import files
const { Blog } = require('../models');


const blogdata = [
    {
      blog_text: 'Very Informative, thank you for sharing :)',
      user_id: 9,
      post_id: 6
    },
    {
        blog_text: 'Rad!',
        user_id: 7,
        post_id: 9
    },
    {
        blog_text: 'Dope',
        user_id: 4,
        post_id: 19
    },
    {
        blog_text: 'We discussed this in class today!',
        user_id: 10,
        post_id: 1
    },
    {
        blog_text: 'This is great infomation :)',
        user_id: 2,
        post_id: 19
    },
    {
        blog_text: 'This is AMAZING, Thanks for sharing!',
        user_id: 10,
        post_id: 1
    },
    {
        blog_text: 'Wow!',
        user_id: 10,
        post_id: 12
    },
    {
        blog_text: 'Fire!',
        user_id: 4,
        post_id: 6
    },
    {
        blog_text: 'Neat',
        user_id: 2,
        post_id: 11
    },
    {
        blog_text: 'Pretty cool stuff!',
        user_id: 10,
        post_id: 10
    }
];

const seedBlogs = () => Blog.bulkCreate(blogdata);

module.exports = seedBlogs;