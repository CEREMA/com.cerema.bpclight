/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('melv', { 
    Kmelv: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Kser: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    LibMelV: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    Verrou: {
      type: 'TINYBLOB',
      allowNull: true,
    }
  });
};
