/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('roles', { 
    Krol: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    CodRol: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    LibRolc: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    LibRol: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Verrou: {
      type: 'TINYBLOB',
      allowNull: true,
    }
  });
};
