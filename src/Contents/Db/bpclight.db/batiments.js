/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('batiments', { 
    Kbat: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    LibBatC: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    LibBat: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Verrou: {
      type: 'TINYBLOB',
      allowNull: true,
    },
    GPS: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
};
