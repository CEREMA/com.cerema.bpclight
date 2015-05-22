/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('postal', { 
    Id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    IdDepartement: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    IdZone: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    Code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Ville: {
      type: DataTypes.TEXT,
      allowNull: true,
    }
  });
};
