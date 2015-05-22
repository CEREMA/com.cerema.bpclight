/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vehassu', { 
    Kvas: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    NomAss: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Verrou: {
      type: 'TINYBLOB',
      allowNull: true,
    }
  });
};
