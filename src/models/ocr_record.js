'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OCR_Record extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OCR_Record.init({
    identification_number: {
      type: DataTypes.STRING,
      unique: true
    },
    name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    date_of_birth: DataTypes.DATE,
    date_of_issue: DataTypes.DATE,
    date_of_expiry: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'OCR_Record',
  });
  return OCR_Record;
};



