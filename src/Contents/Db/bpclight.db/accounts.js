/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('accounts', { 
    login: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    kage: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    cid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    }
  });
};
