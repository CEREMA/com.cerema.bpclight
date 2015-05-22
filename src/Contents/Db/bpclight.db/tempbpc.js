/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tempbpc', { 
    Matri: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    NomPre: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    DatCre: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    DatOuv: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    DatMod: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    DatClo: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    Horcode: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    LibCourt: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    IneTP: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
    },
    InHS: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
    },
    DatHophJou: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    Verrou: {
      type: 'TINYBLOB',
      allowNull: true,
    }
  });
};
