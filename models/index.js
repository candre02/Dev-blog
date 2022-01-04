// import all models
const Post = require('./Post');
const User = require('./User');
const Blog = require('./Blog');



// create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Blog.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Blog.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
});

User.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Post.hasMany(Blog, {
    foreignKey: 'post_id' 
});

module.exports = { User, Post, Blog };