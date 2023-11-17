'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RestaurantList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RestaurantList.init({
    RESTAURANT_NAME: DataTypes.STRING,
    RESTAURANT_IMAGE: DataTypes.STRING,
    RESTAURANT_DESCRIPTION: DataTypes.STRING,
    RESTAURANT_ADDRESS: DataTypes.STRING,
    RESTAURANT_NUMBER: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'RestaurantList',
  });
  return RestaurantList;
};