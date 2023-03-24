const User = require('./User');

User.hasMany(Comment, {
    foreignKey: `comment_id`
});

module.exports = { User, Comment};