/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('motif', { 
    kmof: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    motif: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
};
