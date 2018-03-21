'use strict';
module.exports = (sequelize, DataTypes) => {
  var Profile = sequelize.define('Profile', {
    follows: DataTypes.NUMBER,
    followers: DataTypes.NUMBER,
    user_photo: DataTypes.STRING,
    likes: DataTypes.NUMBER, 
    description: DataTypes.STRING, 
    images: DataTypes.ARRAY
  }, {});
  Profile.associate = function(models) {
    Profile.hasOne(User)
  };
  return Profile;
};