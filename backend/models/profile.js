'use strict';
module.exports = (sequelize, DataTypes) => {
  var Profile = sequelize.define('Profile', {
    follows: DataTypes.NUMBER,
    followers: DataTypes.NUMBER,
    image: DataTypes.STRING,
    likes: DataTypes.NUMBER
  }, {});
  Profile.associate = function(models) {
    // associations can be defined here
  };
  return Profile;
};