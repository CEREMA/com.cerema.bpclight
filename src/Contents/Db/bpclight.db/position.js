/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('position', { 
    Kpst: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    IDPos: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Position: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    Ordre: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
    },
    Verrou: {
      type: 'TINYBLOB',
      allowNull: true,
    }
  });
};
