/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('annexes', { 
    Kann: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Krol: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    LibAnnc: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    LibAnn: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Lie: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
    },
    Verrou: {
      type: 'TINYBLOB',
      allowNull: true,
    }
  });
};
