/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('versions', { 
    Kver: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    LibVer: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    DatVer: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    Numero: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Obs: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    Activite: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
    },
    Verrou: {
      type: 'TINYBLOB',
      allowNull: true,
    }
  });
};
