// import files 
const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userData = [
    {
        username: 'jbond0',
        email: 'jbond0@cbc.ca',
        password: 'password321'
    },
    {
        username: 'tstark1',
        email: 'tstark1@gmail.com',
        password: 'password321'
    },
    {
        username: 'ckent2',
        email: 'ckent2@hotmail.com',
        password: 'password321'
    },
    {
        username: 'bwayne3',
        email: 'bwayne3@batty.com',
        password: 'password321'
    },
    {
        username: 'thor4',
        email: 'thor4@thundersky.com',
        password: 'password321'
    },
    {
        username: 'jgrey5',
        email: 'jgrey5@disaster.com',
        password: 'password321'
    },
    {
        username: 'lvoldemort6',
        email: 'lvoldemort6@live.com',
        password: 'password321'
    },
    {
        username: 'hlecter7',
        email: 'hlecter7@google.com',
        password: 'password321'
    },
    {
        username: 'storm8',
        email: 'storm8@weather.com',
        password: 'password321'
    },
    {
        username: 'joker9',
        email: 'joker9@windows.com',
        password: 'password321'
    }
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;
