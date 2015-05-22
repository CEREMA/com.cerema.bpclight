/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('param_droits', { 
    Kparam: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Kage: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    Param: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Value: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
};
