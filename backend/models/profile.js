'use strict';
module.exports = (sequelize, DataTypes) => {
  var Profile = sequelize.define('Profile', {
    follows: DataTypes.NUMBER,
    followers: DataTypes.NUMBER,
    image: DataTypes.STRING,
    likes: DataTypes.NUMBER, 
    description: DataTypes.STRING
  }, {});
  Profile.associate = function(models) {
    Profile.hasOne(User)
  };
  return Profile;
};