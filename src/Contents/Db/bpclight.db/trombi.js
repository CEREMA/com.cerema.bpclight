/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trombi', { 
    kage: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    trombi: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  });
};
