/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vehmark', { 
    Kvmk: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Marque: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Verrou: {
      type: 'TINYBLOB',
      allowNull: true,
    }
  });
};
