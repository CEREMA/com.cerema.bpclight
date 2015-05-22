/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('melu', { 
    Kmelu: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Kuni: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    LibMelU: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    Verrou: {
      type: 'TINYBLOB',
      allowNull: true,
    }
  });
};
