const User = require('./User');
const Comment= require('./Comment');

User.hasMany(Comment, {
    foreignKey: `comment_id`
});

module.exports = { User, Comment};