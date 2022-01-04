// import files
const { Post } = require('../models');

const postdata = [
    {
        title: 'Why MVC is so important',
        content: 'MVC allows developers to maintain a true seperation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.',
        user_id: 10
    },
    {
        title: 'Helpers',
        content: 'Allow you to add small bits of logic or data manipulation to the template itself',
        user_id: 8
    },
    {
        title: 'Object-Relational Mapping',
        content: 'I have really loved learning about ORMs. Its really simplified the way I create queries in SQL!',
        user_id: 1
    },
    {
        title: 'Sessions',
        content: 'Creates a file in a temporary directory on the server where registered session variables and their values are stored.',
        user_id: 4
    },
    {
        title: 'Cookies',
        content: 'Are text files with small pieces of data — like a username and password — that are used to identify your computer as you use a computer network. Specific cookies known as HTTP cookies are used to identify specific users and improve your web browsing experience.',
        user_id: 7
    },
    {
        title: 'Handlebars',
        content: 'It uses a template and an input object to generate HTML or other text formats.',
        user_id: 4
    },
    {
        title: 'Partials',
        content: 'Are nomal Handlebars templates that may be called directly by other templates.',
        user_id: 1
    },
    {
        title: 'replace()',
        content: 'Returns a modified string, you can just chain the methods.',
        user_id: 1
    
    },
    {
        title: '{{ title }}',
        content: 'Two brackets will convert HTML characters to strings.',
        user_id: 9
    },
    {
        title: '{{{ body }}}',
        content: 'Three brackets will render the data as HTML',
        user_id: 5
    },
    {
        title: '{{{ body }}}',
        content: 'Three brackets will render the data as HTML',
        user_id: 3
    },
    {
        title: '{{{ body }}}',
        content: 'Three brackets will render the data as HTML',
        user_id: 10
    },
    {
        title: '{{{ body }}}',
        content: 'Three brackets will render the data as HTML',
        user_id: 8
    },
    {
        title: '{{{ body }}}',
        content: 'Three brackets will render the data as HTML',
        user_id: 3
    },
    {
        title: '{{{ body }}}',
        content: 'Three brackets will render the data as HTML',
        user_id: 3
    },
    {
        title: '{{{ body }}}',
        content: 'Three brackets will render the data as HTML',
        user_id: 7
    },
    {
        title: '{{{ body }}}',
        content: 'Three brackets will render the data as HTML',
        user_id: 6
    },
    {
        title: '{{{ body }}}',
        content: 'Three brackets will render the data as HTML',
        user_id: 4
    },
    {
        title: '{{{ body }}}',
        content: 'Three brackets will render the data as HTML',
        user_id: 6
    },
    {
        title: '{{{ body }}}',
        content: 'Three brackets will render the data as HTML',
        user_id: 7
    }

];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;