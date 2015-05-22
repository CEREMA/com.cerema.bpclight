/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agecode', { 
    Kcod: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Kage: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    CodConf: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    CodChauf: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Verrou: {
      type: 'TINYBLOB',
      allowNull: true,
    }
  });
};
