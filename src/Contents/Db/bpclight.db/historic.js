/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('historic', { 
    Khis: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    LogUse: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    LibHis: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    LibSubc: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    DatExe: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    TypExe: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Verrou: {
      type: 'TINYBLOB',
      allowNull: true,
    }
  });
};
