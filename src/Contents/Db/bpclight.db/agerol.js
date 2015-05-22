/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agerol', { 
    Kagr: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Kage: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Krol: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Priorite: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    Verrou: {
      type: 'TINYBLOB',
      allowNull: true,
    }
  });
};
