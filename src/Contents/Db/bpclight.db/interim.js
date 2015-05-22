/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('interim', { 
    PID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    AGENT: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    V1: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    V2: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    }
  });
};
