/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vehmod', { 
    Kvmd: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Kvmk: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Modele: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    CV: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    Verrou: {
      type: 'TINYBLOB',
      allowNull: true,
    }
  });
};
