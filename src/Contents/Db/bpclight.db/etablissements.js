/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('etablissements', { 
    Kets: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Kadr: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    LibEts: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    LibEtsC: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Obs: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    etsGESPER: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Archive: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    }
  });
};
