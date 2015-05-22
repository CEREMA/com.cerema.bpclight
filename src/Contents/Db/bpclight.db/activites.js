/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('activites', { 
    Kact: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Kage: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Kann: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    LibAct: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ActLie: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
    },
    Verrou: {
      type: 'TINYBLOB',
      allowNull: true,
    }
  });
};
