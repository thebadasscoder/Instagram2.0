'use strict';
module.exports = (sequelize, DataTypes) => {
  var Post = sequelize.define('Post', {
    url: DataTypes.STRING,
    caption: DataTypes.STRING
  }, {});
  Post.associate = function(models) {
    Post.belongsTo(models.User);
  };
  return Post;
};