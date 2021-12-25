// import files
const { Post } = require('../models');

const postData = [
    {
        title: '',
    },
    {
        title: '',
    },
    {
        title: '',
    },
    {
        title: '',
    },
    {
        title: '',
    },
    {
        title: '',
    },
    {
        title: '',
    },
    {
        title: '',
    },
    {
        title: '',
    },
    {
        title: '',
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;