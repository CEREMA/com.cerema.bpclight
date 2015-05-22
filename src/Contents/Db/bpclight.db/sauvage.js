/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sauvage', { 
    Ksav: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Kuse: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    LibSavc: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    LibSav: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    DatSav: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    Troncage: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
    },
    Verrou: {
      type: 'TINYBLOB',
      allowNull: true,
    }
  });
};
