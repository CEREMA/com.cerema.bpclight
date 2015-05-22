/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mele', { 
    Kmele: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Kets: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    LibMelE: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
};
