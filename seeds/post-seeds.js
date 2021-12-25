// import files
const { Post } = require('../models');

const postData = [
    {
        title: 'Why MVC is so important',
        content: 'MVC allows developers to maintain a true seperation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.',
    },
    {
        title: 'Helpers',
        content: 'Allow you to add small bits of logic or data manipulation to the template itself'
    },
    {
        title: 'Object-Relational Mapping',
        content: 'I have really loved learning about ORMs. Its really simplified the way I create queries in SQL!'
    },
    {
        title: 'Sessions',
        content: 'Creates a file in a temporary directory on the server where registered session variables and their values are stored.'
    },
    {
        title: 'Cookies',
        content: 'Are text files with small pieces of data — like a username and password — that are used to identify your computer as you use a computer network. Specific cookies known as HTTP cookies are used to identify specific users and improve your web browsing experience.'
    },
    {
        title: 'Handlebars',
        content: 'It uses a template and an input object to generate HTML or other text formats.'
    },
    {
        title: 'Partials',
        content: 'Are nomal Handlebars templates that may be called directly by other templates.'
    },
    {
        title: 'replace()',
        content: 'Returns a modified string, you can just chain the methods.'
    },
    {
        title: '{{ title }}',
        content: 'Two brackets will convert HTML characters to strings.'
    },
    {
        title: '{{{ body }}}',
        content: 'Three brackets will render the data as HTML'
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;