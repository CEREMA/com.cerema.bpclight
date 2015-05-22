/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('accents', { 
    Kacc: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    LibSAcc: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    LibAcc: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Verrou: {
      type: 'TINYBLOB',
      allowNull: true,
    }
  });
};
