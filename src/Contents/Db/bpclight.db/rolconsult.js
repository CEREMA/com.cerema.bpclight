/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rolconsult', { 
    kRolConsult: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    krol: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    KConsult: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    }
  });
};
