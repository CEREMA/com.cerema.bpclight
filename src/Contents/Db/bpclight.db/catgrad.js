/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('catgrad', { 
    Kcgr: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    LibCgr: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Verrou: {
      type: 'TINYBLOB',
      allowNull: true,
    }
  });
};
