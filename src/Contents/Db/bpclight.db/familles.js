/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('familles', { 
    Kfam: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    LibFam: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Verrou: {
      type: 'TINYBLOB',
      allowNull: true,
    }
  });
};
